import { RouteObject, createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/Home';
import Login from '@/pages/Login';
import Landing from '@/components/Landing';
import Navbar from '@/components/nav/Navbar';
import Container from '@/components/Container';
import Footer from '@/components/Footer';

const routesConfig = [
  // Just for the landing page ('/' -> route only).
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Container className='mt-24'>
          <Landing />
        </Container>
        <Footer className='mt-32' />
      </>
    ),

    // errorElement: 'This page does not exists. Make sure to changes this 404 page later.',
  },
  // All children will inherit this layout with navbar and container ('/*' route).
  {
    path: '/',
    element: <HomePage />,
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
