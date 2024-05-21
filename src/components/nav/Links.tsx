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
    <ul className={cn('flex items-center -ml-24 gap-8', className)}>
      {NAV_LINKS.map((link) => {
        const isActive = pathMatch?.pathname === link.path;

        return (
          <li key={link.path}>
            <Button
              className={cn('px-0 hover:text-rose-600 dark:hover:text-rose-600', {
                'text-rose-600 underline dark:text-rose-600': isActive,
              })}
              variant='link'
              size='sm'
              asChild
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
