upload.php

<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_FILES) {


    $target_dir = "upload/";
    echo $target_file = $target_dir . basename($_FILES["userFile"]["name"]);

    move_uploaded_file($_FILES["userFile"]["tmp_name"], $target_file);
}
