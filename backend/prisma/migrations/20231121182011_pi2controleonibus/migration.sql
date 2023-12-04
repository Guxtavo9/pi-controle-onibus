-- CreateTable
CREATE TABLE `passageiro` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `usuario_id` INTEGER UNSIGNED NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `saldo` DECIMAL(8, 2) NULL,
    `cpf` CHAR(11) NOT NULL,
    `carterinha` CHAR(20) NOT NULL,
    `email` VARCHAR(500) NOT NULL,
    `telefone` CHAR(11) NOT NULL,

    INDEX `fk_passageiro_usuario1_idx`(`usuario_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `embarque` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `passageiro_id` INTEGER UNSIGNED NOT NULL,
    `viagem_id` INTEGER UNSIGNED NOT NULL,
    `tarifa` DECIMAL(8, 2) NOT NULL,
    `horario` DATETIME(0) NOT NULL,

    INDEX `fk_passageiro_has_viagem_passageiro1_idx`(`passageiro_id`),
    INDEX `fk_passageiro_has_viagem_viagem1_idx`(`viagem_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `linha` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `origem` VARCHAR(100) NOT NULL,
    `destino` VARCHAR(100) NOT NULL,
    `horarioPartida` TIME(0) NOT NULL,
    `duracao` SMALLINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `motorista` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `cnh` CHAR(11) NOT NULL,
    `nascimento` DATE NULL,
    `foto` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `onibus` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `placa` CHAR(7) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(250) NOT NULL,
    `senha` VARCHAR(100) NOT NULL,
    `token` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `viagem` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `linha_id` INTEGER UNSIGNED NOT NULL,
    `motorista_id` INTEGER UNSIGNED NOT NULL,
    `onibus_id` INTEGER UNSIGNED NOT NULL,
    `dataPartida` DATETIME(0) NOT NULL,
    `dataChegada` DATETIME(0) NOT NULL,
    `passagem` DECIMAL(10, 2) NOT NULL,

    INDEX `fk_viagem_linha1_idx`(`linha_id`),
    INDEX `fk_viagem_motorista1_idx`(`motorista_id`),
    INDEX `fk_viagem_onibus1_idx`(`onibus_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `passageiro` ADD CONSTRAINT `fk_passageiro_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `embarque` ADD CONSTRAINT `fk_passageiro_has_viagem_passageiro1` FOREIGN KEY (`passageiro_id`) REFERENCES `passageiro`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `embarque` ADD CONSTRAINT `fk_passageiro_has_viagem_viagem1` FOREIGN KEY (`viagem_id`) REFERENCES `viagem`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `fk_viagem_linha1` FOREIGN KEY (`linha_id`) REFERENCES `linha`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `fk_viagem_motorista1` FOREIGN KEY (`motorista_id`) REFERENCES `motorista`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `fk_viagem_onibus1` FOREIGN KEY (`onibus_id`) REFERENCES `onibus`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
