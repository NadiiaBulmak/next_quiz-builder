import { getQuizById } from '@/services/quizz.service';
import SharedQuizContent from '@/components/shared-quiz/SharedQuizContent';
import { SharedQuizTopContent } from '@/components/shared-quiz/SharedQuizTopContent';
import { CONTENT } from '@/constants/content';
import { verifySession } from '@/services/sessions';
import { getUserById } from '@/services/user.service';

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const { quizId } = await params;
  const quiz = await getQuizById(quizId, true, false);
  const session = await verifySession(true);
  const recipient = session?.userId ? await getUserById(session.userId) : null;
  const isAvailableForResponses =
    quiz?.isPublished === true && quiz.isPublic === true;

  return (
    <div className="flex flex-col max-w-[85rem] mx-auto w-full">
      <SharedQuizTopContent />
      {quiz && isAvailableForResponses ? (
        <>
          <SharedQuizContent {...quiz} recipient={recipient} />
        </>
      ) : (
        <div>{CONTENT.common.quiz_not_found}</div>
      )}
    </div>
  );
}
