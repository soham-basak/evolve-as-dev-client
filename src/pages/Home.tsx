import Container from '@/components/Container';
import Navbar from '@/components/nav/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Home;
