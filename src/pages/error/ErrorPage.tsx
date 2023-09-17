import ErrorComponent from 'components/error/ErrorComponent';
import { pRoutes } from 'data/routes';
import React from 'react';

const ErrorPage = () => {
  return (
    <div className="mt-4">
      <ErrorComponent
        message="Oops, it seems this page does not exist!"
        link={{ url: pRoutes.index, text: 'Go back home' }}
        img={`/assets/404.jpg`}
      />
    </div>
  );
};

// Does the err page display an image
// and does it show appropriate text
// Does it provide a link back to the home page

export default ErrorPage;
