-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_exerciseId_fkey`;

-- DropForeignKey
ALTER TABLE `RevisionSession` DROP FOREIGN KEY `RevisionSession_exerciseId_fkey`;

-- AddForeignKey
ALTER TABLE `RevisionSession` ADD CONSTRAINT `RevisionSession_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `Exercise`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `Exercise`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
