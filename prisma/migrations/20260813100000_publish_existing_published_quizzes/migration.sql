UPDATE "Quiz"
SET "isPublic" = true
WHERE "isPublished" = true
  AND ("isPublic" = false OR "isPublic" IS NULL);