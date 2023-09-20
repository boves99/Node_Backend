CREATE TABLE `gas`.`users` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(8) NOT NULL,
  `direccion` VARCHAR(250) NOT NULL,
  `pin` VARCHAR(4) NOT NULL,
  `idsector` INT NULL DEFAULT 0,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `iduser_UNIQUE` (`iduser` ASC) VISIBLE,
  UNIQUE INDEX `telefono_UNIQUE` (`telefono` ASC) INVISIBLE);