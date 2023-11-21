/*
  Warnings:

  - You are about to drop the column `desscription` on the `Level` table. All the data in the column will be lost.
  - Added the required column `description` to the `Level` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Level` DROP COLUMN `desscription`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;
