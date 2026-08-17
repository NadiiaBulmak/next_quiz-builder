import { FileQuestion } from 'lucide-react';
import { StatusMessage } from '@/components/shared/StatusMessage';
import { CONTENT } from '@/constants/content';
import { ROUTES } from '@/constants/routes';

export default function SharedQuizNotFound() {
  return (
    <StatusMessage
      icon={FileQuestion}
      title={CONTENT.common.quiz_not_found}
      description={CONTENT.common.quiz_not_found_description}
      actions={[
        {
          type: 'link',
          href: ROUTES.HOME,
          label: CONTENT.common.not_found.back_home,
        },
      ]}
    />
  );
}
