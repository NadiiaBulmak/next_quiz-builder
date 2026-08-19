import { Logo } from '../shared/Logo';
import { verifySession } from '@/services/sessions';
import { ToDashboardButton } from './ToDashboardButton';
import { ToSignInButton } from './ToSignInButton';

export const SharedQuizTopContent = async () => {
  const session = await verifySession(true);

  return (
    <div className="items-start gap-4 flex-col flex-wrap flex-row flex justify-between items-center w-full px-6 md:px-8 lg:px-20 py-6 pb-0 bg-bg-primary font-sans dark:bg-black">
      <Logo />
      {session?.userId ? <ToDashboardButton /> : <ToSignInButton />}
    </div>
  );
};
