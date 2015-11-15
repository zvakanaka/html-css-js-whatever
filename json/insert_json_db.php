<?php
//insert_json_db.php
//require $_SERVER['DOCUMENT_ROOT']."/modules/stranger_go_login.php";
// get the data from the POST
$postedData = $HTTP_RAW_POST_DATA;
$cleanData = json_decode($postedData, true);

// $marble_bag_name = $_POST['marble_bag_name'];
// $marble_amount = $_POST['marble_amount'];
// $marble_color = $_POST['marble_color'];
// $marble_size = $_POST['marble_size'];

require 'load_db.php';
try {
  $db = loadDB();
  $query = 'INSERT INTO marbles(marble_bag) VALUES(:marble_bag)';
  $statement = $db->prepare($query);
  $statement->bindParam(':marble_bag', $cleanData["marbleBagName"]);

  $statement->execute();
}
catch (Exception $ex)
{
	echo "Error with DB. ";//.$ex;
	die();
};
echo "Success! Inserted marble bag: ".$cleanData["marbleBagName"]; 

die();
?>