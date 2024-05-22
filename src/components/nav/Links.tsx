import { NAV_LINKS } from '@/config/site-links';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Link, useMatch } from 'react-router-dom';

type LinksProps = {
  className?: string;
};

const Links = ({ className }: LinksProps) => {
  const pathMatch = useMatch(location.pathname);

  return (
    <ul className={cn('flex items-center gap-8', className)}>
      {NAV_LINKS.map((link) => {
        const isActive = pathMatch?.pathname === link.path;

        return (
          <li key={link.path}>
            <Button
              className={cn(
                'px-0 dark:hover:text-neutral-200 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400',
                {
                  'underline dark:text-neutral-200 text-neutral-900': isActive,
                }
              )}
              variant='link'
              size='sm'
            >
              <Link to={link.path} className='text-base sm:text-sm'>
                {link.name}
              </Link>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
