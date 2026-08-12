import { CONTENT } from '@/constants/content';

export default function AuthFormDivider() {
  return (
    <div className="flex gap-3 items-center justify-between w-full">
      <span className="w-full h-0.25 bg-gray-300"></span>
      <span className="text-xs text-gray-500 font-light text-nowrap w-full text-center">
        {CONTENT.auth.form.divider_text}
      </span>
      <span className="w-full h-0.25 bg-gray-300"></span>
    </div>
  );
}
