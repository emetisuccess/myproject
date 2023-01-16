<?php
ob_start();
session_start();

defined("DS") ? null : define("DS", DIRECTORY_SEPARATOR);
defined("TEMPLATE_FRONT") ? null : define("TEMPLATE_FRONT", __DIR__ . DS . "templates/front");
defined("TEMPLATE_BACK") ? null : define("TEMPLATE_BACK", __DIR__ . DS . "templates/back");
defined("UPLOADS") ? null : define("UPLOADS", __DIR__ . DS . "uploads");

defined("LOCALHOST") ? null : define("LOCALHOST", "localhost");
defined("USERNAME") ? null : define("USERNAME", "root");
defined("PASSWORD") ? null : define("PASSWORD", "");
defined("DBNAME") ? null : define("DBNAME", "vehicle");

$conn = new mysqli(
    LOCALHOST,
    USERNAME,
    PASSWORD,
    DBNAME
);

if (!$conn) {
    echo "failed to connect";
}

require_once("functions.php");
require_once("checkout.php");