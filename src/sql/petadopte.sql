CREATE TABLE `pets`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `type` BIGINT UNSIGNED NOT NULL,
    `breed` VARCHAR(255) NOT NULL,
    `age` INT NULL,
    `location` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `picture` VARCHAR(255) NOT NULL,
    `adopted` BOOLEAN NOT NULL DEFAULT FALSE,
    `shelter_id` BIGINT UNSIGNED NOT NULL
);
CREATE TABLE `volunteers`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `availability` VARCHAR(255) NOT NULL,
    `motivations` TEXT NOT NULL
);
CREATE TABLE `pet_volunteers`(
    `id` BIGINT UNSIGNED NOT NULL,
    `pet_id` BIGINT UNSIGNED NOT NULL,
    `volunteer_id` BIGINT UNSIGNED NOT NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `donators`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `civility` ENUM('M', 'Mme', 'Autre') NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `payment_method` ENUM('carte_bancaire', 'virement', 'cheque', 'paypal') NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `sponsor` BOOLEAN NOT NULL,
    `pet_id` BIGINT UNSIGNED NOT NULL
);
CREATE TABLE `type`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name_type` VARCHAR(255) NOT NULL
);
CREATE TABLE `shelter`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `city` VARCHAR(255) NOT NULL,
    `zip_code` BIGINT NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL
);
CREATE TABLE `shelters_volunteers`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `shelter_id` BIGINT UNSIGNED NOT NULL,
    `volonteer_id` BIGINT UNSIGNED NOT NULL,
    `role` ENUM('benevole', 'soigneur', 'enqueteur') NOT NULL
);

/* Permet de modifier une table existante */

ALTER TABLE
    `shelters_volunteers` ADD CONSTRAINT `shelters_volunteers_shelter_id_foreign` FOREIGN KEY(`shelter_id`) REFERENCES `shelter`(`id`);
/* La colonne pet_id dans donartors doit correspondre à un id existant dans la table pets  */
ALTER TABLE
    `donators` ADD CONSTRAINT `donators_pet_id_foreign` FOREIGN KEY(`pet_id`) REFERENCES `pets`(`id`);
ALTER TABLE
    `pets` ADD CONSTRAINT `pets_type_foreign` FOREIGN KEY(`type`) REFERENCES `type`(`id`);
ALTER TABLE
    `shelters_volunteers` ADD CONSTRAINT `shelters_volunteers_volonteer_id_foreign` FOREIGN KEY(`volonteer_id`) REFERENCES `volunteers`(`id`);
ALTER TABLE
    `pet_volunteers` ADD CONSTRAINT `pet_volunteers_pet_id_foreign` FOREIGN KEY(`pet_id`) REFERENCES `pets`(`id`);
ALTER TABLE
    `pet_volunteers` ADD CONSTRAINT `pet_volunteers_volunteer_id_foreign` FOREIGN KEY(`volunteer_id`) REFERENCES `volunteers`(`id`);
ALTER TABLE
    `pets` ADD CONSTRAINT `pets_shelter_id_foreign` FOREIGN KEY(`shelter_id`) REFERENCES `shelter`(`id`);