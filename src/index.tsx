import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from 'pages/error';

import GlobalContextProvider from 'contexts/GlobalContextProvider';

import { pRoutes } from 'data/routes';
import Layout from 'components/layout';
import Home from 'pages/home';
import Assessment from 'pages/assessment';
import Result from 'pages/result';

const router = createBrowserRouter([
  {
    path: pRoutes.index,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: pRoutes.index,
        element: <Home />,
      },
      {
        path: pRoutes.start,
        element: <Assessment />,
      },
      {
        path: pRoutes.result,
        element: <Result />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
