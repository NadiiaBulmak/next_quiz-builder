import { LabelInputArea } from '../quiz-create/UI/LabelInputArea';
import { Input } from '../ui/input';
import { FieldError } from '@/components/shared/FormFeedback';
import { CONTENT } from '@/constants/content';

import type { QuizRecipientInfoProps } from '@/types/props';
import { AuthFormField } from '@/constants/formFields';

export const QuizRecipientInfo = ({
  recipient,
  errors,
}: QuizRecipientInfoProps) => {
  return (
    <div className="flex flex-col gap-4 justify-between">
      <LabelInputArea label={CONTENT.shared_quiz.recipient.email_label}>
        <Input
          id={AuthFormField.EMAIL}
          name={AuthFormField.EMAIL}
          type="email"
          placeholder={CONTENT.shared_quiz.recipient.email_placeholder}
          required
          aria-invalid={Boolean(errors?.[AuthFormField.EMAIL])}
          aria-describedby="recipient-email-error"
          defaultValue={recipient?.email ?? ''}
          className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-none focus:ring-blue-500"
        />
        <FieldError
          id="recipient-email-error"
          errors={errors?.[AuthFormField.EMAIL]}
        />
      </LabelInputArea>
      <LabelInputArea label={CONTENT.shared_quiz.recipient.name_label}>
        <Input
          id={AuthFormField.NAME}
          name={AuthFormField.NAME}
          type="text"
          defaultValue={recipient?.name ?? ''}
          placeholder={CONTENT.shared_quiz.recipient.name_placeholder}
          aria-invalid={Boolean(errors?.[AuthFormField.NAME])}
          aria-describedby="recipient-name-error"
          className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-none focus:ring-blue-500"
        />
        <FieldError
          id="recipient-name-error"
          errors={errors?.[AuthFormField.NAME]}
        />
      </LabelInputArea>
    </div>
  );
};
