import Link from 'next/link';
import { Button } from '../ui/button';
import { StatusMessageProps } from '@/types/props';

export const StatusMessage = ({
  icon: Icon,
  title,
  description,
  actions,
}: StatusMessageProps) => {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center px-6 py-12">
      <div className="flex w-full max-w-md flex-col items-center rounded-2xl border border-stone-200 bg-white px-8 py-10 text-center shadow-sm">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-50 ring-1 ring-lime-100">
          <Icon className="h-7 w-7 text-lime-600" aria-hidden />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight text-stone-900">
            {title}
          </h2>

          <p className="mx-auto max-w-sm text-sm leading-6 text-stone-500">
            {description}
          </p>
        </div>

        {actions?.length && actions?.length > 0 && (
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {actions.map((action, index) => {
              const className =
                index === 0
                  ? 'rounded-lg bg-lime-500 px-5 py-2.5 text-sm font-semibold text-stone-950 shadow-sm transition-all hover:bg-lime-600 hover:shadow'
                  : 'rounded-lg border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50';

              return action.type === 'link' ? (
                <Link
                  key={action.label}
                  href={action.href}
                  className={className}
                >
                  {action.label}
                </Link>
              ) : (
                <Button
                  key={action.label}
                  type="button"
                  onClick={action.onClick}
                  className={className}
                >
                  {action.label}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
