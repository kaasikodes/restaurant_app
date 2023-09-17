import React from 'react';
import { Button } from 'antd';
import { pRoutes } from 'data/routes';

const Home = () => {
  return (
    <div className="mt-6 flex flex-col items-stretch gap-4">
      <h4 className="text-2xl text-center">
        Are you are an introvert or extrovert?
      </h4>
      <p className="text-center">
        Find out what is personality by taking a series of tests that have been
        curated by the best doctors worldwide
      </p>
      <div className="flex justify-center w-full">
        <Button size="large" href={pRoutes.start}>
          Start Test
        </Button>
      </div>
    </div>
  );
};

export default Home;

// Tests
// does comp have appropriate text
// Does comp display a link with the proper url
// is that link disabled
