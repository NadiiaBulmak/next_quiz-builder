import { CONTENT } from '@/constants/content';

export default function RightsReserved({ centered }: { centered?: boolean }) {
  return (
    <div
      className={`
    flex w-full items-center justify-between
    flex-col-reverse lg:flex-row
    gap-1
    px-6 md:px-8 py-6
    text-sm font-light text-slate-700
    dark:bg-black
    max-w-[85rem] mx-auto
    ${!centered ? 'justify-between pb-6' : 'pb-6'}
  `}
    >
      <p>
        &copy; {new Date().getFullYear()} {CONTENT.footer.rightsReserved}
      </p>
      <p>{CONTENT.footer.withLove}</p>
    </div>
  );
}
