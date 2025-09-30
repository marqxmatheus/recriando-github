import { createGlobalStyle } from 'styled-components';
import type { ThemeType } from './themes';

export default createGlobalStyle<{ theme: ThemeType }>`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body, #root { min-height: 100%; }

  :root {
    ${({ theme }) =>
    Object.entries(theme)
      .map(([k, v]) => `--${k}: ${v}`)
      .join(';\n')
  };
  }

  body {
    background: var(--primary);
    color: var(--black);
    font: 400 16px/1.5 system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial;
  }

  a { color: var(--link); }
`;
