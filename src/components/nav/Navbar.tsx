import Icons from '@/config/Icons';
import Brand from '../Brand';
import Container from '../Container';
import ThemeToggle from '../ThemeToggle';
import Links from './Links';
import { Link } from 'react-router-dom';
import { useSession } from '@/context/SessionContext';
import User from '../User';
import UserLoading from '../loadings/UserLoading';

const Navbar = () => {
  const { session, isLoading } = useSession();

  return (
    <nav className='sticky left-0 top-0 z-40 flex h-16 w-full items-center justify-center border-b dark:border-b-neutral-800 border-slate-300 bg-background'>
      <Container className='flex w-full items-center justify-between'>
        <div className='flex items-center justify-between w-full'>
          <Link to='/'>
            <Brand />
          </Link>
          <Links className='hidden sm:flex -ml-12' />

          <div className='flex items-center gap-3 cursor-pointer'>
            <ThemeToggle />
            {!isLoading ? (
              <>
                {!session?.id ? (
                  <Link to='/login' className='flex items-center font-medium text-sm'>
                    Login
                    <Icons.Login className='ml-2' />
                  </Link>
                ) : (
                  <User session={session} />
                )}
              </>
            ) : (
              <UserLoading />
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
