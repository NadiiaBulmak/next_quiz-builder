import { CONTENT } from "@/constants/content";

export const ResultScore = ({ score }: { score: number }) => (
  <div className="flex flex-col items-center justify-center">
    <div
      className="relative flex h-36 w-36 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(#bef264 ${score}%, #f3f4f6 0)`,
      }}
    >
      <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white">
        <span className="text-3xl font-bold text-gray-950">{score}%</span>
        <span className="text-xs text-gray-500">
          {CONTENT.quiz_result.summary.score}
        </span>
      </div>
    </div>
  </div>
);
