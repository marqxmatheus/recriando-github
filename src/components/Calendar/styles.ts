import styled from 'styled-components';

export const Container = styled.div`
  --c0: #ebedf0;
  --c1: #9be9a8;
  --c2: #40c463;
  --c3: #30a14e;
  --c4: #216e39;

  .wrapper {
    overflow-x: auto;
  }

  .react-calendar-heatmap rect {
    shape-rendering: geometricPrecision;
    transition: fill 120ms ease-in-out;
  }

  .react-calendar-heatmap .scale-0 { fill: var(--c0) !important; }
  .react-calendar-heatmap .scale-1 { fill: var(--c1) !important; }
  .react-calendar-heatmap .scale-2 { fill: var(--c2) !important; }
  .react-calendar-heatmap .scale-3 { fill: var(--c3) !important; }
  .react-calendar-heatmap .scale-4 { fill: var(--c4) !important; }

  .react-calendar-heatmap .scale-1:hover,
  .react-calendar-heatmap .scale-2:hover,
  .react-calendar-heatmap .scale-3:hover,
  .react-calendar-heatmap .scale-4:hover {
    filter: brightness(0.95);
  }

  .react-calendar-heatmap .react-calendar-heatmap-weekday-label {
    font-size: 10px;
    fill: var(--gray, #7a828e);
  }
`;
