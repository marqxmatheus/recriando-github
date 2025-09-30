import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
  gap: 12px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 40%;

  input {
    background: var(--search);
    border: 1px solid #b1aaaa;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;

    color: ${({ theme }) => theme.inputText};
    caret-color: ${({ theme }) => theme.inputText};
    &::placeholder { color: ${({ theme }) => theme.inputPlaceholder}; opacity: 1; }

    &:focus {
      width: 318px;
      border: 1px solid #b1aaaa;
      outline: none;
    }
    transition: width .2s ease-out, color .2s ease-out;
  }
`;

export const ThemeToggle = styled.button`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: transparent;
  border: 1px solid var(--logo);
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
    fill: var(--logo);
  }

  &:hover { background: rgba(255,255,255,0.06); }
  &:focus-visible { outline: 2px solid var(--logo); outline-offset: 2px; }
`;
