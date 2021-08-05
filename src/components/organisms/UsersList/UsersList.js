import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import {
  Wrapper,
  StyledList,
} from 'components/organisms/UsersList/UsersList.styles';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, i) => (
        <UserListItem index={i} key={userData.name} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
