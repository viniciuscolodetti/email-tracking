/*
  Warnings:

  - Added the required column `headers` to the `tracking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_agent` to the `tracking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_agent_brand` to the `tracking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tracking" ADD COLUMN     "headers" JSONB NOT NULL,
ADD COLUMN     "user_agent" TEXT NOT NULL,
ADD COLUMN     "user_agent_brand" TEXT NOT NULL;
