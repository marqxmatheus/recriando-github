import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'


const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wraper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={'marqxmatheus'}
            name={'Matheus Caetano'}
            avatarUrl={'https://avatars.githubusercontent.com/u/101539634?v=4'}
            followers={2}
            following={7}
            company={'Resulti Sistemas'}
            location={'Cianorte, Brasil'}
            email={'matheus.marques5215@gmail.com'}
            blog={undefined}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username={'marqxmatheus'}
                  reponame={'recriando-github'}
                  description={'Recriando Github'}
                  language={n % 3 === 0 ? 'JavaScript' : 'Typescript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
