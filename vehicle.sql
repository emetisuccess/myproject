-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2022 at 12:24 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vehicle`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brand_id` int(255) NOT NULL,
  `brand_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brand_id`, `brand_name`) VALUES
(1, 'Toyota'),
(2, 'Nissan'),
(3, 'Mercedes Benz'),
(4, 'Peugeot'),
(5, 'BMW'),
(6, 'Volvo'),
(7, 'Chevrolet'),
(8, 'Land-Rover'),
(9, 'Lexus'),
(10, 'Honda'),
(11, 'Ford'),
(12, 'Rolls Royce');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(255) NOT NULL,
  `p_id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `qty` int(255) NOT NULL,
  `ip_add` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `p_id`, `user_id`, `qty`, `ip_add`) VALUES
(66, 4, 3, 1, '::1');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(255) NOT NULL,
  `cat_title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cat_id`, `cat_title`) VALUES
(1, 'Sedan'),
(2, 'Coupe'),
(3, 'Sports Car'),
(4, 'Station Wagon'),
(5, 'Hatchback'),
(6, 'Convertible'),
(7, 'Sport-Utility Vehicle(SUV)'),
(8, 'Minivan'),
(9, 'Pickup Truck');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_message` text NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_amount` int(255) NOT NULL,
  `order_transaction` varchar(255) NOT NULL,
  `order_status` varchar(255) NOT NULL,
  `order_currency` varchar(255) NOT NULL,
  `order_date` datetime NOT NULL DEFAULT current_timestamp(),
  `customer_id` int(11) NOT NULL,
  `customer_fullname` varchar(255) NOT NULL,
  `customer_mobile` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `customer_address1` varchar(255) NOT NULL,
  `customer_state` varchar(255) NOT NULL,
  `customer_city` varchar(255) NOT NULL,
  `customer_country` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_amount`, `order_transaction`, `order_status`, `order_currency`, `order_date`, `customer_id`, `customer_fullname`, `customer_mobile`, `customer_email`, `customer_address1`, `customer_state`, `customer_city`, `customer_country`) VALUES
(102, 3000, '4016083', 'success', 'NGN', '2022-12-12 00:22:56', 3, 'Anonymous customer', '+2349064840719', 'emetisuccess@gmail.com', '69 Oak Drive Nwangiba, Uyo', 'Akwa Ibom', 'Nwangiba, Uyo', ''),
(103, 3000, '4020072', 'success', 'NGN', '2022-12-13 13:18:34', 7, 'Maye afejuku', '+2349064840719', 'otsemayeafejuku@gmail.com', 'nse edem street, use offot, nwaniba road, uyo Uyo', 'Akwa Ibom', 'Uyo', ''),
(104, 3000, '4020094', 'success', 'NGN', '2022-12-13 13:24:52', 7, 'Maye afejuku', '+2349064840719', 'otsemayeafejuku@gmail.com', 'nse edem street, use offot, nwaniba road, uyo Uyo', 'Akwa Ibom', 'Uyo', ''),
(105, 3000, '4020125', 'success', 'NGN', '2022-12-13 13:35:51', 7, 'Maye afejuku', '+2349064840719', 'otsemayeafejuku@gmail.com', 'nse edem street, use offot, nwaniba road, uyo Uyo', 'Akwa Ibom', 'Uyo', ''),
(106, 3000, '4020300', 'success', 'NGN', '2022-12-13 15:13:44', 7, 'Maye afejuku', '+2349064840719', 'otsemayeafejuku@gmail.com', 'nse edem street, use offot, nwaniba road, uyo Uyo', 'Akwa Ibom', 'Uyo', ''),
(107, 3000, '4020319', 'success', 'NGN', '2022-12-13 15:25:01', 7, 'Maye afejuku', '+2349064840719', 'otsemayeafejuku@gmail.com', 'nse edem street, use offot, nwaniba road, uyo Uyo', 'Akwa Ibom', 'Uyo', '');

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `pro_cat_id` int(11) NOT NULL,
  `pro_cat_title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`pro_cat_id`, `pro_cat_title`) VALUES
(1, 'Light'),
(2, 'belts'),
(3, 'wheels'),
(4, 'accessories'),
(5, 'spareparts');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `report_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_image` text NOT NULL,
  `product_title` varchar(255) NOT NULL,
  `product_price` float NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`report_id`, `order_id`, `product_image`, `product_title`, `product_price`, `product_quantity`, `date_created`) VALUES
(612, 102, 'Oil_Filter.jpg', 'Oil Filter', 3000, 1, '2022-12-12 01:23:12'),
(613, 103, 'Head_Light.jpg', 'Head Light', 3000, 1, '2022-12-13 14:18:53'),
(614, 107, '2015_Toyota_Fortune.jpg', 'Toyota Fortune 2015', 3000, 1, '2022-12-13 16:25:08');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `review_id` int(11) NOT NULL,
  `pro_id` int(255) NOT NULL,
  `veh_id` int(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`review_id`, `pro_id`, `veh_id`, `fullname`, `email`, `text`, `date`) VALUES
(1, 8, 0, 'Maye', 'mercy@gmail.com', 'this is a great product that last longer than expected. awesome', '2022-12-09'),
(2, 8, 0, 'Pracious Rasine', 'pracious@gmail.com', 'wow, this is the most awesome product gotten by me from this platform, i love it ', '2022-12-09'),
(4, 4, 0, 'saviour ', 'saviour@gmail.com', 'this is a very nice, spare part for your car', '2022-12-09'),
(5, 4, 0, 'Emeti', 'emetisuccess@gmail.com', 'i love it, it last longer than expected', '2022-12-09'),
(6, 4, 0, 'Maye', 'maye@gmail.com', 'product is awesome', '2022-12-09'),
(10, 9, 0, 'Maye', 'maye@gmail.com', 'this type of piston is the best one can ever imagine of getting', '2022-12-10'),
(11, 0, 62, 'Pracious Rasine', 'mercy@gmail.com', 'testing', '2022-12-11'),
(12, 0, 62, 'Emeti', 'etimemeti@gmail.com', 'tapping', '2022-12-11'),
(13, 0, 62, 'last man ', 'emecoder@gmail.com', 'last time testing this ', '2022-12-11');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
--

CREATE TABLE `tbl_products` (
  `id` int(11) NOT NULL,
  `product_cat_id` int(255) NOT NULL,
  `product_brand_id` int(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` int(255) NOT NULL,
  `product_image` text NOT NULL,
  `product_qty` int(255) NOT NULL,
  `product_desc` text NOT NULL,
  `product_keywords` varchar(255) NOT NULL,
  `trending_product` varchar(255) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`id`, `product_cat_id`, `product_brand_id`, `product_name`, `product_price`, `product_image`, `product_qty`, `product_desc`, `product_keywords`, `trending_product`, `created_at`) VALUES
