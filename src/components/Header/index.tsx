import type React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';

import { Container, GithubLogo, SearchForm, ThemeToggle } from './styles';
import type { ThemeName } from '../../styles/themes';

interface Props {
  themeName: ThemeName;
  setThemeName: React.Dispatch<React.SetStateAction<ThemeName>>;
}


const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = search.trim().toLowerCase();
    if (q) navigate('/' + q);
  }

  const toggleTheme = () => setThemeName(p => (p === 'light' ? 'dark' : 'light'));

  return (
    <Container>
      <GithubLogo aria-hidden="true" />

      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>

      <ThemeToggle
        type="button"
        onClick={toggleTheme}
        aria-pressed={themeName === 'dark'}
        title={themeName === 'dark' ? 'Tema claro' : 'Tema escuro'}
      >
        <FaMoon aria-hidden="true" />
      </ThemeToggle>
    </Container>
  );
};

export default Header;
