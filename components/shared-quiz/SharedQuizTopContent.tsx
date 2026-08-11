import Logo from '../shared/Logo';
import Link from 'next/link';
import { CONTENT } from '@/constants/content';

export const SharedQuizTopContent = () => {
  return (
      <div className="flex justify-between items-center w-full px-6 md:px-8 md:px-8 py-6 pb-0 bg-bg-primary font-sans dark:bg-black">
        <Logo />
        <Link href="/dashboard">
          <div className="flex items-center gap-2 transition-all duration-300">
            <div className="text-gray-500 hover:underline hover:underline-offset-2 transition-all duration-300">
              {CONTENT.shared_quiz.cta.title}
            </div>
            <div className="font-bold p-2 rounded-full bg-lime-200 text-green-800">
              {CONTENT.shared_quiz.cta.product}
            </div>
            {CONTENT.shared_quiz.cta.icon && (
              <CONTENT.shared_quiz.cta.icon
                className="text-gray-500"
                width={20}
                height={20}
              />
            )}
          </div>
        </Link>
      </div>
  );
};
