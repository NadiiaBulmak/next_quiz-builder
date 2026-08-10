'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import {
  CopyPlus,
  Ellipsis,
  GlobeCheck,
  SquircleDashed,
  Trash2,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  deleteQuizAction,
  duplicateQuizAction,
} from '../../app/actions/quiz/quizItemActions';
import { switchIsPublishedAction } from '../../app/actions/quiz/quizItemActions';

export const QuizItemMenu = ({
  id,
  isPublished,
}: {
  id?: string;
  isPublished: boolean;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const runAction = (action: (quizId: string) => Promise<void>) => {
    if (!id || isPending) return;

    startTransition(async () => {
      await action(id);
      router.refresh();
    });
  };

  const handleDuplicate = () => runAction(duplicateQuizAction);
  const handleDelete = () => runAction(deleteQuizAction);
  const handleSwitchIsPublished = () =>
    runAction((quizId) => switchIsPublishedAction(quizId, isPublished));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-3 py-2" disabled={isPending}>
        <Ellipsis />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-full" align="end">
        <DropdownMenuItem
          onClick={handleSwitchIsPublished}
          className="cursor-pointer flex items-center gap-2 p-2 hover:bg-gray-100"
        >
          {!isPublished ? (
            <GlobeCheck width={24} height={24} />
          ) : (
            <SquircleDashed width={24} height={24} />
          )}
          {isPublished ? 'Make it draft' : 'Make it published'}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleDuplicate}
          className="cursor-pointer flex items-center gap-2 p-2 hover:bg-gray-100"
        >
          <CopyPlus width={24} height={24} />
          Duplicate
        </DropdownMenuItem>

        <DropdownMenuItem
          variant="destructive"
          onClick={handleDelete}
          className="cursor-pointer flex items-center gap-2 p-2 hover:bg-gray-100"
        >
          <Trash2 width={24} height={24} />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
