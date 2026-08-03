export const ERROR_MESSAGES = {
  registration: {
    400: "Please check the information you entered and try again.",
    401: "Your session has expired. Please sign in and try again.",
    403: "You don't have permission to perform this action.",
    409: "An account with this email already exists.",
    422: "Some fields contain invalid information.",
    500: "Something went wrong. Please try again in a few moments.",
  },

  login: {
    400: "Please enter a valid email and password.",
    401: "Incorrect email or password.",
    403: "Your account is not available. Please contact support if you believe this is a mistake.",
    404: "We couldn't find an account with this email.",
    429: "Too many login attempts. Please wait a few minutes and try again.",
    500: "Something went wrong. Please try again in a few moments.",
  },
} as const;

