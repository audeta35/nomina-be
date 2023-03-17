-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 17, 2023 at 11:43 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nomina`
--

-- --------------------------------------------------------

--
-- Table structure for table `hobby`
--

CREATE TABLE `hobby` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hobby`
--

INSERT INTO `hobby` (`id`, `name`, `status`) VALUES
(1, 'many', 1),
(3, 'fixed', 0),
(4, 'quick', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `hobby` text NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `hobby`, `age`) VALUES
(2, 'audeta', 'sandys', 'audeta@mail.com', '12345678', '4', 0),
(4, 'audeta', 'sandys', 'audeta@mail.com', '12345678', '1', 8),
(5, 'watery', 'maroon', 'watery_maroon@mail.com', '12345678', '4', 30),
(6, 'tough', 'ivory', 'tough_ivory@mail.com', '12345678', '1', 30),
(7, 'severe', 'rose', 'severe_rose@mail.com', '12345678', '0', 30),
(10, 'thirsty', 'silver', 'thirsty_silver@mail.com', '12345678', '0', 30),
(11, 'pure', 'aqua', 'pure_aqua@mail.com', '12345678', '0', 30),
(12, 'clinical', 'lime', 'clinical_lime@mail.com', '12345678', '0', 30),
(13, 'ethical', 'green', 'ethical_green@mail.com', '12345678', '0', 30),
(14, 'select', 'magenta', 'select_magenta@mail.com', '12345678', '0', 30),
(15, 'decent', 'lavender', 'decent_lavender@mail.com', '12345678', '0', 30),
(16, 'determined', 'chocolate', 'determined_chocolate@mail.com', '12345678', '0', 30),
(17, 'xenacious', 'black', 'xenacious_black@mail.com', '12345678', '0', 30),
(18, 'rude', 'jade', 'rude_jade@mail.com', '12345678', '1', 30);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hobby`
--
ALTER TABLE `hobby`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hobby`
--
ALTER TABLE `hobby`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
