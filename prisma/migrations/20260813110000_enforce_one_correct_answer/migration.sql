WITH ranked_correct_answers AS (
    SELECT
        "id",
        ROW_NUMBER() OVER (
            PARTITION BY "questionId"
            ORDER BY "order", "id"
        ) AS "rank"
    FROM "Answer"
    WHERE "isCorrect" = true
)
UPDATE "Answer"
SET "isCorrect" = false
WHERE "id" IN (
    SELECT "id"
    FROM ranked_correct_answers
    WHERE "rank" > 1
);

CREATE UNIQUE INDEX "Answer_questionId_one_correct_answer_key"
ON "Answer" ("questionId")
WHERE "isCorrect" = true;