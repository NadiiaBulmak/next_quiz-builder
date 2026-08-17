import { SearchX } from 'lucide-react';
import { StatusMessage } from '@/components/shared/StatusMessage';
import { CONTENT } from '@/constants/content';
import { ROUTES } from '@/constants/routes';

export default function RootNotFound() {
  return (
    <StatusMessage
      icon={SearchX}
      title={CONTENT.common.not_found.title}
      description={CONTENT.common.not_found.description}
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
