/*
  Warnings:

  - You are about to drop the column `description` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `levelId` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionTypeId` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Exercise` DROP COLUMN `description`,
    ADD COLUMN `levelId` VARCHAR(191) NOT NULL,
    ADD COLUMN `questionTypeId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Exercise` ADD CONSTRAINT `Exercise_questionTypeId_fkey` FOREIGN KEY (`questionTypeId`) REFERENCES `QuestionType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exercise` ADD CONSTRAINT `Exercise_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `Level`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
