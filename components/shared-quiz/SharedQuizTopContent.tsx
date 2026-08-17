import Logo from '../shared/Logo';
import Link from 'next/link';
import { CONTENT } from '@/constants/content';
import { NAV_LINKS } from '@/constants/nav_links';
import { verifySession } from '@/services/sessions';
import { ROUTES } from '@/constants/routes';

export const SharedQuizTopContent = async () => {
  const session = await verifySession(true);

  return (
    <div className="items-start gap-4 flex-col flex-wrap flex-row flex justify-between items-center w-full px-6 md:px-8 lg:px-20 py-6 pb-0 bg-bg-primary font-sans dark:bg-black">
      <Logo />
      {session?.userId ? (
        <Link
          href={ROUTES.QUIZZES.ALL}
          className="rounded-lg bg-black px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_0_2px_#c9f13c] transition hover:bg-slate-900 w-fit"
        >
          {CONTENT.main.navbar.to_dashboard}
        </Link>
      ) : (
        <Link
          href={NAV_LINKS.sign_in}
          className="flex items-center gap-2 transition-all duration-300"
        >
          <div className="flex items-center gap-2 transition-all duration-300">
            <div className="font-medium text-gray-500 hover:underline hover:underline-offset-2 transition-all duration-300">
              {CONTENT.shared_quiz.cta.title}
            </div>
            <div className="font-bold p-2 rounded-full bg-lime-200 text-green-800">
              {CONTENT.shared_quiz.cta.product}
            </div>
            {CONTENT.shared_quiz.cta.icon && (
              <CONTENT.shared_quiz.cta.icon
                strokeWidth={2}
                className="text-gray-500"
                width={20}
                height={20}
              />
            )}
          </div>
        </Link>
      )}
    </div>
  );
};
