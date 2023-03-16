import { displayAppropriateText } from 'helpers';
import React from 'react';

interface IProps {
  introVal: number;
  extroVal: number;
}

const PersonalityResult = ({ introVal, extroVal }: IProps) => {
  return <div>{displayAppropriateText(introVal, extroVal)}</div>;
};

export default PersonalityResult;
