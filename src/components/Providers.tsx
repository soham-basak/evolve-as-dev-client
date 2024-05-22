import ThemeProvider, { useTheme } from './ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';
import SessionContextProvider from '@/context/SessionContext';

type ProvidersProps = {
  children: React.ReactNode;
};

function makeQueryClient() {
  return new QueryClient({});
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

const Providers = ({ children }: ProvidersProps) => {
  const queryClient = getQueryClient();
  const { resolvedTheme: theme } = useTheme();

  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <QueryClientProvider client={queryClient}>
        <Toaster
          closeButton
          cn={cn}
          duration={2000}
          expand
          richColors
          position='bottom-right'
          theme={theme === 'dark' ? 'dark' : 'light'}
        />
        <SessionContextProvider>{children}</SessionContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
