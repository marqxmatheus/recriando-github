import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData'


const Profile: React.FC = () => {
  return (
    <Container>
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

        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
