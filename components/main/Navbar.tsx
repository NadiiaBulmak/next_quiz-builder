import Logo from "@/components/shared/Logo";

export const Navbar = () => {
  return (
    <header className="border-b border-transparent bg-white">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-slate-800 transition hover:text-lime-600"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-800 transition hover:text-lime-600"
          >
            How It Works
          </a>
          <a
            href="#examples"
            className="text-sm font-medium text-slate-800 transition hover:text-lime-600"
          >
            Examples
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-slate-800 transition hover:text-lime-600"
          >
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <a
            href="/login"
            className="hidden text-sm font-medium text-slate-700 transition hover:text-black sm:block"
          >
            Log in
          </a>

          <a
            href="/register"
            className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white shadow-[0_0_0_2px_#d9ff48] transition hover:bg-slate-900"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </header>
  );
}