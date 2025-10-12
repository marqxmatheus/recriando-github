import React from 'react';

import { Container, Flex, Avatar, Row, PeopleIcon, Column, CompanyIcon, LocationIcon, EmailIcon, BlogIcon } from './styles';

const formatCount = (n: number) => {
  try {
    return Intl.NumberFormat('en', {
      notation: 'compact',
      maximumFractionDigits: 1,
    })
      .format(n)
      .toLowerCase(); 
  } catch {
    const abs = Math.abs(n);
    const sign = n < 0 ? '-' : '';
    if (abs < 1_000) return String(n);
    if (abs < 1_000_000) return sign + (Math.round((abs / 1_000) * 10) / 10) + 'k';
    if (abs < 1_000_000_000) return sign + (Math.round((abs / 1_000_000) * 10) / 10) + 'm';
    return sign + (Math.round((abs / 1_000_000_000) * 10) / 10) + 'b';
  }
};

interface Props {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

const ProfileData: React.FC<Props> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />

        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>

      <Row>
        <li>
          <PeopleIcon />
          <b title={followers.toLocaleString()}>{formatCount(followers)}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b title={following.toLocaleString()}>{formatCount(following)}</b>
          <span>following</span>
        </li>
      </Row>


      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
