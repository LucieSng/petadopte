CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    city VARCHAR(255) NOT NULL,
    zip_code INT NOT NULL
);
CREATE TABLE pets (
    pet_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    breed VARCHAR(255),
    age INT NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT,
    picture VARCHAR(255),
    adopted BOOLEAN NOT NULL DEFAULT FALSE,

    CONSTRAINT pets_user_fk
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);
CREATE TABLE volunteers (
    volunteer_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    availability VARCHAR(255) NOT NULL,
    motivations TEXT NOT NULL,
    witness TEXT,

    CONSTRAINT volunteers_user_fk
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);
CREATE TABLE pet_volunteer (
    pet_id BIGINT UNSIGNED NOT NULL,
    volunteer_id BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (pet_id, volunteer_id),

    CONSTRAINT pv_pet_fk
        FOREIGN KEY (pet_id)
        REFERENCES pets(pet_id)
        ON DELETE CASCADE,

    CONSTRAINT pv_volunteer_fk
        FOREIGN KEY (volunteer_id)
        REFERENCES volunteers(volunteer_id)
        ON DELETE CASCADE
);
CREATE TABLE givers (
    giver_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    civility ENUM('M', 'Mme', 'Autre') NOT NULL,
    address VARCHAR(255) NOT NULL,
    payment_method VARCHAR(100) NOT NULL,

    CONSTRAINT givers_user_fk
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);