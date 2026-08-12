import Logo from '@/components/shared/Logo';
import { ROUTES } from '@/constants/routes';
import { verifySession } from '@/services/sessions';

export async function Navbar() {
  const session = await verifySession();
  const userId = session?.userId;

  // const user =
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-slate-600 transition hover:text-black"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition hover:text-black"
          >
            How It Works
          </a>

          <a
            href="#examples"
            className="text-sm font-medium text-slate-600 transition hover:text-black"
          >
            Examples
          </a>
        </nav>

        <div className="flex items-center gap-5">
          {userId ? (
            <a
              href={ROUTES.QUIZZES.ALL}
              className="rounded-lg bg-black px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_0_2px_#c9f13c] transition hover:bg-slate-900"
            >
              Go to Dashboard
            </a>
          ) : (
            <>
              <a
                href={ROUTES.LOGIN}
                className="hidden text-sm font-semibold text-slate-600 transition hover:text-black sm:block"
              >
                Log in
              </a>

              <a
                href={ROUTES.REGISTER}
                className="rounded-lg bg-black px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_0_2px_#c9f13c] transition hover:bg-slate-900"
              >
                Get Started Free
              </a>
            </>
          )}

          <button
            type="button"
            className="rounded-lg border border-slate-200 p-2 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-5 bg-black" />
            <span className="mt-1 block h-0.5 w-5 bg-black" />
            <span className="mt-1 block h-0.5 w-5 bg-black" />
          </button>
        </div>
      </div>
    </header>
  );
}
