'use client';

import { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Mail,
  Percent,
  User,
} from 'lucide-react';
import type { ResultDetailsListProps } from '@/types/props';
import { Pagination } from '@/components/shared/Pagination';
import { CONTENT } from '@/constants/content';
import { ROUTES } from '@/constants/routes';
import { formatDate } from '@/utils/dateFormatter';
import { ReviewResult } from '@/components/quiz-result/QuestionResult/ReviewResult';
import { RESULT_DETAILS_COLUMNS } from '@/constants/results';

export const ResultDetailsList = ({
  results,
  currentPage,
  totalPages,
}: ResultDetailsListProps) => {
  const { table } = CONTENT.results.details;
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const router = useRouter();

  if (results.length === 0) {
    return (
      <p className="rounded-xl border border-stone-200 bg-white p-6 text-sm text-stone-500">
        {CONTENT.results.details.empty}
      </p>
    );
  }

  return (
    <div className="rounded-xl border border-stone-200 bg-white shadow-sm">
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-max text-left text-sm">
          <thead>
            <tr className="border-b border-stone-200 text-xs font-medium uppercase text-stone-500">
              {RESULT_DETAILS_COLUMNS.map(({ label, icon: Icon }) => (
                <th key={label} className="px-5 py-3">
                  <span className="flex items-center gap-1.5">
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </span>
                </th>
              ))}
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {results.map((result) => {
              const isExpanded = expandedId === result.id;

              return (
                <Fragment key={result.id}>
                  <tr className="border-b border-stone-100 last:border-none hover:bg-stone-50">
                    <td className="px-5 py-3 font-medium text-stone-900">
                      <Link href={`${ROUTES.QUIZ_RESULT}/${result.id}`}>
                        {result.name || CONTENT.results.details.anonymous}
                      </Link>
                    </td>
                    <td className="px-5 py-3 text-stone-600">{result.email}</td>
                    <td className="px-5 py-3 text-stone-600">
                      {result.score}%
                    </td>
                    <td className="px-5 py-3 text-stone-600">
                      {result.correctAnswers}/{result.totalQuestions}
                    </td>
                    <td className="px-5 py-3 text-stone-600">
                      {formatDate(result.finishedAt)}
                    </td>
                    <td className="px-5 py-3">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : result.id)
                        }
                        className="flex cursor-pointer items-center gap-1 text-xs font-medium text-stone-600 hover:text-stone-900"
                      >
                        {isExpanded
                          ? CONTENT.results.details.hide_answers
                          : CONTENT.results.details.view_answers}
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </td>
                  </tr>

                  {isExpanded && (
                    <tr className="bg-stone-50">
                      <td colSpan={6} className="px-5 py-5">
                        <ReviewResult answers={result.answers} />
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col divide-y divide-stone-100 md:hidden">
        {results.map((result) => {
          const isExpanded = expandedId === result.id;

          return (
            <div key={result.id} className="flex flex-col gap-3 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-xs font-medium uppercase text-stone-500">
                    <User className="h-3.5 w-3.5" />
                    {table.name}
                  </p>
                  <Link
                    href={`${ROUTES.QUIZ_RESULT}/${result.id}`}
                    className="truncate font-medium text-stone-900"
                  >
                    {result.name || CONTENT.results.details.anonymous}
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : result.id)}
                  className="flex shrink-0 cursor-pointer items-center gap-1 text-xs font-medium text-stone-600 hover:text-stone-900"
                >
                  {isExpanded
                    ? CONTENT.results.details.hide_answers
                    : CONTENT.results.details.view_answers}
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="flex items-center gap-1.5 text-xs font-medium uppercase text-stone-500">
                    <Mail className="h-3.5 w-3.5" />
                    {table.email}
                  </p>
                  <p className="truncate text-stone-600">{result.email}</p>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-xs font-medium uppercase text-stone-500">
                    <Percent className="h-3.5 w-3.5" />
                    {table.score}
                  </p>
                  <p className="text-stone-600">{result.score}%</p>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-xs font-medium uppercase text-stone-500">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {table.correctAnswers}
                  </p>
                  <p className="text-stone-600">
                    {result.correctAnswers}/{result.totalQuestions}
                  </p>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-xs font-medium uppercase text-stone-500">
                    <Calendar className="h-3.5 w-3.5" />
                    {table.finishedAt}
                  </p>
                  <p className="text-stone-600">
                    {formatDate(result.finishedAt)}
                  </p>
                </div>
              </div>

              {isExpanded && (
                <div className="rounded-lg bg-stone-50 p-3">
                  <ReviewResult answers={result.answers} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          setExpandedId(null);
          router.push(`?page=${page}`);
        }}
      />
    </div>
  );
};
