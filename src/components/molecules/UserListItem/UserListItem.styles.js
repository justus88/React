import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 24px;
    padding-bottom: 24px;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.grey};
      opacity: 0.5;
    }
  }
`;

export const AverageWrapper = styled.div`
  margin-right: 24px;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  line-height: 1;
  margin: 0 0 1px 0;
  font-weight: 700;
`;

export const Attendance = styled.p`
  margin: 0;
  line-height: 1;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const UserName = styled.div`
  margin-right: 14px;
`;
