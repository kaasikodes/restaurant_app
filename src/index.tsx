import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'general/Layout';
import Error from 'general/Error';
import ContactPage from 'pages/ContactPage';
import HomePage from 'pages/HomePage';
import GlobalContextProvider from 'contexts/GlobalContextProvider';
import PersonalityTestPage from 'pages/PersonalityTestPage';
import PersonalityLandingPage from 'pages/PersonalityLandingPage';
import AppLayout from 'components/AppLayout';
import PersonalityResultPage from 'pages/PersonalityResultPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
  {
    path: '/personality',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'home',
        element: <PersonalityLandingPage />,
      },
      {
        path: 'start',
        element: <PersonalityTestPage />,
      },
      {
        path: 'result',
        element: <PersonalityResultPage />,
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
