export const QuizQuestionHeader = ({
  text,
  index,
}: {
  text: string;
  index: number;
}) => {
  return (
    <div className="border-b-1 py-1">
      <h3 className="text-lg font-semibold mb-2">{`Question ${index + 1}`}</h3>
      <p className="text-gray-700 mb-2">{text}</p>
    </div>
  );
};
