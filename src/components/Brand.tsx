import { cn } from '@/lib/utils';
import { useTheme } from './ThemeProvider';

type BrandProps = {
  className?: string;
  textClassName?: string;
} & JSX.IntrinsicElements['div'];

const Brand = ({ className, textClassName, ...props }: BrandProps) => {
  const { resolvedTheme: theme } = useTheme();

  return (
    <div {...props} className={cn('flex items-center text-sm font-bold xs:text-base', className)}>
      {theme === 'dark' ? (
        <img src='/logo-dark.png' width={60} height={60} className='mb-[2px]' />
      ) : (
        <img src='/logo-light.png' width={60} height={60} className='mb-[2px]' />
      )}
      <h1
        className={cn(
          'my-0 space-x-[3px] pl-3 text-[0.95rem] uppercase dark:text-zinc-200 sm:text-[0.95rem]',
          textClassName
        )}
      >
        <span>Evolve</span>
        <span className='text-red-500'>AS</span>
        <span>Dev</span>
      </h1>
    </div>
  );
};

export default Brand;
