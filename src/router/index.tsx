import { RouteObject, createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/Home';
import Login from '@/pages/Login';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: 'This page does not exists. Make sure to changes this 404 page later.',
    children: [
      {
        path: '/item2',
        element: 'item2 page',
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
] satisfies RouteObject[];

export const router = createBrowserRouter(routesConfig);
