import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react';

import { ROUTES } from '@/constants/routes';
import { CONTENT } from '@/constants/content';
import { Reassurance } from './HeroSection/Reassurance';
import { QuizPreview } from './QuizPreview';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="overflow-hidden px-6 py-7 lg:py-10 w-full scroll-mt-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-lime-200 px-3 py-1.5 text-xs font-semibold text-green-700 flex">
            <Sparkles size={13} />
            {CONTENT.main.hero.badge}
          </div>

          <h1 className="max-w-[580px] text-5xl font-black leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[68px]">
            {CONTENT.main.hero.title.split(' quizzes')[0]}{' '}
            <span className="relative inline-block text-lime-500">
              quizzes
              <span className="absolute -bottom-1 left-0 h-[5px] w-full -rotate-2 rounded-full bg-lime-400" />
            </span>{' '}
            {CONTENT.main.hero.title.split(' quizzes')[1]}
          </h1>

          <p className="mt-7 max-w-[500px] text-base leading-7 text-slate-600 sm:text-lg">
            {CONTENT.main.hero.description_short}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={ROUTES.REGISTER}
              className=" hover:animate-bounce group inline-flex items-center gap-3 rounded-lg bg-black px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_0_2px_#c9f13c] transition hover:-translate-y-0.5 hover:bg-slate-900"
            >
              {CONTENT.main.hero.create_quiz}
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            <Reassurance>
              <ShieldCheck />
              {CONTENT.main.hero.reassurance_try}
            </Reassurance>

            <Reassurance>
              <Check />
              {CONTENT.main.hero.reassurance_start}
            </Reassurance>

            <Reassurance>
              <Check />
              {CONTENT.main.hero.reassurance_create}
            </Reassurance>
          </div>
        </div>
        
        <QuizPreview />
      </div>
    </section>
  );
};

