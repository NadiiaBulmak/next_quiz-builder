export const AUTH = {
  SESSION_COOKIE: 'session',
  SESSION_EXPIRY_DAYS: 7,
  SESSION_REFRESH_THRESHOLD_MS: 24 * 60 * 60 * 1000,
  GOOGLE_AUTH_ERROR: 'google_auth_failed',
  GOOGLE_OAUTH: {
    ACCESS_TYPE: 'offline',
    PROMPT: 'select_account',
    SCOPE: ['openid', 'email', 'profile'],
    CODE_PARAM: 'code',
    ERROR_PARAM: 'error',
  },
} as const;
