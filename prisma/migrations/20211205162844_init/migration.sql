-- CreateTable
CREATE TABLE `tickets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `evento` VARCHAR(191) NOT NULL,
    `artista` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `data` VARCHAR(191) NOT NULL,
    `preco` DECIMAL(10, 2) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
