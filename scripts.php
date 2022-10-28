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