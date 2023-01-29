import PropTypes from 'prop-types';

import {
  ProfileWrapper,
  Description,
  Avatar,
  Name,
  UserInfo,
  StatsWrapper,
  StatsItem,
  Label,
  Quantity,
} from './ProfileWrapper.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <StatsWrapper>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers.toLocaleString('en-US')}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views.toLocaleString('en-US')}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes</Label>
          <Quantity>{likes.toLocaleString('en-US')}</Quantity>
        </StatsItem>
      </StatsWrapper>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
