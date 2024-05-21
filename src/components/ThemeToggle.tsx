import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import Icons from '@/config/Icons';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {isDark ? (
        <Button onClick={() => setTheme('light')} className='h-8 w-8' variant='ghost' size='icon'>
          <Icons.Sun
            className={cn('absolute h-5 w-5 scale-100 transition-all xs:h-6 xs:w-6 sm:h-5 sm:w-5', {
              'scale-0': !isDark,
            })}
          />
          <span className='sr-only'>Switch to light mode</span>
        </Button>
      ) : (
        <Button onClick={() => setTheme('dark')} className='h-8 w-8' variant='ghost' size='icon'>
          <Icons.Moon
            className={cn('absolute h-5 w-5 scale-100 transition-all xs:h-6 xs:w-6 sm:h-5 sm:w-5', {
              'scale-0': isDark,
            })}
          />
          <span className='sr-only'>Switch to dark mode</span>
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
