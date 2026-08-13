import { LucideIcon } from 'lucide-react';
import { Dispatch, SetStateAction, DragEvent } from 'react';
import { AnswerInput, Difficulty, Quiz } from './quiz';

export type Category = {
  id: string;
  name: string;
};

export type CategorySelectClientProps = {
  categories: Category[];
  initialSelectedNames?: string[];
};

export type AuthRedirectLinkType = {
  link: string;
  text: string;
  boldText?: string;
};
export type SectionTopContentType = { heading: string; subheading: string };
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
  categories: string[];
  difficulty: Difficulty;
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
