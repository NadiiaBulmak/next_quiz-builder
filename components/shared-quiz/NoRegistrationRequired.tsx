import { CONTENT } from '@/constants/content';
import { BadgeCheck, CheckCircle } from 'lucide-react';

export const NoRegistrationRequired = () => {
  return (
    <div className="bg-lime-200 p-6 rounded-md border border-gray-300 flex gap-6 text-green-800">
      <div className="flex gap-2 items-center p-4 bg-lime-300 rounded-md">
        <BadgeCheck width={24} height={24} />
      </div>
      <div>
        <h4 className='font-semibold'>{CONTENT.shared_quiz.registration_not_required.title}</h4>
        <p className="text-xs text-gray-600">
          {CONTENT.shared_quiz.registration_not_required.description}
        </p>
      </div>
    </div>
  );
};
