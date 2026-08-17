export enum AuthFormField {
  NAME = 'name',
  EMAIL = 'email',
  PASSWORD = 'password',
}

export enum PasswordResetFormField {
  TOKEN = 'token',
  CONFIRM_PASSWORD = 'confirmPassword',
}

export enum QuizFormField {
  INTENT = 'intent',
  QUIZ_ID = 'quizId',
  TITLE = 'title',
  DESCRIPTION = 'description',
  DIFFICULTY = 'difficulty',
  CATEGORIES = 'categories',
  QUESTIONS = 'questions',
}

export enum QuizQuestionField {
  TEXT = 'text',
  ORDER = 'order',
  ANSWERS = 'answers',
}

export enum QuizResultFormField {
  QUESTION_ID = 'questionId',
  ANSWER_ID = 'answerId',
}
