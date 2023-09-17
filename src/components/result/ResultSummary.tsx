import React from 'react';
import { extrovertText, introvertText } from 'data/constants';

interface IProps {
  introVal: number;
  extroVal: number;
}

const PersonalityResult = ({ introVal, extroVal }: IProps) => {
  return (
    <>
      <h4 className="text-2xl text-center">
        {' '}
        {introVal > extroVal ? `You're an introvert` : `You're an extrovert`}
      </h4>
      <div className="text-center">
        {introVal > extroVal ? introvertText : extrovertText}
      </div>
    </>
  );
};

// Does it display appropriate value dependent on the val fed in

export default PersonalityResult;
