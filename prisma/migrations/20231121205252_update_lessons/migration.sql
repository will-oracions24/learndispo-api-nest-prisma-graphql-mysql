/*
  Warnings:

  - Added the required column `description` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Lesson` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
