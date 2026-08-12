import { ROUTES } from './routes';

export const NAV_LINKS = {
  main: ROUTES.HOME,
  login: ROUTES.LOGIN,
  sign_in: ROUTES.SIGN_UP,
  forgot_password: ROUTES.FORGOT_PASSWORD,
  forgot_password_sent: ROUTES.FORGOT_PASSWORD_SENT,
  quiz: ROUTES.QUIZ,
  quizzes: {
    all: ROUTES.QUIZZES.ALL,
    my: ROUTES.QUIZZES.MY,
    create: ROUTES.QUIZZES.CREATE,
    results: ROUTES.QUIZZES.RESULTS,
  },
  settings: ROUTES.SETTINGS,
  preview: ROUTES.PREVIEW,
  edit: ROUTES.EDIT,
} as const;
