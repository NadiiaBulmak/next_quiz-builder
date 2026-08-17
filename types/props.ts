import { LucideIcon } from 'lucide-react';
import { Dispatch, SetStateAction, DragEvent } from 'react';
import { AnswerInput, Quiz } from './quiz';

export type Category = {
  id: string;
  name: string;
};

export type CategorySelectClientProps = {
  categories: Category[];
  initialSelectedNames?: string[];
  error?: string[];
};

export type AuthRedirectLinkType = {
  link: string;
  text: string;
  boldText?: string;
};
export type SectionTopContentType = { heading: string; subheading: string };
export type ReassuranceProps = { children: React.ReactNode };
export type NavbarProps = { userId: string | null };
export type NavMenuProps = { isMobileNav: boolean };
export type NavMenuItemProps = {
  href: string;
  name: string;
  isMobileNav: boolean;
};
export type TrustItemProps = { icon: React.ReactNode; title: string };
export type QuizAnswerListProps = {
  answers: import('@/types/quiz').AnswerInput[];
};
export type QuizContentProps = { questions: Question[] };
export type ResultDetailsProps = { resultId: string; finishedAt: Date };
export type ResultScoreProps = { score: number };
export type ResultSummaryWrapperProps = { children: React.ReactNode };
export type QuizCountBadgeProps = { total: number };
export type CopyPreviewLinkButtonProps = { id: string };
export type QuizMetricsProps = {
  totalParticipants: number;
  questionsCount: number;
};
export type QuizResultOverviewProps = { quiz: QuizResultOverview };
export type ScoreProps = {
  score: number;
  title: string;
  description: string;
};
export type ScoreCircleProps = { score: number };
export type QuizActionsProps = QuizResultOverviewProps;
export type QuizStatisticsCardProps = QuizResultOverviewProps;
export type QuestionAnswerItemProps = {
  answer: import('@/types/quiz').QuizAnswer;
  handleAnswerSelect: (answerId: string) => void;
  isAnswerSelected: boolean;
};
export type QuizRecipientInfoProps = {
  recipient: { email: string; name: string | null } | null;
  errors?: { email?: string[]; name?: string[] };
};
export type DifficultySelectProps = { initialValue?: string; error?: string[] };
export type RightsReservedProps = { centered?: boolean };
export type SectionTitleProps = { title: string; subtitle?: string };
export type FieldErrorProps = { id: string; errors?: string[] };
export type ActionToastProps = {
  state?: { success?: boolean; message?: string };
};
export type FilterOption = { id: string; name: string; slug: string };
export type FilterModalProps = {
  categories: FilterOption[];
  initialCategories?: string[];
  initialDifficulty?: string;
  initialSort?: string;
};
export type FilterZoneProps = { initialSearchQuery?: string };
export type ResultDetailsListProps = {
  results: QuizResultDetail[];
  currentPage: number;
  totalPages: number;
};
export type QuizInfoProps = Pick<
  Quiz,
  'title' | 'description' | 'difficulty' | 'categories'
>;
export type TipSectionProps = { title?: string; content: string };
export type QuizAnswerItemProps = { text: string; index: number };
export type MetricProps = {
  value: number | string;
  label?: string;
  icon?: LucideIcon;
};
export type StatCardProps = {
  label: string;
  value: number | string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};
export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};
export type ResultStatsListProps = {
  totalQuizzes: number;
  totalParticipants: number;
  averageScore: number;
};
export type QuestionResultAnswer = QuizResultContentProps['answers'][number];
export type QuestionResultListProps = {
  answers: QuestionResultAnswer[];
};
export type ResultStatProps = { label: string; value: string };
export type UserSettingsFormProps = { user: import('@/types/user').User };
export type ResultSummaryProps = {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  totalQuestions: number;
  questions: QuizResultContentProps['questions'];
  finishedAt: Date;
};
export type ResultStatsProps = Pick<
  ResultSummaryProps,
  | 'correctAnswers'
  | 'incorrectAnswers'
  | 'totalQuestions'
  | 'questions'
  | 'finishedAt'
>;
export type SecondaryButtonType = {
  href: string;
  text: string;
  icon?: string;
  type: ButtonType;
};

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}
export type SidebarMenuType = { opened?: boolean };

export type SidebarLinkType = {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
  iconVisible?: boolean;
  labelVisible?: boolean;
} & SidebarMenuType;

export type TitleContentType = Pick<
  SidebarLinkType,
  'href' | 'label' | 'description'
>;

export type LogoType = SidebarMenuType & {
  setOpened?: Dispatch<SetStateAction<boolean>>;
};

export type SidebarBottomType = {
  name: string | null;
  email: string;
} & SidebarMenuType;

