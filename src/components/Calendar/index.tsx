import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { subYears } from 'date-fns';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import { ghGql } from '../../services/github';

type HeatItem = { date: Date; count: number };

type GQLDay = { date: string; contributionCount: number };
type GQLWeek = { contributionDays: GQLDay[] };
type GQLResp = {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: { weeks: GQLWeek[] };
      };
    } | null;
  };
};

const QUERY = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks { contributionDays { date contributionCount } }
        }
      }
    }
  }
`;

function startOfWeekSunday(d: Date) {
  const x = new Date(d);
  const dow = x.getDay(); // 0=Dom
  x.setDate(x.getDate() - dow);
  x.setHours(0, 0, 0, 0);
  return x;
}

function toLocalDate(isoYMD: string): Date {
  const [y, m, d] = isoYMD.split('-').map(Number);
  return new Date(y, (m as number) - 1, d);
}

function flattenWeeks(weeks: GQLWeek[]): HeatItem[] {
  return weeks.flatMap((w) =>
    w.contributionDays.map((d) => ({
      date: toLocalDate(d.date),
      count: d.contributionCount,
    }))
  );
}

const GithubCalendar: React.FC<{ username?: string }> = ({ username }) => {
  const params = useParams<{ username?: string }>();
  const login = username ?? params.username ?? 'octocat';

  const { startDate, endDate, startISO, endISO } = React.useMemo(() => {
    const end = new Date();
    end.setHours(23, 59, 59, 999);            
    const start = startOfWeekSunday(subYears(end, 1)); 
    return { startDate: start, endDate: end, startISO: start.toISOString(), endISO: end.toISOString() };
  }, []);

  const [values, setValues] = React.useState<HeatItem[]>([]);
  const [maxCount, setMaxCount] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const json = await ghGql<GQLResp>(QUERY, { login, from: startISO, to: endISO });
        const weeks = json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? [];
        const vals = flattenWeeks(weeks).filter(v => v.date <= endDate);

        if (!cancelled) {
          setValues(vals);
          setMaxCount(vals.reduce((m, v) => (v.count > m ? v.count : m), 0));
        }
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Erro desconhecido ao carregar calendário.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [login, startISO, endISO, endDate]);

  const classForValue = React.useCallback(
    (item: HeatItem | null) => {
      if (!item || item.count === 0 || maxCount === 0) return 'scale-0';
      const q = item.count / maxCount;
      if (q > 0.75) return 'scale-4';
      if (q > 0.5) return 'scale-3';
      if (q > 0.25) return 'scale-2';
      return 'scale-1';
    },
    [maxCount]
  );

  return (
    <Container>
      <div className="wrapper">
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}         
          values={values}
          gutterSize={3.5}
          classForValue={classForValue as any}
          showWeekdayLabels
          tooltipDataAttrs={(val: any) =>
            val?.date
              ? { 'aria-label': `${(val.date as Date).toLocaleDateString()} - ${val.count} contribuição(ões)` }
              : {}
          }
        />
        {loading && <p>Carregando calendário…</p>}
        {error && <p role="alert">Erro ao carregar calendário: {error}</p>}
      </div>
    </Container>
  );
};

export default GithubCalendar;
