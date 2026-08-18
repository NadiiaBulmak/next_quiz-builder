# QuizFlow

QuizFlow is a full-stack quiz creation and analytics platform built with Next.js, React, TypeScript, Prisma, and PostgreSQL.

It allows authenticated users to create, manage, publish, and share interactive multiple-choice quizzes, while participants can take public quizzes without creating an account. Quiz owners can also review responses and analyze quiz performance.

## Links

- **Live Demo:** https://next-quiz-builder.vercel.app/
- **GitHub Repository:** https://github.com/NadiiaBulmak/next_quiz-builder

## Screenshots

### Home

| Desktop | Mobile |
| --- | --- |
| ![Home Desktop](docs/screenshots/home-desktop.png) | ![Home Mobile](docs/screenshots/home-mobile.png) |

### All Quizzes

| Desktop | Mobile |
| --- | --- |
| ![All Quizzes Desktop](docs/screenshots/all-quizzes-desktop.png) | ![All Quizzes Mobile](docs/screenshots/all-quizzes-mobile.png) |

### Create Quiz

| Desktop | Mobile |
| --- | --- |
| ![Create Quiz Desktop](docs/screenshots/create-quiz-desktop.png) | ![Create Quiz Mobile](docs/screenshots/create-quiz-mobile.png) |

### My Quizzes

| Desktop | Mobile |
| --- | --- |
| ![My Quizzes Desktop](docs/screenshots/my-quizzes-desktop.png) | ![My Quizzes Mobile](docs/screenshots/my-quizzes-mobile.png) |

### Quiz Results

| Desktop | Mobile |
| --- | --- |
| ![Quiz Results Desktop](docs/screenshots/result-quiz-desktop.png) | ![Quiz Results Mobile](docs/screenshots/result-quiz-mobile.png) |

## Features

- Create multiple-choice quizzes with titles, descriptions, categories, difficulty levels, questions, and answer options.
- Save quizzes as drafts or publish them for public responses.
- Edit, preview, duplicate, delete, and manage quiz publication status.
- Browse published quizzes with search, filtering, sorting, and pagination.
- Share public quizzes that can be completed without an account.
- Automatically calculate and store quiz scores and answer-level results.
- Review participant responses and quiz performance statistics.
- Manage account information and password reset requests.
- Responsive interface optimized for desktop and mobile devices.

## Tech Stack

### Frontend

- Next.js 16 with the App Router
- React 19
- TypeScript
- React Hook Form
- Zod

### Backend

- Next.js Server Components
- Next.js Server Actions
- Next.js Route Handlers
- Application and domain services

### Database

- PostgreSQL
- Prisma 7
- Prisma PostgreSQL adapter
- Prisma migrations

### Authentication

- JWT-based sessions
- HTTP-only cookies
- Email and password authentication
- Password hashing
- Google OAuth 2.0
- Password reset flow
- Nodemailer for email delivery

### UI & Styling

- Tailwind CSS 4
- shadcn/ui
- Base UI
- Lucide React
- Framer Motion

### Development & Infrastructure

- Node.js
- npm
- Docker Compose
- ESLint
- Prettier

## Key Technical Highlights

- Server-side data fetching and mutations using the Next.js App Router.
- Type-safe database access with Prisma and PostgreSQL.
- Zod-based validation for forms and server-side payloads.
- JWT authentication with HTTP-only session cookies.
- Google OAuth 2.0 integration.
- Ownership checks for protected quiz management operations.
- Server-side score calculation and result persistence.
- Searchable, filterable, sortable, and paginated quiz and result lists.
- Responsive UI with dedicated desktop and mobile navigation states.

## Main Functionality

### Quiz Creation & Publishing

Authenticated users can create quizzes with metadata, categories, difficulty levels, questions, and answer options.

The quiz builder validates the required data, including the minimum number of answer options and a single correct answer per question.

Quizzes can be saved as drafts or published for public access. Owners can later edit, preview, duplicate, delete, or change the publication status of their quizzes.

### Quiz Discovery & Taking

The public quiz library allows users to discover published quizzes through:

- Search by title or description
- Category filtering
- Difficulty filtering
- Sorting
- Pagination

Participants can open a public quiz link and complete the quiz without creating an account.

The server validates submitted answers, calculates the score, and stores the completed result.

### Results & Analytics

After completing a quiz, participants receive their results, including their score and answer details.

Quiz owners can review participant results and aggregated statistics such as:

- Total participants
- Average score
- Question count
- Correct and incorrect answers
- Individual participant results

## Architecture

QuizFlow follows a modular Next.js App Router architecture:

