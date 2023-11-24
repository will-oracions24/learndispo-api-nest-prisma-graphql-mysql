/*
  Warnings:

  - You are about to drop the `_LessonToRevisionSession` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `exerciseId` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exerciseId` to the `RevisionSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feedback` to the `RevisionSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `RevisionSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `revisionSessionId` to the `UserResponse` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_LessonToRevisionSession` DROP FOREIGN KEY `_LessonToRevisionSession_A_fkey`;

-- DropForeignKey
ALTER TABLE `_LessonToRevisionSession` DROP FOREIGN KEY `_LessonToRevisionSession_B_fkey`;

-- AlterTable
ALTER TABLE `Lesson` ADD COLUMN `revisionSessionId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Question` ADD COLUMN `exerciseId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `RevisionSession` ADD COLUMN `exerciseId` VARCHAR(191) NOT NULL,
    ADD COLUMN `feedback` VARCHAR(191) NOT NULL,
    ADD COLUMN `score` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `UserResponse` ADD COLUMN `revisionSessionId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_LessonToRevisionSession`;

-- CreateTable
CREATE TABLE `Exercise` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `lessonId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ExerciseToLesson` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ExerciseToLesson_AB_unique`(`A`, `B`),
    INDEX `_ExerciseToLesson_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RevisionSession` ADD CONSTRAINT `RevisionSession_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `Exercise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_revisionSessionId_fkey` FOREIGN KEY (`revisionSessionId`) REFERENCES `RevisionSession`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `Exercise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserResponse` ADD CONSTRAINT `UserResponse_revisionSessionId_fkey` FOREIGN KEY (`revisionSessionId`) REFERENCES `RevisionSession`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ExerciseToLesson` ADD CONSTRAINT `_ExerciseToLesson_A_fkey` FOREIGN KEY (`A`) REFERENCES `Exercise`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ExerciseToLesson` ADD CONSTRAINT `_ExerciseToLesson_B_fkey` FOREIGN KEY (`B`) REFERENCES `Lesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
