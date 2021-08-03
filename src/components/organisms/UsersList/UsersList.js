import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { Wrapper } from 'components/organisms/UsersList/UsersList.styles';

const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData) => (
        <UserListItem key={userData.name} userData={userData} />
      ))}
    </ul>
  </Wrapper>
);

export default UsersList;