```text
UI
(Server & Client Components)
        │
        ▼
Server Actions & Route Handlers
        │
        ▼
Application Services & Validation
        │
        ▼
Prisma Client
        │
        ▼
PostgreSQL
```

### Project Structure

```text
app/          → Routes, pages, layouts, loading and error states
components/   → Reusable UI components
services/     → Application logic and database-facing operations
schemas/      → Zod validation schemas
lib/          → Infrastructure and external integrations
prisma/       → Database schema and migrations
constants/    → Shared content and configuration
enums/        → Application enums
types/        → Shared TypeScript types
utils/        → Shared utility functions
```

This structure separates presentation, application logic, validation, and data access to keep the application maintainable as the project grows.

## Authentication

Protected application areas require a valid authenticated session.

QuizFlow supports:

- Email and password registration and login
- Google OAuth sign-in
- JWT-based sessions stored in an HTTP-only cookie
- Session expiration and refresh
- Logout
- Password reset with expiring, single-use reset tokens

## Database

QuizFlow uses PostgreSQL with Prisma for type-safe database access.

The database models the main entities required for quiz creation and evaluation, including:

- Users
- Quizzes
- Categories
- Difficulty levels
- Questions
- Answer options
- Results
- Result answers
- Password reset tokens

### Main Relationships

- A user can own multiple quizzes.
- A quiz contains multiple questions.
- A quiz can have multiple categories and one difficulty level.
- Each question contains multiple answer options.
- Quiz results belong to a quiz and contain detailed answer records.
- Password reset tokens belong to users and support expiration and single-use tracking.

## Installation & Local Development

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Docker Desktop or another Docker Compose-compatible runtime

Google OAuth and SMTP credentials are only required if you want to use Google authentication or password reset emails locally.

### 1. Clone the repository

```bash
git clone https://github.com/NadiiaBulmak/next_quiz-builder.git
cd next_quiz-builder
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and add the variables described in the [Environment Variables](#environment-variables) section.

### 4. Start PostgreSQL

```bash
docker compose up -d
```

The local Docker Compose configuration uses:

- Database: `quiz_builder`
- Host port: `5433`
- User: `postgres`

### 5. Apply database migrations

```bash
npx prisma migrate dev
```

Generate the Prisma client if required:

```bash
npx prisma generate
```

### 6. Start the development server

```bash
npm run dev
```

Open the application at:

http://localhost:3000

### Production Build

To create and run a production build locally:

```bash
npm run build
npm run start
```

For the configured deployment build:

```bash
npm run vercel-build
```

## Environment Variables

Create a `.env` file in the project root.

> Never commit real credentials or secrets to the repository.

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

| Variable | Required for | Description |
| --- | --- | --- |
| `DB_POSTGRES_URL` | Database | PostgreSQL connection string. |
| `SESSION_SECRET` | Authentication | Secret used to sign and verify session JWTs. |
| `NEXT_PUBLIC_APP_URL` | Password reset | Base application URL used to generate reset links. |
| `GOOGLE_CLIENT_ID` | Google authentication | Google OAuth client ID. |
| `GOOGLE_CLIENT_SECRET` | Google authentication | Google OAuth client secret. |
| `GOOGLE_CALLBACK_URL` | Google authentication | OAuth callback URL. |
| `EMAIL_HOST` | Password reset | SMTP host used by Nodemailer. |
| `EMAIL_USER` | Password reset | SMTP account username. |
| `EMAIL_APP_PASSWORD` | Password reset | SMTP password or application-specific password. |
| `EMAIL_SENDER` | Password reset | Email address used as the sender. |

`RESULT_PREVIEW_ID` is optional and uses an application fallback when not provided.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server. |
| `npm run build` | Creates a production build. |
| `npm run vercel-build` | Applies production Prisma migrations and builds the application. |
| `npm run start` | Starts the production server. |
| `npm run lint` | Runs ESLint. |
| `npm run postinstall` | Generates the Prisma client after dependency installation. |

## Future Improvements

- Add unit, integration, and end-to-end test coverage.
- Add CI checks for linting, type checking, migrations, and production builds.
- Expand quiz authoring beyond the current multiple-choice format.
- Add more advanced analytics and reporting.
- Add production deployment and operational documentation.
- Add a committed `.env.example` file with placeholder values.

## Author

**Nadiia Bulmak**

Full Stack Developer

QuizFlow is a non-commercial portfolio project.

[GitHub](https://github.com/NadiiaBulmak) · [LinkedIn](https://www.linkedin.com/in/nadiiabulmak/)