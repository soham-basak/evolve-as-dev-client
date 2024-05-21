import ThemeProvider from './ThemeProvider';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
