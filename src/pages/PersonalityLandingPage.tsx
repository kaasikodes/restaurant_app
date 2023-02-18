import React from 'react';
import { Button } from 'antd';

const PersonalityLandingPage = () => {
  let url = '/personality/start';

  return (
    <div className="mt-6 flex flex-col items-stretch gap-4">
      <p className="text-center">
        Find out what is personality by taking a series of tests that have been
        curated by the best doctors worldwide
      </p>
      <div className="flex justify-center w-full">
        <Button size="large" href={url}>
          Start Test
        </Button>
      </div>
    </div>
  );
};

export default PersonalityLandingPage;