(4, 5, 5, 'Break Pad', 5000, 'Break_Pad.jpg', 12, 'very nice break pad, made with steel and it has a long lasting durability                                                                ', 'break pad                                                                ', '0', '2022-11-04'),
(5, 5, 9, 'Exhaust Pipe', 10500, 'Exhaust_Pipe.jpg', 1, 'very nice exhaust pipe, sound proof                                ', 'exhaust pipe                                ', '0', '2022-11-04'),
(8, 5, 1, 'Oil Filter', 3000, 'Oil_Filter.jpg', 9, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis obcaecati rnesse, nihil consectetur ab excepturi quidem quia, vitae veniam nisi rndeleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!                                ', 'deleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!                                ', '1', '2022-11-04'),
(9, 5, 3, 'Piston', 85500, 'Piston.jpg', 4, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis obcaecati rnesse, nihil consectetur ab excepturi quidem quia, vitae veniam nisi rndeleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!', 'deleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!', '0', '2022-11-04'),
(10, 5, 10, 'Shock Absorber', 12000, 'Shock_Absorber.jpg', 18, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis obcaecati rnesse, nihil consectetur ab excepturi quidem quia, vitae veniam nisi rndeleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!', 'deleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!', '0', '2022-11-04'),
(11, 1, 1, 'Head Light', 10500, 'Head_Light.jpg', 24, 'it a very nice bright light that can span a distance of 50 meters', 'head light, fluorescence light, bright', '1', '2022-12-17'),
(12, 3, 5, 'Alloy Wheel', 15500, 'Alloy_Wheel.jpg', 16, 'Alloy wheel with a very nice design that fit into all cars models and make', 'alloy wheel, wheels', '1', '2022-12-17');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_vehicle`
--

CREATE TABLE `tbl_vehicle` (
  `id` int(11) NOT NULL,
  `vehicle_brand_id` int(100) NOT NULL,
  `vehicle_cat_id` int(11) NOT NULL,
  `model` varchar(50) NOT NULL,
  `make` varchar(50) NOT NULL,
  `engine_type` varchar(50) NOT NULL,
  `fuel_type` varchar(50) NOT NULL,
  `vehicle_mileage` varchar(255) NOT NULL,
  `fuel_economy` varchar(255) NOT NULL,
  `payload_capacity` varchar(255) NOT NULL,
  `engine_power` varchar(255) NOT NULL,
  `torque` varchar(50) NOT NULL,
  `vin` varchar(17) NOT NULL,
  `year_manufacture` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `vehicle_qty` int(255) NOT NULL,
  `vehicle_image` text NOT NULL,
  `keywords` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_vehicle`
--

INSERT INTO `tbl_vehicle` (`id`, `vehicle_brand_id`, `vehicle_cat_id`, `model`, `make`, `engine_type`, `fuel_type`, `vehicle_mileage`, `fuel_economy`, `payload_capacity`, `engine_power`, `torque`, `vin`, `year_manufacture`, `price`, `vehicle_qty`, `vehicle_image`, `keywords`) VALUES
(62, 1, 7, 'Toyota Fortune 2015', 'Japanese', 'V6', 'Fuel', '45094', '25', '4000', '6000hp', 'FWD', 'DKJDJ8JDJ967JID', '2015-06-16', 3000, 2, '2015_Toyota_Fortune.jpg', 'toyota fortune'),
(63, 5, 7, 'Audi Q8', 'German', 'V6', 'Fuel', '45094', '30', '4000', '6000hp', 'FWD', 'DKJDJ8JDJ967JID', '2020-12-23', 12730000, 5, 'audi-q8-front-view4.jpeg', 'audi q8'),
(64, 3, 2, 'Mercedes Benz', 'German', 'V6', 'Fuel', '45094', '30', '5000', '6000hp', 'FWD', 'DLJDJ8JDJ948DJD', '2022-02-08', 13730000, 5, '1-2-car-png-picture.png', 'Gray, Mercedes'),
(65, 7, 3, 'Lamborghini', 'German', 'V12', 'Fuel', '87497394', '30', '5000', '6000hp', 'FWD', 'dmnas8e898kjdkl', '2022-07-20', 6000000, 100, '1-2-lamborghini-png.png', 'sport cars'),
(66, 10, 5, 'Honda Jeep', 'German', 'V12', 'Fuel', '87497394', '30', '5000', '6000hp', 'FWD', 'DLJDJ8JDJ948DJD', '2022-02-16', 12730000, 60, '2011_toyota_venza-pic-8702101075543693195-1024x768.jpeg', 'Honda'),
(67, 3, 8, 'Mercedes Benz', 'German', 'V8', 'Gas', '45094', '30', '5000', '6000hp', 'FWD', 'DKJDJ8JDJ967JID', '2022-03-09', 12730000, 20, '6-2-car-png-file-thumb.png', 'Jeep'),
(68, 3, 7, 'G-wagon G34 2018', 'German', 'V6', 'Fuel', '73000', '40', '3000', '8000hp', 'FWD', 'DLJDJ8JDJ948754', '2018-12-30', 24000000, 3, '20221209_075430.jpg', 'g-wagon, Mercedes Benz'),
(69, 3, 7, 'Mercedes Benz Brabus B4 2022', 'German', 'V6', 'Fuel', '83000', '40', '3000', '6000hp', 'FWD', 'DLJDJ8JDJ98934', '2022-12-30', 240000000, 2, '20221209_075333.jpg', 'brabus, Mercedes Benz'),
(70, 5, 2, 'BMW i3 series 2021', 'German', 'V4', 'Fuel', '137000', '35', '4000', '4500hp', 'RWD', 'DLJDJ8JDJ97421', '2021-11-29', 10500000, 4, 'images (18).jpeg', 'bmw i3 series german cars'),
(71, 5, 2, 'Audi q8 2021', 'German', 'V4', 'Fuel', '137356', '45', '4000', '5500hp', 'RWD', 'DLJDJ8JDJ98735', '2021-11-29', 9500000, 5, 'download-4.jpeg', 'audi q8  german cars'),
(72, 3, 6, 'Mercedes Benz c500 2022', 'German', 'V4', 'Fuel', '15656', '30', '4000', '5500hp', 'RWD', 'DLJDJ8JDJ90938', '2022-11-29', 11500000, 3, '20221209_075251.jpg', 'mercedes benz convertible  german cars');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirmpwd` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `zip_code` int(255) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `firstname`, `lastname`, `email`, `mobile`, `password`, `confirmpwd`, `street`, `city`, `state`, `country`, `zip_code`, `created_at`) VALUES
(1, '', '', 'emecoder@gmail.com', '', '$2y$10$iusesomecrazystrings2uGtDpLi/sz8giU0Qqyz0jXbOCxzug3S6', '$2y$10$iusesomecrazystrings2uGtDpLi/sz8giU0Qqyz0jXbOCxzug3S6', '', '', '', '', 0, '2022-10-30'),
(3, 'Emeti', 'Etim', 'emetisuccess@gmail.com', '+2349064840719', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '69 Oak Drive', 'Nwangiba, Uyo', 'Akwa Ibom', 'Nigeria', 66529, '2022-10-30'),
(5, '', '', 'etimemeti@gmail.com', '', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '', '', '', '', 0, '2022-10-30'),
(6, '', '', 'seke@gmail.com', '', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '', '', '', '', 0, '2022-10-30'),
(7, 'Maye', 'afejuku', 'otsemayeafejuku@gmail.com', '+2349064840719', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', 'nse edem street, use offot, nwaniba road', 'Uyo', 'Akwa Ibom', 'Country', 520211, '2022-10-30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`pro_cat_id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`report_id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`review_id`);

--
-- Indexes for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_vehicle`
--
ALTER TABLE `tbl_vehicle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brand_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `pro_cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `report_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=615;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_vehicle`
--
ALTER TABLE `tbl_vehicle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
