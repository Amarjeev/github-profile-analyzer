/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `GithubProfile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `githubId` INTEGER NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `bio` VARCHAR(191) NULL,
    `avatarUrl` VARCHAR(191) NULL,
    `githubProfileUrl` VARCHAR(191) NOT NULL,
    `publicRepos` INTEGER NOT NULL DEFAULT 0,
    `followers` INTEGER NOT NULL DEFAULT 0,
    `following` INTEGER NOT NULL DEFAULT 0,
    `profileStrength` VARCHAR(191) NULL,
    `developerLevel` VARCHAR(191) NULL,
    `activityLevel` VARCHAR(191) NULL,
    `githubCreatedAt` DATETIME(3) NOT NULL,
    `githubUpdatedAt` DATETIME(3) NOT NULL,
    `analyzedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `GithubProfile_githubId_key`(`githubId`),
    UNIQUE INDEX `GithubProfile_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
