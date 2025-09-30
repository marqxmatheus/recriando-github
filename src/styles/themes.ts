export const themes = {
  light: {
    primary: '#fff',
    black: '#1b1f23',
    gray: '#586069',
    'gray-light': '#6a737d',
    'gray-dark': '#24292e',
    orange: '#f9826c',

    header: '#f6f8fa',
    logo: '#1f2328',
    username: '#666',
    search: 'rgba(255, 255, 255, 0.13)',
    'search-placeholder': 'hsla(0,0%,100%,.75)',
    icon: '#6a737d',
    link: '#0366d6',
    border: '#e1e4e8',
    ticker: 'rgba(209,213,218,.5)',

    calendar0: '#ebedf0',
    calendar1: '#9be9a8',
    calendar2: '#40c463',
    calendar3: '#30a14e',
    calendar4: '#216e39',

    javascript: '#f1e05a',
    typescript: '#2b7489',
    java: '#b07219',
    'other-language': '#8257e5',
  },
  dark: {
    primary: '#212830',
    black: '#c6c6c6',
    gray: '#afafaf',
    'gray-light': '#6a737d',
    'gray-dark': '#c6c6c6',
    orange: '#fff',

    header: '#151b23',
    logo: '#fff',
    username: '#9b9b9b',
    search: '#151b23',
    'search-placeholder': '#c6c6c6',
    icon: '#9b9b9b',
    link: '#96d0ff',
    border: '#343434',
    ticker: 'rgba(90, 90, 90, .5)',

    calendar0: '#161b22',
    calendar1: '#0e4429',
    calendar2: '#006d32',
    calendar3: '#26a641',
    calendar4: '#39d353',

    javascript: '#f1e05a',
    typescript: '#2b7489',
    java: '#b07219',
    'other-language': '#8257e5',
  },
} as const;

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light;
