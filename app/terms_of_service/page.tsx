import Link from 'next/link';
import { CONTENT } from '@/constants/content';

export default function TermsOfServicePage() {
  const content = CONTENT.terms_of_service;

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-stone-900 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
          >
            {content.back_to_home}
          </Link>
        </div>

        <header className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-stone-400">
            {content.subtitle}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
            {content.title}
          </h1>

          <p className="mt-4 text-sm text-stone-500">
            {content.last_updated}
          </p>
        </header>

        <div className="space-y-10 text-[15px] leading-7 text-stone-600">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-lg font-semibold text-stone-900">
                {section.title}
              </h2>

              <p>{section.content}</p>
            </section>
          ))}
        </div>

        <footer className="mt-16 border-t border-stone-200 pt-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500">
            <Link
              href="/terms_of_service"
              className="font-medium text-stone-900"
            >
              {content.footer.terms_of_service}
            </Link>

            <Link
              href="/privacy_policy"
              className="transition-colors hover:text-stone-900"
            >
              {content.footer.privacy_policy}
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}