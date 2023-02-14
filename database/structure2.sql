-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: structure
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Carts`
--

USE structure;

DROP TABLE IF EXISTS `Carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `Carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `totalPrice` float NOT NULL,
  `totalAmount` float NOT NULL,
  `usersId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Carts_users1_idx` (`usersId`),
  CONSTRAINT `fk_Carts_users1` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Carts`
--

LOCK TABLES `Carts` WRITE;
/*!40000 ALTER TABLE `Carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `Carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CartsProducts`
--

DROP TABLE IF EXISTS `CartsProducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `CartsProducts` (
  `idCart` int NOT NULL,
  `idProduct` int NOT NULL,
  `amount` float NOT NULL,
  `cartsId` int NOT NULL,
  PRIMARY KEY (`idCart`),
  KEY `fk_Carts_has_Products_Products1_idx` (`idProduct`),
  KEY `fk_CartsProducts_Carts1_idx` (`cartsId`),
  CONSTRAINT `fk_Carts_has_Products_Products1` FOREIGN KEY (`idProduct`) REFERENCES `Products` (`id`),
  CONSTRAINT `fk_CartsProducts_Carts1` FOREIGN KEY (`cartsId`) REFERENCES `Carts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CartsProducts`
--

LOCK TABLES `CartsProducts` WRITE;
/*!40000 ALTER TABLE `CartsProducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `CartsProducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `Categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `genre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'Hombre'),(2,'Mujer'),(3,'Unisex');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Colors`
--

DROP TABLE IF EXISTS `Colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `Colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Colors`
--

LOCK TABLES `Colors` WRITE;
/*!40000 ALTER TABLE `Colors` DISABLE KEYS */;
INSERT INTO `Colors` VALUES (1,'Rojo'),(2,'Naranja'),(3,'Amarillo'),(4,'Verde'),(5,'Celeste'),(6,'Azul'),(7,'Violeta'),(8,'Rosa'),(10,'Blanco');
/*!40000 ALTER TABLE `Colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `Products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `condition` varchar(45) NOT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `price` varchar(45) NOT NULL,
  `image` blob,
  `subCategoriesId` int NOT NULL,
  `colorsId` int NOT NULL,
  `categoriesId` int NOT NULL,
  `sizesId` int NOT NULL,
  `sellerId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Products_subCategories1_idx` (`subCategoriesId`),
  KEY `fk_Products_Colors1_idx` (`colorsId`),
  KEY `fk_Products_Categories1_idx` (`categoriesId`),
  KEY `fk_Products_Sizes1_idx` (`sizesId`),
  KEY `fk_Users_idx` (`sellerId`),
  CONSTRAINT `fk_Products_Categories1` FOREIGN KEY (`categoriesId`) REFERENCES `Categories` (`id`),
  CONSTRAINT `fk_Products_Colors1` FOREIGN KEY (`colorsId`) REFERENCES `Colors` (`id`),
  CONSTRAINT `fk_Products_Sizes1` FOREIGN KEY (`sizesId`) REFERENCES `Sizes` (`id`),
  CONSTRAINT `fk_Products_subCategories1` FOREIGN KEY (`subCategoriesId`) REFERENCES `subCategories` (`id`),
  CONSTRAINT `fk_Users_idx` FOREIGN KEY (`sellerId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'Remera Basica','Remera 100% algodon 420','nuevo','Wachiturris','3000',_binary '1439_verde_militar_1_5-1674393383376.jpg',1,4,1,2,1),(2,'Remera Basica','remera 100% algodon','nuevo','Ellas','3500',_binary '20190814_1134091-990a21f21ed6e427e615749197309474-1024-1024-1674396989354.jpg',1,10,2,1,1),(3,'Pantalon cool','Pantalon cool para todos los pibardos','nuevo','Wachiturris','15000',_binary 'D_NQ_NP_834266-MLA32142895768_092019-O-1674502483891.jpg',1,4,1,3,1),(4,'Pantalon Violet','Pantalon violeta, la envidia del barrio','nuevo','Lilit','13000',_binary '9d9caff9-ee3f-46ed-9d0c-9dfa4a0e803a1-9a2b28c40025c16e2916513210862775-1024-1024-1674502581629.webp',2,7,2,3,1),(5,'Campera','Cuando tenes frio y no tenes la capa de tu tio','nuevo','QOfri','34000',_binary 'img-20220206-wa0053-56db5973905867cc5b16448902156847-1024-1024-1674502657307.jpg',4,6,3,4,1),(6,'Jean','Pantalon Jean, con aeroventilas, para mantenerte bien fresca ahi donde mas se necesita.','usado','Venti','50000',_binary 'mom_taesha_a_1567539483-1674502734788.jpg',2,6,2,2,1),(7,'xz','adsd','nuevo','Ellas','3123',_binary 'DALLÂ·E 2022-12-18 02.21.38 - a paint in oil of odin god of tunder-1675473089941.png',1,1,1,2,1);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sizes`
--

DROP TABLE IF EXISTS `Sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `Sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sizes`
--

LOCK TABLES `Sizes` WRITE;
/*!40000 ALTER TABLE `Sizes` DISABLE KEYS */;
INSERT INTO `Sizes` VALUES (1,'S'),(2,'M'),(3,'L'),(4,'XL'),(5,'XXL');
/*!40000 ALTER TABLE `Sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subCategories`
--

DROP TABLE IF EXISTS `subCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `subCategories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subCategories`
--

LOCK TABLES `subCategories` WRITE;
/*!40000 ALTER TABLE `subCategories` DISABLE KEYS */;
INSERT INTO `subCategories` VALUES (1,'Remera'),(2,'Pantalon'),(3,'Camisa'),(4,'Campera');
/*!40000 ALTER TABLE `subCategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Type`
--

DROP TABLE IF EXISTS `Type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `Type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Type`
--

LOCK TABLES `Type` WRITE;
/*!40000 ALTER TABLE `Type` DISABLE KEYS */;
INSERT INTO `Type` VALUES (1,'Comprador'),(2,'Vendedor');
/*!40000 ALTER TABLE `Type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `typeId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_Type1_idx` (`typeId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Lautaro','Goscilo','$2a$10$3HqNnjR4K0NtSRBpM287yub1/G31LBSwOJeFy.9VWgBRZvRun8tde','lgoscilo@gmail.com','foto-1674191133836.jpeg',2),(2,'Prueba','test','$2a$10$FLtz2jyyDYfzOPUcSzebhOPunFEMf1T..LafzKO5FLmbX2jYxayMK','test@gmail.com','foto-1674191658818.jpeg',1),(3,'Prueba','test','$2a$10$ooUXcH5zNFhXeBBs123B7.jRiiZBVLPo09bOmt8lhXO4ayEwA7mcm','test@gmail.com','foto-1674191976112.jpeg',1),(4,'asdads','sdada','$2a$10$94o2BfXyzHHYPxrAzhwm4O6ERUwNPpyxDAJVDUxYAa9nvwGpSb1ze','czcx@sds.com','foto-1674863127303.webp',1),(5,'zxzx','ssass','$2a$10$/PUUP4q8LiZTVorTawMt4.L.OqvTUFQ5Dlmeg3bOseDB.bOtMAXYy','lgoscilo@gmail.com','foto-1675034516632.jpg',1),(6,'hfgrfg','gfgfgg','$2a$10$4SeJt0.JkwebUqwTpJANXe34znroH.vGm1RRHhO8oJybLXH9VzOXq','gfgf@erer.com','foto-1675038548334.webp',1),(7,'Lautaro','dasdad','$2a$10$f/zhccdcKKnJVHAWHOKT2ehTK4XmI6upj60QZhsbdi.kmBmC2F.xS','dasdasdas@dsd.com','foto-1675274320204.pdf',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'structure'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-13 19:53:52
