import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`

export const GithubLogo = styled(FaGithub)`
  fill: var(--black);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`

export const SearchForm = styled.form`
    padding-left: 16px;
    width: 40%;

    input {
    background: var(--search);
    border: 1px solid;
    border-color: #b1aaaaff;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;

    &:focus{
      width: 318px;
      border: 1px solid;
    }

    transition: width .2s ease-out, color .2s ease-out;
  }
`;
