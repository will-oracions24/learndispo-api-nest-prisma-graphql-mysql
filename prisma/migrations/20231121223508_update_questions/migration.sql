/*
  Warnings:

  - You are about to drop the column `Difficulty` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `SubjectLevelID` on the `RevisionSession` table. All the data in the column will be lost.
  - Added the required column `difficulty` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Question` DROP COLUMN `Difficulty`,
    ADD COLUMN `difficulty` ENUM('EASY', 'MEDIUM', 'HARD') NOT NULL;

-- AlterTable
ALTER TABLE `RevisionSession` DROP COLUMN `SubjectLevelID`;
