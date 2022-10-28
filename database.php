<?php

    //Create connection
    $conn = mysqli_connect("localhost", "root", "", "youcode_scrum_board");

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";