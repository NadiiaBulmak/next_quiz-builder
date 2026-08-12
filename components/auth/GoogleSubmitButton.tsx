import { API_ROUTES } from '@/constants/api';
import Image from 'next/image';
import { CONTENT } from '@/constants/content';

export default function GoogleSubmitButton() {
  return (
    <button
      type="button"
      onClick={() => window.location.assign(API_ROUTES.GOOGLE)}
      className="flex items-center justify-center gap-3 w-full rounded-md border-1 border-gray-300 px-4 py-2 text-xs font-medium text-black hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Image
        src="/images/google_icon.webp"
        alt={CONTENT.auth.form.actions.google_alt}
        width={16}
        height={16}
      />
      {CONTENT.auth.form.actions.continue_with_google}
    </button>
  );
}
