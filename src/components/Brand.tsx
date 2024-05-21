import { Link, LinkProps } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { useTheme } from './ThemeProvider';

type BrandProps = {
  className?: string;
} & Omit<LinkProps, 'to'>;

const Brand = ({ className, ...props }: BrandProps) => {
  const { resolvedTheme: theme } = useTheme();

  return (
    <Link
      {...props}
      to='/'
      className={cn('cursor-pointer flex items-center text-sm font-bold xs:text-base', className)}
    >
      {theme === 'dark' ? (
        <img src='/logo-dark.png' width={60} height={60} className='mb-[2px]' />
      ) : (
        <img src='/logo-light.png' width={60} height={60} className='mb-[2px]' />
      )}
      <h1 className='my-0 space-x-[3px] pl-3 text-base uppercase dark:text-zinc-200 sm:text-lg'>
        <span>Evolve</span>
        <span className='text-red-500'>AS</span>
        <span>Dev</span>
      </h1>
    </Link>
  );
};

export default Brand;
