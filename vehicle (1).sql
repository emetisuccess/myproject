-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2023 at 10:41 PM
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
(66, 4, 3, 1, '::1'),
(77, 8, -1, 1, '::1');

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
(11, 'pickup');

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
-- Table structure for table `registeredcompany`
--

CREATE TABLE `registeredcompany` (
  `company_id` int(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `contact_number` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zipcode` varchar(255) NOT NULL,
  `logo` text NOT NULL,
  `charge_per_km` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `registeredcompany`
--

INSERT INTO `registeredcompany` (`company_id`, `company_name`, `contact_number`, `contact_email`, `address`, `city`, `state`, `zipcode`, `logo`, `charge_per_km`, `created_at`) VALUES
(1, 'Burgess Conrad Trading', '+2349034569823', 'burgessconrad@burges.com', 'no45, off Aba rd', 'Ikot Ekpene', 'Akwa Ibom State', '81347', 'images.jpeg', '4000', '2023-01-03 08:28:43'),
(2, 'Akwel Towing LTD.', '+2347035764435', 'akwelcontact@akwel.com', 'nse edem street, use offot, nwaniba road', 'Uyo', 'Akwa Ibom', '520211', 'images2.png', '5000', '2023-01-04 17:56:14'),
(3, 'Sonvile Towing', '+2347083974634', 'sonvilecontactsupport@sonvile.com', '333 Fremont Street', 'San Francisco Rd', 'Lagos', '94105', 'images.png', '3500', '2023-01-04 18:03:49'),
(4, 'Oncal Towing Ltd.', '+2349035834435', 'oncalcontact@oncal.com', 'no546 Nwangiba rd, Eniong Offot', 'Uyo', 'Akwa Ibom', '520211', 'download.jpeg', '4500', '2023-01-04 18:07:09'),
(5, 'Bruzel Towing Ltd', '+2349047862256', 'bruzelcontact@bruzel.com', 'no 45 market Road', 'Ikot Ekpene', 'Akwa Ibom ', '530101', 'download.png', '6000', '2023-01-04 18:15:36'),
(6, 'Danfodio Towing Company', '+2349055784245', 'danfodiocontact@danfo.com', 'no345 oron Rd', 'Uyo', 'Akwa Ibom ', '520211', 'download-2.jpeg', '5500', '2023-01-04 18:22:01');

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
(13, 0, 62, 'last man ', 'emecoder@gmail.com', 'last time testing this ', '2022-12-11'),
(14, 11, 0, 'Edwin Diaz', 'diaz@gmail.com', 'this product is the best i have ever gotten', '2022-12-20');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_driver`
--

CREATE TABLE `tbl_driver` (
  `driver_id` int(11) NOT NULL,
  `driver_fullname` varchar(255) NOT NULL,
  `driver_mobile` varchar(255) NOT NULL,
  `driver_address` text NOT NULL,
  `driver_city` varchar(255) NOT NULL,
  `driver_state` varchar(255) NOT NULL,
  `driver_blood_group` varchar(255) NOT NULL,
  `driver_birthday` varchar(255) NOT NULL,
  `driver_email` varchar(255) NOT NULL,
  `driver_license_number` varchar(255) NOT NULL,
  `driver_license_front` text NOT NULL,
  `driver_license_back` text NOT NULL,
  `driver_image` text NOT NULL,
  `driver_class` varchar(255) NOT NULL,
  `driver_experience` varchar(255) NOT NULL,
  `preffered_location` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_driver`
--

INSERT INTO `tbl_driver` (`driver_id`, `driver_fullname`, `driver_mobile`, `driver_address`, `driver_city`, `driver_state`, `driver_blood_group`, `driver_birthday`, `driver_email`, `driver_license_number`, `driver_license_front`, `driver_license_back`, `driver_image`, `driver_class`, `driver_experience`, `preffered_location`, `created_at`) VALUES
(1, 'Phoebe Walter', '+1 (252) 338-8703', 'no12 uyo road', 'Ikot Ekpene', 'Akwa Ibom ', 'A+', '1971-11-20', 'tyrucabo@mailinator.com', 'akw12345678', '20221209_075236.jpg', '20221209_075236.jpg', 'images (1).jpeg', 'Class C', '4', 'Imo, Akwa Ibom, PH', '2023-01-03 15:42:08'),
(2, 'Alexander  Oliver', '+23409064840719', 'nse edem street, use offot, nwaniba road', 'Uyo', 'Akwa Ibom', 'O+', '1987-11-17', 'alexandra@gmail.com', 'akw12345678', '20221209_075401.jpg', '2021_cadillac_escalade_f34_fe_72420_717.jpg', 'download-18.jpeg', 'Class C', '7', 'Akwa Ibom State', '2023-01-06 09:52:18');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_lease`
--

CREATE TABLE `tbl_lease` (
  `lease_id` int(11) NOT NULL,
  `model_year` varchar(255) NOT NULL,
  `model_name` varchar(255) NOT NULL,
  `make` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `transmission_type` varchar(255) NOT NULL,
  `seats` varchar(255) NOT NULL,
  `charge_per_day` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zipcode` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_number` varchar(255) NOT NULL,
  `image1` text NOT NULL,
  `image2` text NOT NULL,
  `image3` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_lease`
--

INSERT INTO `tbl_lease` (`lease_id`, `model_year`, `model_name`, `make`, `color`, `transmission_type`, `seats`, `charge_per_day`, `address`, `city`, `state`, `zipcode`, `contact_name`, `contact_number`, `image1`, `image2`, `image3`, `created_at`) VALUES
(2, '2020', 'Lamborghini Spider', 'Italian', 'red and black', 'Automatic', '2', '150000', '333 Fremont Street', 'San Francisco', 'CA', '94105', 'Emeti Etim', '+2349048629945', '1-2-lamborghini-png.png', '1-2-car-png-picture.png', '4-2-car-png-hd.png', '2023-01-05 21:47:13'),
(3, '2021', 'Lamborghini Roadster', 'Italian', 'yellow, white and strip red and black', 'Manual', '2', '165000', 'nse edem street, use offot, nwaniba road', 'Uyo', 'Akwa Ibom', '520211', 'Emmanuel Etim', '+2348039485432', 'yellow-lamborghini-roadster-clipping-path-16478400 (1).jpg', 'sports-car-lamborghini-gallardo-isolated-white-43167526.jpg', '1-2-lamborghini-png.png', '2023-01-05 21:52:42'),
(4, '2022', 'G-wagon XLE', 'German', 'black', 'Automatic', '4', '200000', '333 Fremont Street', 'San Francisco', 'CA', '94105', 'Maye Afejwuku', '+2347065327654', '20221209_075430.jpg', 'images (4).jpeg', 'Gklass.jpg', '2023-01-05 22:24:37');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mechanic`
--

CREATE TABLE `tbl_mechanic` (
  `mech_id` int(255) NOT NULL,
  `mech_fullname` varchar(255) NOT NULL,
  `mech_contact` varchar(255) NOT NULL,
  `mech_email` varchar(255) NOT NULL,
  `mech_address` varchar(255) NOT NULL,
  `mech_city` varchar(255) NOT NULL,
  `mech_state` varchar(255) NOT NULL,
  `mech_experience` varchar(255) NOT NULL,
  `mech_work_type` varchar(255) NOT NULL,
  `mech_certification` varchar(255) NOT NULL,
  `mech_image1` text NOT NULL,
  `mech_image2` text NOT NULL,
  `mech_image3` text NOT NULL,
  `mech_services` text NOT NULL,
  `mech_hourly_work` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mechanic`
--

INSERT INTO `tbl_mechanic` (`mech_id`, `mech_fullname`, `mech_contact`, `mech_email`, `mech_address`, `mech_city`, `mech_state`, `mech_experience`, `mech_work_type`, `mech_certification`, `mech_image1`, `mech_image2`, `mech_image3`, `mech_services`, `mech_hourly_work`, `created_at`) VALUES
(1, 'Florence Peck', '+2347057832345', 'florence@gmail.com', 'no123 nse edem stree, nwangiba', 'Uyo', 'Akwa Ibom', '8', 'part-time', 'BEngr. ', '1-2-car-png-picture.png', '1-2-lamborghini-png.png', '20221209_075236.jpg', 'Repair and Replace oil  Changes', '73', '2023-01-03 22:01:37'),
(2, 'Emeti Etim', '+2349064345719', 'emetisuccess@gmail.com', '333 Fremont Street', 'San Francisco', 'CA', '10', 'full-time', 'BEngr.', 'download-13.jpeg', 'images (12).jpeg', '2021_cadillac_escalade_f34_fe_72420_717.jpg', 'Repair and Replace  Pre-purchase Inspection Services and Oil Changes', '98', '2023-01-06 14:29:04');

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
(4, 5, 5, 'Break Pad', 5000, 'Break_Pad.jpg', 12, 'very nice break pad, made with steel and it has a long lasting durability                                                                                                ', 'break pad                                                                                                ', '1', '2022-11-04'),
(5, 5, 9, 'Exhaust Pipe', 10500, 'Exhaust_Pipe.jpg', 1, 'very nice exhaust pipe, sound proof                                                                ', 'exhaust pipe                                                                ', '0', '2022-11-04'),
(8, 5, 1, 'Oil Filter', 3000, 'Oil_Filter.jpg', 9, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis obcaecati rnesse, nihil consectetur ab excepturi quidem quia, vitae veniam nisi rndeleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!                                ', 'deleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!                                ', '1', '2022-11-04'),
(9, 5, 3, 'Piston', 85500, 'Piston.jpg', 4, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis obcaecati rnesse, nihil consectetur ab excepturi quidem quia, vitae veniam nisi rndeleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!', 'deleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!', '0', '2022-11-04'),
(10, 5, 10, 'Shock Absorber', 12000, 'Shock_Absorber.jpg', 18, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis obcaecati rnesse, nihil consectetur ab excepturi quidem quia, vitae veniam nisi rndeleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!', 'deleniti pariatur quae necessitatibus iusto placeat amet animi recusandae voluptatem!', '0', '2022-11-04'),
(11, 5, 1, 'Head Light', 10500, 'Head_Light.jpg', 24, 'it a very nice bright light that can span a distance of 50 meters', 'head light, fluorescence light, bright', '1', '2022-12-17'),
(12, 5, 5, 'Alloy Wheel', 15500, 'Alloy_Wheel.jpg', 16, 'Alloy wheel with a very nice design that fit into all cars models and make', 'alloy wheel, wheels', '1', '2022-12-17');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tow`
--

CREATE TABLE `tbl_tow` (
  `tow_id` int(11) NOT NULL,
  `model_year` text NOT NULL,
  `model_name` varchar(255) NOT NULL,
  `make` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zipcode` int(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_number` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tow`
--

INSERT INTO `tbl_tow` (`tow_id`, `model_year`, `model_name`, `make`, `color`, `address`, `city`, `state`, `zipcode`, `contact_name`, `contact_number`, `created_at`) VALUES
(1, '1985', 'Nelle Vinson', 'Facere dolor facere ', 'Corrupti id accusa', 'Quae magni ut conseq', 'Dolores iure ipsa l', 'Nobis explicabo Et ', 32292, 'Amena George', '435', '2022-12-30 21:17:06'),
(2, '1992', 'Vance Rojas', 'Ducimus aspernatur ', 'Optio sint nulla no', 'Iste dolor nobis est', 'Libero perferendis a', 'Quae est necessitat', 17681, 'Miranda Avila', '169', '2022-12-30 21:31:36');

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
-- Table structure for table `tbl_vehicle_rent`
--

CREATE TABLE `tbl_vehicle_rent` (
  `rent_id` int(255) NOT NULL,
  `vehicle_id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `ip_add` varchar(255) NOT NULL,
  `vehicle_image` text NOT NULL,
  `pickup_time` varchar(255) NOT NULL,
  `pickup_date` varchar(255) NOT NULL,
  `drop_off_time` varchar(255) NOT NULL,
  `drop_off_date` date NOT NULL,
  `vehicle_type` varchar(255) NOT NULL,
  `vehicle_qty` int(255) NOT NULL,
  `customer_title` varchar(255) NOT NULL,
  `customer_firstname` varchar(255) NOT NULL,
  `customer_lastname` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `customer_licenceno` varchar(255) NOT NULL,
  `customer_contact_number` varchar(255) NOT NULL,
  `customer_flight_number` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_vehicle_rent`
--

INSERT INTO `tbl_vehicle_rent` (`rent_id`, `vehicle_id`, `user_id`, `ip_add`, `vehicle_image`, `pickup_time`, `pickup_date`, `drop_off_time`, `drop_off_date`, `vehicle_type`, `vehicle_qty`, `customer_title`, `customer_firstname`, `customer_lastname`, `customer_email`, `customer_licenceno`, `customer_contact_number`, `customer_flight_number`, `status`, `created_at`) VALUES
(1, 3, 5, '::1', 'yellow-lamborghini-roadster-clipping-path-16478400 (1).jpg', '01:29', '2021-12-29', '19:20', '2021-12-05', '2021 Lamborghini Roadster', 1, 'Ms', 'Sophia', 'Raymond', 'zagakamok@mailinator.com', 'Ka938493', '+1 (601) 478-7161', 'Christine', '0', '2023-01-14 12:06:30');

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
(3, 'Emeti', 'Etim', 'emetisuccess@gmail.com', '+2349064840719', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '69 Oak Drive', 'Nwangiba, Uyo', 'Akwa Ibom', 'Nigeria', 66529, '2022-10-30'),
(5, '', '', 'etimemeti@gmail.com', '', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '', '', '', '', 0, '2022-10-30'),
(6, '', '', 'seke@gmail.com', '', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '', '', '', '', 0, '2022-10-30'),
(7, 'Maye', 'afejuku', 'otsemayeafejuku@gmail.com', '+2349064840719', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', '$2y$10$iusesomecrazystrings2ui1qr860E30b0c9ijNqwCSwHnHdgz.1K', 'nse edem street, use offot, nwaniba road', 'Uyo', 'Akwa Ibom', 'Country', 520211, '2022-10-30');

-- --------------------------------------------------------

--
-- Table structure for table `viewed_product`
--

CREATE TABLE `viewed_product` (
  `id` int(11) NOT NULL,
  `pro_id` int(255) NOT NULL,
  `ip_add` varchar(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `viewed_product`
--

INSERT INTO `viewed_product` (`id`, `pro_id`, `ip_add`, `user_id`, `created_at`) VALUES
(5, 5, '::1', -1, '2022-12-21 03:20:47'),
(6, 9, '::1', -1, '2022-12-21 03:25:03'),
(10, 10, '::1', -1, '2023-01-05 13:56:02'),
(12, 8, '::1', -1, '2023-01-12 21:17:27');

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
-- Indexes for table `registeredcompany`
--
ALTER TABLE `registeredcompany`
  ADD PRIMARY KEY (`company_id`);

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
-- Indexes for table `tbl_driver`
--
ALTER TABLE `tbl_driver`
  ADD PRIMARY KEY (`driver_id`);

--
-- Indexes for table `tbl_lease`
--
ALTER TABLE `tbl_lease`
  ADD PRIMARY KEY (`lease_id`);

--
-- Indexes for table `tbl_mechanic`
--
ALTER TABLE `tbl_mechanic`
  ADD PRIMARY KEY (`mech_id`);

--
-- Indexes for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_tow`
--
ALTER TABLE `tbl_tow`
  ADD PRIMARY KEY (`tow_id`);

--
-- Indexes for table `tbl_vehicle`
--
ALTER TABLE `tbl_vehicle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_vehicle_rent`
--
ALTER TABLE `tbl_vehicle_rent`
  ADD PRIMARY KEY (`rent_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `viewed_product`
--
ALTER TABLE `viewed_product`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `cart_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
-- AUTO_INCREMENT for table `registeredcompany`
--
ALTER TABLE `registeredcompany`
  MODIFY `company_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `report_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=615;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_driver`
--
ALTER TABLE `tbl_driver`
  MODIFY `driver_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_lease`
--
ALTER TABLE `tbl_lease`
  MODIFY `lease_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_mechanic`
--
ALTER TABLE `tbl_mechanic`
  MODIFY `mech_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_tow`
--
ALTER TABLE `tbl_tow`
  MODIFY `tow_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_vehicle`
--
ALTER TABLE `tbl_vehicle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `tbl_vehicle_rent`
--
ALTER TABLE `tbl_vehicle_rent`
  MODIFY `rent_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `viewed_product`
--
ALTER TABLE `viewed_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
