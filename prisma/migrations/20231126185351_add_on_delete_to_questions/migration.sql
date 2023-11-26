-- DropForeignKey
ALTER TABLE `AnswerOption` DROP FOREIGN KEY `AnswerOption_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `Exercise` DROP FOREIGN KEY `Exercise_levelId_fkey`;

-- DropForeignKey
ALTER TABLE `Exercise` DROP FOREIGN KEY `Exercise_questionTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `UserResponse` DROP FOREIGN KEY `UserResponse_answerOptionId_fkey`;

-- DropForeignKey
ALTER TABLE `UserResponse` DROP FOREIGN KEY `UserResponse_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `UserResponse` DROP FOREIGN KEY `UserResponse_revisionSessionId_fkey`;

-- DropForeignKey
ALTER TABLE `UserResponse` DROP FOREIGN KEY `UserResponse_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Exercise` ADD CONSTRAINT `Exercise_questionTypeId_fkey` FOREIGN KEY (`questionTypeId`) REFERENCES `QuestionType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exercise` ADD CONSTRAINT `Exercise_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `Level`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnswerOption` ADD CONSTRAINT `AnswerOption_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserResponse` ADD CONSTRAINT `UserResponse_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserResponse` ADD CONSTRAINT `UserResponse_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserResponse` ADD CONSTRAINT `UserResponse_answerOptionId_fkey` FOREIGN KEY (`answerOptionId`) REFERENCES `AnswerOption`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserResponse` ADD CONSTRAINT `UserResponse_revisionSessionId_fkey` FOREIGN KEY (`revisionSessionId`) REFERENCES `RevisionSession`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
