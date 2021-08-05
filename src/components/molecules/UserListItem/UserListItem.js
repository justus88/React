import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button';
import Average from 'components/atoms/Average';
import {
  Wrapper,
  AverageWrapper,
  Name,
  Attendance,
  UserName,
} from 'components/molecules/UserListItem/UserListItem.styles';

const UserListItem = ({
  index,
  userData: { average, name, attendance = '0%' },
}) => {
  const showIndex = (index) => alert(`This is student #${index + 1}`);

  return (
    <Wrapper>
      <AverageWrapper>
        <Average average={average} />
      </AverageWrapper>
      <UserName>
        <Name>{name}</Name>
        <Attendance>attendance: {attendance}</Attendance>
      </UserName>
      <Button onClick={() => showIndex(index)} />
    </Wrapper>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
