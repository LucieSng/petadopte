CREATE TABLE `users`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT NOT NULL,
    `location` TEXT NOT NULL,
    `pet` TEXT NOT NULL,
    `adopt` BOOLEAN NOT NULL,
    `volunteers` BOOLEAN NOT NULL,
    `donation` BOOLEAN NOT NULL,
    `mail` TEXT NOT NULL
);
CREATE TABLE `volunteers`(
    `volunteer_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `giver_id` BIGINT NOT NULL,
    `pet_id` BIGINT NOT NULL,
    `mail` TEXT NOT NULL,
    `motivations` LONGTEXT NOT NULL,
    `availability` TEXT NOT NULL,
    `name` TEXT NOT NULL,
    `first_name` TEXT NOT NULL,
    `city` TEXT NOT NULL,
    `zip_code` INT NOT NULL,
    `witness` LONGTEXT NOT NULL
);
CREATE TABLE `pets`(
    `pet_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `volunteer_id` BIGINT NOT NULL,
    `name` TEXT NOT NULL,
    `type` TEXT NOT NULL,
    `location` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `picture` TEXT NOT NULL,
    `age` INT NOT NULL,
    `breed` TEXT NOT NULL
);
CREATE TABLE `giver`(
    `giver_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `name` TEXT NOT NULL,
    `first_name` BIGINT NOT NULL,
    `rising` INT NOT NULL,
    `address` TEXT NOT NULL,
    `civility` INT NOT NULL,
    `paiment` TEXT NOT NULL,
    `mail` TEXT NOT NULL
);
ALTER TABLE
    `volunteers` ADD CONSTRAINT `volunteers_pet_id_foreign` FOREIGN KEY(`pet_id`) REFERENCES `pets`(`volunteer_id`);
ALTER TABLE
    `pets` ADD CONSTRAINT `pets_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `giver` ADD CONSTRAINT `giver_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `volunteers` ADD CONSTRAINT `volunteers_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);