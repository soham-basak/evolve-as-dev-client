import Brand from '../Brand';
import Container from '../Container';
import ThemeToggle from '../ThemeToggle';
import Links from './Links';

const Navbar = () => {
  return (
    <nav className='sticky left-0 top-0 z-40 flex h-16 w-full items-center justify-center border-b-[1px] border-slate-300 bg-background shadow-lg dark:border-slate-800'>
      <Container className='flex w-full items-center justify-between'>
        <div className='flex items-center justify-between w-full'>
          <Brand />
          <Links className='hidden sm:flex' />
          <ThemeToggle />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
