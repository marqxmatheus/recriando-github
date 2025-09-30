import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

type RepoInfo = {
  stargazers_count: number;
  forks_count: number;
  full_name: string;
  html_url: string;
};

const Repo: React.FC = () => {
  const { username, reponame } = useParams<{ username?: string; reponame?: string }>();

  const owner = username ?? 'marqxmatheus';
  const repo = reponame ?? 'recriando-github';

  const [data, setData] = React.useState<RepoInfo | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;

    fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
        const json = (await res.json()) as RepoInfo;
        if (!cancelled) setData(json);
      })
      .catch((e) => !cancelled && setError(e.message));

    return () => { cancelled = true; };
  }, [owner, repo]);

  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className="username" to={`/${owner}`}>{owner}</Link>
        <span>/</span>
        <Link className="reponame" to={`/${owner}/${repo}`}>{repo}</Link>
      </Breadcrumb>

      <Stats aria-live="polite">
        <li>
          <StarIcon />
          <b>{data?.stargazers_count ?? '—'}</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{data?.forks_count ?? '—'}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton
        href={data?.html_url ?? `https://github.com/${owner}/${repo}`}
        target="_blank" rel="noreferrer noopener"
      >
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>

      {error && <p role="alert">Erro ao carregar: {error}</p>}
    </Container>
  );
};

export default Repo;
