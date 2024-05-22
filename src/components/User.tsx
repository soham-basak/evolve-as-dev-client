import { Session } from '@/context/SessionContext';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { getFallback } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useLogout } from '@/hooks/useAuth';

type UserProps = {
  session: Session;
};

const User = ({ session }: UserProps) => {
  const { fallback } = getFallback(session.username);

  const logout = useLogout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='h-8 w-8'>
          <AvatarImage alt={session.username} src={session.image} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[11.75rem]'>
        <DropdownMenuLabel className='truncate'>{session.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuItem onClick={() => logout.mutate()}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default User;
