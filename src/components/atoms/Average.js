import React from 'react';
import { StyledAverage } from 'components/atoms/Average.styles';

const Average = ({ average }) => (
  <StyledAverage value={average}>{average}</StyledAverage>
);

export default Average;
