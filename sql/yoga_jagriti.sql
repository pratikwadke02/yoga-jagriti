-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: yoga_jagriti
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `enquiries`
--

DROP TABLE IF EXISTS `enquiries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enquiries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enquiries`
--

LOCK TABLES `enquiries` WRITE;
/*!40000 ALTER TABLE `enquiries` DISABLE KEYS */;
INSERT INTO `enquiries` VALUES (1,'Pratik Wadke','sahil@gmail.com','08108871865','Hello Three','2022-08-14 14:48:37','2022-08-14 14:48:37'),(2,'Pratik Wadke','pratikwadke02@gmail.com','08108871865','Enquiry One','2022-08-18 06:05:58','2022-08-18 06:05:58'),(3,'Pratik Wadke','lance@gmail.com','08108871865','Enquiry Two','2022-08-18 06:06:10','2022-08-18 06:06:10'),(4,'Pratik Wadke','sahil@gmail.com','08108871865','Enquiry Three','2022-08-18 06:06:25','2022-08-18 06:06:25');
/*!40000 ALTER TABLE `enquiries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `stock` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discountPrice` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Yoga Shoes','50','2000','Very Comfortable','1799','2022-08-19 09:38:19','2022-08-19 09:38:19'),(2,'Yoga Tshirt','1000','700','Good Material','599','2022-08-19 13:04:46','2022-08-19 13:04:46'),(3,'Yoga Matt','45','1000','Good Quality','699','2022-08-19 13:05:41','2022-08-19 13:05:41'),(4,'Dumbells','30','1200','5kg and 10kg','999','2022-08-19 13:06:24','2022-08-19 13:06:24'),(5,'Pants','65','1000','Nice Fit','899','2022-08-19 13:20:43','2022-08-19 13:20:43'),(6,'Socks','120','400','Different Colors','299','2022-08-19 13:21:15','2022-08-19 13:21:15');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `responses`
--

DROP TABLE IF EXISTS `responses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `responses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `responses`
--

LOCK TABLES `responses` WRITE;
/*!40000 ALTER TABLE `responses` DISABLE KEYS */;
INSERT INTO `responses` VALUES (4,'Pratik Wadke','lance@gmail.com','08108871865','YPI','Response One','2022-08-18 06:06:46','2022-08-18 06:06:46'),(5,'Pratik Wadke','sahil@gmail.com','08108871865','YPI','Hi there','2022-08-18 06:07:00','2022-08-18 06:07:00');
/*!40000 ALTER TABLE `responses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `middleName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `fatherName` varchar(255) DEFAULT NULL,
  `motherName` varchar(255) DEFAULT NULL,
  `spouseName` varchar(255) DEFAULT NULL,
  `courseName` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `pwdCertificate` varchar(255) DEFAULT NULL,
  `idType` varchar(255) DEFAULT NULL,
  `idNumber` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `pincode` varchar(255) DEFAULT NULL,
  `permanentAddress` varchar(255) DEFAULT NULL,
  `permanentState` varchar(255) DEFAULT NULL,
  `permanentDistrict` varchar(255) DEFAULT NULL,
  `permanentPincode` varchar(255) DEFAULT NULL,
  `permanentCountry` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'India','Shri','Pratik','Nitin','Wadke','Male','2022-08-21','Indian','Nitin','Nikita','Shash','Yoga Volunteer Course','General','No','Aadhar Card','4242242','08108871865','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai City','400091','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai Suburban','400091','India','pratikwadke02@gmail.com','2022-08-17 10:58:51','2022-08-17 10:58:51'),(2,'India','Shri','Pratik','Nitin','Wadke','Male','2022-08-21','Indian','Nitin','Nikita','Shash','Yoga Volunteer Course','General','No','Aadhar Card','4242242','08108871865','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai City','400091','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai Suburban','400091','India','pratikwadke02@gmail.com','2022-08-17 10:58:51','2022-08-17 10:58:51'),(3,'India','Shri','Pratik','Nitin','Wadke','Male','2022-08-21','Indian','Nitin','Nikita','Shash','Yoga Volunteer Course','General','No','Aadhar Card','4242242','08108871865','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai City','400091','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai Suburban','400091','India','pratikwadke02@gmail.com','2022-08-17 10:58:51','2022-08-17 10:58:51'),(4,'India','Shri','Pratik','Nitin','Wadke','Male','2022-08-21','Indian','Nitin','Nikita','Shash','Yoga Volunteer Course','General','No','Aadhar Card','4242242','08108871865','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai City','400091','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai Suburban','400091','India','pratikwadke02@gmail.com','2022-08-17 10:58:51','2022-08-17 10:58:51'),(5,'India','Shri','Pratik','Nitin','Wadke','Male','2022-08-21','Indian','Nitin','Nikita','Shash','Yoga Volunteer Course','General','No','Aadhar Card','4242242','08108871865','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai City','400091','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai Suburban','400091','India','pratikwadke02@gmail.com','2022-08-17 10:58:51','2022-08-17 10:58:51'),(6,'India','Shri','Pratik','Nitin','Wadke','Male','2022-08-21','Indian','Nitin','Nikita','Shash','Yoga Volunteer Course','General','No','Aadhar Card','4242242','08108871865','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai City','400091','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai Suburban','400091','India','pratikwadke02@gmail.com','2022-08-17 10:58:51','2022-08-17 10:58:51'),(7,'India','Shri','Sahil','Nitin','Shetty','Male','2022-08-21','Indian','Nitin','Nikita','Shash','Yoga Wellness Course','General','No','Aadhar Card','4242242','08108871865','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai City','400091','18A / 1374 Ratnasindhu bldg OLD MHB colony\nGorai Rd Borivali West','Maharashtra','Mumbai Suburban','400091','India','sahilshetty05@gmail.com','2022-08-17 10:58:51','2022-08-17 10:58:51');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'lance@gmail.com','$2a$10$MQbcz0WiEkHpj9PrKsXJce8dcksDU/LrxF086pcJSRjcVxf37uxa6','2022-08-18 18:13:50','2022-08-18 18:13:50');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'yoga_jagriti'
--

--
-- Dumping routines for database 'yoga_jagriti'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-26 13:49:41