export enum ListType {
  all = 'all',
  my = 'my',
}

export enum sortType {
  dateASC = 'Newest',
  dateDSC = 'Latest',
  alphASC = 'A to Z',
  alphDSC = 'Z to A',
}

export type filterType = {
  categories?: string[];
  difficulty?: string;
};

export type QuizListType = {
  listType: ListType;
  sort?: sortType;
  filter?: filterType;
};

export type ShowAllQuizType = { showAllQuiz: boolean };

export type LabelInputAreaType = {
  label: string;
  children: React.ReactNode;
};

export type AnswerType = {
  id?: string;
  text: string;
  isCorrect: boolean;
  order: number;
};

export type QuestionType = {
  id?: string;
  text: string;
  order: number;
  answers: AnswerType[];
};

export type QuizForEditor = Pick<
  Quiz,
  | 'id'
  | 'title'
  | 'description'
  | 'isPublished'
  | 'isPublic'
  | 'createdAt'
  | 'updatedAt'
> & {
  categories?: Quiz['categories'];
  difficulty?: Quiz['difficulty'];
  questions?: Quiz['questions'];
};

export type QuestionControlSectionType = {
  onAddQuestion: () => void;
  onDeleteQuestion: (order: number) => void;
  onReorderQuestions: (fromIndex: number, toIndex: number) => void;
  onUpdateQuestionText?: (
    questionId: string | undefined,
    order: number,
    text: string,
  ) => void;
  onUpdateQuestionAnswers?: (
    questionId: string | undefined,
    order: number,
    answers: AnswerType[],
  ) => void;
  questions: QuestionType[];
};

export type CreateQuizClientProps = {
  categories: Category[];
  quiz?: QuizForEditor;
  previewMode?: boolean;
};

export type QuestionItemProps = {
  question: QuestionType;
};

export type AnswerOptionsProps = {
  answers: AnswerType[];
  onChangeAnswers: (answers: AnswerType[]) => void;
};
export type QuestionSectionTopProps = {
  order: number;
  extended: boolean;
  setExtended: Dispatch<SetStateAction<boolean>>;
};

export type AnswerOptionItemProps = AnswerType & {
  index?: number;
  draggable?: boolean;
  onDragStart?: (e: DragEvent<HTMLDivElement>) => void;
  onDragEnter?: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: DragEvent<HTMLDivElement>) => void;
  onDelete?: (order: number) => void;
  onChange?: (option: AnswerType) => void;
};

export type AutoResizeTextareaProps = {
  id?: string;
  name?: string;
  placeholder: string;
  initValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

export type QuestionItemDragProps = {
  draggable?: boolean;
  onDragStart?: (e: DragEvent<HTMLDivElement>) => void;
  onDragEnter?: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: DragEvent<HTMLDivElement>) => void;
  onUpdateQuestionText?: (
    questionId: string | undefined,
    order: number,
    text: string,
  ) => void;
  onUpdateQuestionAnswers?: (
    questionId: string | undefined,
    order: number,
    answers: QuestionType['answers'],
  ) => void;
};

export type QuizBaseInputSectionProps = Partial<QuestionControlSectionType> & {
  categories: Category[];
  initialTitle?: string;
  initialDescription?: string;
  initialDifficulty?: string;
  initialSelectedCategories?: string[];
  isEditMode?: boolean;
  isPending?: boolean;
  errors?: {
    title?: string[];
    description?: string[];
    categories?: string[];
    difficulty?: string[];
  };
};

export type Question = {
  id: string;
  text: string;
  order: number;
  quizId: string;
  createdAt: Date;
  updatedAt: Date;
  answers: AnswerInput[];
};

export type PreviewTopBarProps = {
  title?: string | null;
  description?: string | null;
  questionCount: number;
};

export type QuizResultContentProps = Pick<
  Quiz,
  'title' | 'description' | 'questions' | 'difficulty' | 'categories'
> & {
  resultId: string;
  recipient: {
    email: string;
    name: string | null;
  };
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  answers: {
    id: string;
    questionText: string;
    answerText: string;
    isCorrect: boolean;
  }[];
  finishedAt: Date;
};

export type QuizResultOverview = {
  id: string;
  title: string;
  description: string | null;

  categories: {
    name: string;
  }[];

  difficulty: {
    name: string;
  };

  _count: {
    questions: number;
    results: number;
  };

  totalParticipants: number;
  questionsCount: number;
  averageScore: number;
};

export type QuizResultDetail = {
  id: string;
  name: string | null;
  email: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  finishedAt: Date;
  answers: {
    id: string;
    questionText: string;
    answerText: string;
    isCorrect: boolean;
  }[];
  quiz: {
    categories: { name: string }[];
    difficulty: { name: string };
  };
};
