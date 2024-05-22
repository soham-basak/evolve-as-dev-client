import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';
import { useSession } from '@/context/SessionContext';
import { useLogin } from '@/hooks/useAuth';
import { LoginProvider } from '@/types/auth-types';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const providers = [
    {
      provider: 'github',
      text: 'Login with GitHub',
    },
    {
      provider: 'google',
      text: 'Login with Google',
    },
  ] satisfies {
    provider: LoginProvider;
    text: string;
  }[];

  const { session, isLoading } = useSession();
  const login = useLogin();

  if (isLoading) {
    return;
  }

  if (session?.id) {
    return <Navigate to='/' />;
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='flex items-center flex-col max-w-xs mx-auto justify-center w-full h-[calc(100vh-2.5rem)]'
    >
      <Brand textClassName='text-2xl sm:text-2xl' />

      <div className='flex items-center mt-12 justify-center flex-col w-full gap-4'>
        {providers.map(({ provider, text }) => (
          <Button
            isLoading={login.variables === provider && login.isPending}
            onClick={() => login.mutate(provider)}
            key={provider}
            className='w-full'
          >
            {text}
          </Button>
        ))}
      </div>

      <p className='mt-20 text-sm'>Terms and Conditions for cookies and more.</p>
    </form>
  );
};

export default Login;
