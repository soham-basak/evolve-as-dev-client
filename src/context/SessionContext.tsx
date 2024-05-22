import { useGetUser } from '@/hooks/useAuth';
import { createContext, useContext } from 'react';

export type Session = {
  id: string;
  username: string;
  email: string;
  image: string;
  authProvider: 'Google' | 'GitHub';
  createdAt: Date;
};

type SessionContextProps = {
  children?: React.ReactNode;
};

const SessionContext = createContext<{
  session: Session | null;
  isLoading: boolean;
  isError: boolean;
}>({
  isError: false,
  isLoading: false,
  session: null,
});

export default function SessionContextProvider({ children }: SessionContextProps) {
  const { queryResult, user } = useGetUser();

  return (
    <SessionContext.Provider
      value={{
        session: user,
        isError: queryResult.isError,
        isLoading: queryResult.isLoading || queryResult.isFetching || queryResult.isPending,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => {
  const session = useContext(SessionContext);

  return session;
};
