export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  SIGN_UP: '/signUp',
  FORGOT_PASSWORD: '/forgot_password',
  FORGOT_PASSWORD_SENT: '/forgot_password_sent',
  RESET_PASSWORD: '/reset-password',
  QUIZ: '/quiz',
  QUIZZES: {
    ALL: '/quizzes/all',
    MY: '/quizzes/my',
    CREATE: '/quizzes/create',
    RESULTS: '/quizzes/results',
  },
  SETTINGS: '/settings',
  PREVIEW: '/preview',
  EDIT: '/edit',
} as const;
