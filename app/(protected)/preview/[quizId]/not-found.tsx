import { FileQuestion } from 'lucide-react';
import { StatusMessage } from '@/components/shared/StatusMessage';
import { CONTENT } from '@/constants/content';
import { ROUTES } from '@/constants/routes';

export default function PreviewQuizNotFound() {
  return (
    <StatusMessage
      icon={FileQuestion}
      title={CONTENT.common.quiz_not_found}
      description={CONTENT.common.quiz_not_found_description}
      actions={[
        {
          type: 'link',
          href: ROUTES.QUIZZES.MY,
          label: CONTENT.common.back_to_dashboard,
        },
      ]}
    />
  );
}
