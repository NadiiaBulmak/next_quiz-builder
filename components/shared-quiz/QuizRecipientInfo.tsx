import { LabelInputArea } from '../quiz-create/UI/LabelInputArea';
import { Input } from '../ui/input';

type QuizRecipientInfoProps = {
  recipient: {
    email: string;
    name: string | null;
  } | null;
};

export const QuizRecipientInfo = ({ recipient }: QuizRecipientInfoProps) => {
  return (
    <div className="flex flex-col gap-4 justify-between">
      <LabelInputArea label="Recipient Email">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter recipient email"
          required
          defaultValue={recipient?.email ?? ''}
          className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-none focus:ring-blue-500"
        />
      </LabelInputArea>
      <LabelInputArea label="Recipient Name">
        <Input
          id="name"
          name="name"
          type="text"
          defaultValue={recipient?.name ?? ''}
          placeholder="Enter recipient name"
          className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-none focus:ring-blue-500"
        />
      </LabelInputArea>
    </div>
  );
};
