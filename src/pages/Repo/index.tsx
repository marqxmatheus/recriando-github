import React from 'react';
import { Link } from 'react-router-dom'

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon, } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/marqxmatheus'}>
          marqxmatheus
        </Link>

        <span></span>

        <Link className={'reponame'} to={'/marqxmatheus/recriando-github'}>
          recriando-github
        </Link>
      </Breadcrumb>

      <p>Recriando a interface do Github utilizando React e Typescript</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/marqxmatheus/recriando-github"}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  )
}

export default Repo;
