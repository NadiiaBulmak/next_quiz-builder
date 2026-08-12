export const API_ROUTES = {
  GOOGLE: '/api/auth/google',
  GOOGLE_CALLBACK: '/api/auth/google/callback',
  DIFFICULTY: '/api/difficulty',
  QUIZZES: '/api/quizzes',
} as const;

export const API_ENDPOINTS = {
  GOOGLE_USER_INFO: 'https://www.googleapis.com/oauth2/v3/userinfo',
} as const;
