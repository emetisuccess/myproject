<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = new mysqli($host, $username, $password, $dbname);

if (!$conn) {
    die("QUERY FAILED " . mysqli_error($conn));
}

if (isset($_POST["rating_data"])) {

    $username = $_POST['user_name'];
    $data_rating = $_POST['rating_data'];
    $user_review = $_POST['user_review'];
    $datetime = date("d-m-y");

    $result = $conn->prepare("INSERT INTO testing(user_name, user_rating, user_review, datetime) VALUES(?,?,?,?)");
    $result->bind_param("ssss", $username, $data_rating, $user_review, $datetime);
    $result->execute();


    $result->close();
    $conn->close();

    echo "Your Review & Rating Successfully Submitted";
}


if (isset($_POST['display'])) {
    $result = $conn->query("SELECT * FROM testing");

    while ($row = $result->fetch_assoc()) {
        $id = $row['review_id'];
        $username = $row['user_name'];
?>
<div id="comment_box">
    <p><?php echo $id; ?></p>
    <p><?php echo $username; ?></p>
</div>
<?php
    }
}


if (isset($_POST['action'])) {

    $average_rating = 0;
    $total_review = 0;
    $five_star_review = 0;
    $four_star_review = 0;
    $three_star_review = 0;
    $two_star_review = 0;
    $one_star_review = 0;
    $total_user_rating = 0;
    $review_content = array();

    $query = $conn->query("SELECT * FROM testing ORDER BY review_id DESC");

    $res = $query->fetch_assoc();

    foreach ($res as $row) {

        $review_content[] = array(
            'user_name' => $row['user_name'],
            'user_review' => $row['user_review'],
            'rating' => $row['user_rating'],
            'datetime' => date($row['datetime'])
        );


        if ($row['user_rating'] == '5') {
            $five_star_review++;
        }
        if ($row['user_rating'] == '4') {
            $four_star_review++;
        }
        if ($row['user_rating'] == '3') {
            $three_star_review++;
        }
        if ($row['user_rating'] == '2') {
            $two_star_review++;
        }
        if ($row['user_rating'] == '1') {
            $one_star_review++;
        }

        $total_review++;
        $total_user_rating = $total_user_rating + $row['user_rating'];
    }

    $average_rating = $total_user_rating / $total_review;

    $output = array(
        'average_rating' => number_format($average_rating, 1),
        'total_review' => $total_review,
        'five_star_review' => $five_star_review,
        'four_star_review' => $four_star_review,
        'three_star_review' => $three_star_review,
        'two_star_review' => $two_star_review,
        'one_star_review' => $one_star_review,
        'review_data' => $review_content
    );
    echo json_encode($output);
}