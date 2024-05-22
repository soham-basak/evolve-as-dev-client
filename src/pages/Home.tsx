import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Navbar from '@/components/nav/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />

      <Container className='mt-6'>
        <Outlet />
      </Container>

      <Footer className='mt-32' />
    </>
  );
};

export default Home;
