import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Juliano Soares</h1>
        <h2>@juliano45soares</h2>

        <p>
          Developer at <a href="#...">@UFSM</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Santa Maria, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 12 de fevereiro de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>56</strong>
          </span>
          <span>
            <strong>674 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;