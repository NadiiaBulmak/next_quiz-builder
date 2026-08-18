# QuizFlow

QuizFlow is a full-stack quiz builder for people who need to create, publish, share, and evaluate interactive multiple-choice quizzes in one place. Authenticated users manage their own quizzes and review performance, while anyone with a public quiz link can take a quiz without creating an account.

## Links

- **Live demo:** [Add deployment URL](https://next-quiz-builder.vercel.app/)
- **Repository:** [GitHub repository URL](https://github.com/NadiiaBulmak/next_quiz-builder)

The links above are placeholders because this repository does not define a public deployment or repository URL.

## Screenshots

Add screenshots to `docs/screenshots/` and replace the paths below with the final image files.

| View              | Placeholder                              |
| ----------------- | ---------------------------------------- |
| Landing page      | `docs/screenshots/landing-page.png`      |
| Quiz dashboard    | `docs/screenshots/quiz-dashboard.png`    |
| Quiz builder      | `docs/screenshots/quiz-builder.png`      |
| Public quiz       | `docs/screenshots/public-quiz.png`       |
| Results analytics | `docs/screenshots/results-analytics.png` |

## Features

- Create multiple-choice quizzes with a title, description, difficulty, categories, questions, and answer options.
- Save quizzes as drafts or publish them for public responses.
- Edit, preview, duplicate, delete, and change the publication status of owned quizzes.
- Browse published quizzes with search, category and difficulty filters, sorting, and pagination.
- Share public quizzes that can be completed without an account.
- Calculate and store scores, correct answers, selected answers, and completion timestamps.
- Review completed answers and quiz-level statistics, including average score, participants, and question count.
- Use a responsive interface with desktop navigation and mobile navigation states.
- Manage the account name and request a password reset by email.

## Tech Stack

### Frontend

- Next.js 16 with the App Router
- React 19
- TypeScript
- React Hook Form
- Zod for form and payload validation

### Backend

- Next.js Server Components and Server Actions
- Next.js Route Handlers for quiz, difficulty, and Google authentication endpoints
- Domain services for quizzes, users, categories, difficulties, sessions, email, and results

### Database

- PostgreSQL
- Prisma 7 with the PostgreSQL adapter
- Prisma migrations and generated Prisma client

### Authentication

- Custom JWT-based sessions in an HTTP-only cookie
- Email and password authentication with password hashing
- Google OAuth 2.0 sign-in
- Password reset tokens and email delivery through Nodemailer

### Styling

- Tailwind CSS 4
- shadcn/ui and Base UI primitives
- Lucide React icons
- Framer Motion for UI animation

### Development / Infrastructure

- Docker Compose for local PostgreSQL
- ESLint and Prettier
- Node.js and npm

## Key Technical Highlights

- Server-side data fetching and mutations with the Next.js App Router.
- Type-safe database access with Prisma and PostgreSQL.
- Zod-based validation for forms and server-side payloads.
- JWT-based authentication with HTTP-only cookies.
- Google OAuth 2.0 integration.
- Ownership checks for protected quiz management operations.
- Server-side score calculation and result persistence.
- Responsive UI with separate desktop and mobile navigation states.
- Paginated, searchable, and filterable quiz and result lists.

## Main Functionality

### Quiz creation and publishing

The protected dashboard provides a quiz creation flow with validation for quiz metadata, categories, difficulty, questions, at least two answer options per question, and exactly one correct answer. A quiz can remain a draft or be saved as published. Owners can later edit, preview, duplicate, delete, or toggle its publication status.

### Quiz discovery and taking

The quiz library supports searching by title or description, filtering by category and difficulty, sorting, and pagination. Only published quizzes are exposed through the public quiz listing API. A quiz must be both published and public before it accepts responses. Participants submit their name and email with their answers; account creation is not required.

### Results and statistics

When a participant submits a quiz, the server validates the answer payload, calculates the percentage score, counts correct answers, and stores a result with answer-level details. Participants can review their result, while quiz owners can view aggregate statistics and paginated result details for their quizzes.

## Architecture

QuizFlow follows the Next.js App Router structure:

```text
UI (Server Components and Client Components)
	|
	v
Server Actions and Route Handlers
	|
	v
Application services and validation schemas
	|
	v
Prisma client with the PostgreSQL adapter
	|
	v
PostgreSQL
```

- `app/` contains route segments, layouts, pages, error boundaries, loading states, and server actions.
- `components/` contains reusable UI for authentication, quiz creation, quiz lists, public quizzes, results, settings, and shared layout elements.
- `services/` contains application operations and database-facing use cases.
- `schemas/` contains reusable Zod validation schemas.
- `lib/` contains infrastructure integrations such as Prisma, Google OAuth, and generated Prisma output.
- `prisma/` contains the PostgreSQL schema and migration history.
- `constants/`, `enums/`, `types/`, and `utils/` contain shared application definitions and helpers.

## Authentication

Protected dashboard routes require a valid session. Sessions are signed as JWTs and stored in an HTTP-only `session` cookie with a seven-day lifetime. The application supports:

- Email and password registration and login.
- Google OAuth sign-in and account linking by email.
- Session refresh near expiration and logout.
- Password reset tokens with expiration and single-use tracking.

## Database

The Prisma schema uses PostgreSQL and models users, quizzes, categories, difficulty levels, questions, answers, results, answer-level result records, and password-reset tokens.

Important relationships include:

- A user can own multiple quizzes.
- A quiz has questions, categories, one difficulty level, and participant results.
- Each question has answer options and one correct answer enforced by the schema.
- Each result stores aggregate scoring data and detailed answer records.

## Installation and Local Development

### Prerequisites

- Node.js with npm
- Docker Desktop or another Docker Compose-compatible runtime
- A Google OAuth application and SMTP account if Google sign-in or password-reset emails are needed locally

### Setup

```bash
git clone <repository-url>
cd next_quiz-builder
npm install
```

Create a `.env` file using the variables in the [Environment Variables](#environment-variables) section.

Start the local PostgreSQL container:

```bash
docker compose up -d
```

Apply the development migrations and generate the Prisma client:

```bash
npx prisma migrate dev
npx prisma generate
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production-style migration and build, use:

```bash
npm run vercel-build
npm run start
```

The included Docker Compose configuration exposes PostgreSQL on host port `5433` and uses the database `quiz_builder` with the local credentials shown below.

## Environment Variables

The repository currently does not include an `.env.example` file. Use this reference to create a local `.env` file, and never commit real credentials:

```env
DB_POSTGRES_URL="postgresql://postgres:postgres@localhost:5433/quiz_builder"
SESSION_SECRET="replace-with-a-long-random-secret"

NEXT_PUBLIC_APP_URL="http://localhost:3000"

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GOOGLE_CALLBACK_URL="http://localhost:3000/api/auth/google/callback"

EMAIL_HOST=""
EMAIL_USER=""
EMAIL_APP_PASSWORD=""
EMAIL_SENDER=""
```

| Variable               | Required for            | Description                                  |
| ---------------------- | ----------------------- | -------------------------------------------- |
| `DB_POSTGRES_URL`      | All database operations | PostgreSQL connection string.                |
| `SESSION_SECRET`       | Authentication          | Secret used to sign and verify session JWTs. |
| `NEXT_PUBLIC_APP_URL`  | Password reset emails   | Base URL used to build reset links.          |
| `GOOGLE_CLIENT_ID`     | Google sign-in          | Google OAuth client ID.                      |
| `GOOGLE_CLIENT_SECRET` | Google sign-in          | Google OAuth client secret.                  |
| `GOOGLE_CALLBACK_URL`  | Google sign-in          | OAuth callback URL.                          |
| `EMAIL_HOST`           | Password reset emails   | Nodemailer SMTP service/host value.          |
| `EMAIL_USER`           | Password reset emails   | SMTP account username.                       |
| `EMAIL_APP_PASSWORD`   | Password reset emails   | SMTP account password or app password.       |
| `EMAIL_SENDER`         | Password reset emails   | Sender address used for reset messages.      |

`RESULT_PREVIEW_ID` is optional and has an application fallback when it is not set.

## Available Scripts

| Script                 | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| `npm run dev`          | Starts the Next.js development server.                         |
| `npm run build`        | Builds the application for production.                         |
| `npm run vercel-build` | Applies deployed Prisma migrations and builds the application. |
| `npm run start`        | Starts the production server after a build.                    |
| `npm run lint`         | Runs ESLint.                                                   |
| `npm run postinstall`  | Generates the Prisma client after dependency installation.     |

## Future Improvements

- Add automated unit, integration, and end-to-end test coverage.
- Add continuous integration checks for linting, type checking, migrations, and builds.
- Add richer quiz authoring options beyond the currently supported multiple-choice format.
- Add explicit production deployment and operational documentation.
- Add a committed `.env.example` file containing placeholders only.

## Author

**Nadiia Bulmak**

QuizFlow is a non-commercial portfolio project. Contact: [nbulmak@gmail.com](mailto:nbulmak@gmail.com)
