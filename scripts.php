<?php
    //INCLUDE DATABASE FILE
    include('database.php');
    
    session_start();

    //ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    if(isset($_POST['delete']))      deleteTask();

    function getTasks()
    {
        echo "Fetch all tasks";
    }

    function saveTask()
    {
        global $conn;

        $title = $_POST["task-title"];
        $type = $_POST["task-type"];
        $priority = $_POST["task-priority"];
        $status = $_POST["task-status"];
        $date = $_POST["task-date"];
        $description = $_POST["task-description"];

        $sql = "insert into tasks (title, type_id, priority_id, status_id, task_datetime, description) values ('$title', '$type', '$priority', '$status', '$date', '$description')";
        $conn->query($sql);
        $conn->close();

        $_SESSION['message'] = "Task has been added successfully !";
		header('location: index.php');
    }

    function updateTask()
    {
        $_SESSION['message'] = "Task has been updated successfully !";
		header('location: index.php');
    }

    function deleteTask()
    {
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
    }