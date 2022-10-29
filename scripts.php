<?php
    //INCLUDE DATABASE FILE
    include('database.php');
    
    session_start();

    //ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    if(isset($_GET['id']))      deleteTask();

    function getTasks($st)
    {
        global $conn;

        $sql = "select tasks.*, types.name as type, statuses.name as status, priorities.name as priority
        from tasks
        inner join types
        on tasks.type_id=types.id
        inner join priorities
        on tasks.priority_id=priorities.id
        inner join statuses
        on tasks.status_id=statuses.id";
        
        $result = $conn->query($sql);

        while($row = $result->fetch_assoc()){
            
            $id = $row['id'];
            $title = $row['title'];
            $type = $row['type'];
            $status = $row['status'];
            $priority = $row['priority'];
            $date = $row['task_datetime'];
            $description = $row['description'];

            if($status == 'to do' && $st == 1){
                echo(
                    '<button class="task border-0 rounded mb-3 p-2 shadow-sm w-100 d-flex">
                    <div class="">
                        <i class="bi bi-question-square fs-25px"></i>
                    </div>
                    <div class="edit-delete-container">
                        <div class="edit-delete d-flex flex-column justify-content-between">
                            <i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#modal-task" onclick="updateButton()"></i>
                            <span class=""></span>
                            <a href="scripts.php?id='.$id.'"><i id="trash" class="bi bi-trash3 link-dark"></i></a>
                        </div>
                    </div>
                    <div class="text-start ms-2 d-flex w-100 justify-content-between">
                        <div>
                            <div class="fw-bolder fs-5">'.$title.'</div>
                            <div class="">
                                <div class="text-secondary ms-1">#'.$id.' created in'.$date.'</div>
                                <div class="task-description ms-1" title="'.$description.'">'.$description.'</div>
                            </div>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-end ms-2 w-25">
                            <span class="priority-type bg-hex text-white p-1 mb-2 rounded-3 text-center">'.$priority.'</span>
                            <span class="priority-type border-2 border border-hex p-1 rounded-3  text-center">'.$type.'</span>
                        </div>
                    </div>
                    </button>'
                );
            } else if($status == 'in progress' && $st == 2){
                echo(
                    '<button class="task border-0 rounded mb-3 p-2 shadow-sm w-100 d-flex">
                    <div class="">
                        <i class="bi bi-hourglass-split fs-25px"></i>
                    </div>
                    <div class="edit-delete-container">
                        <div class="edit-delete d-flex flex-column justify-content-between">
                            <i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#modal-task" onclick="updateButton()"></i>
                            <span class=""></span>
                            <a href="scripts.php?id='.$id.'"><i id="trash" class="bi bi-trash3 link-dark"></i></a>
                        </div>
                    </div>
                    <div class="text-start ms-2 d-flex w-100 justify-content-between">
                        <div>
                            <div class="fw-bolder fs-5">'.$title.'</div>
                            <div class="">
                                <div class="text-secondary ms-1">#'.$id.' created in'.$date.'</div>
                                <div class="task-description ms-1" title="'.$description.'">'.$description.'</div>
                            </div>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-end ms-2 w-25">
                            <span class="priority-type bg-hex text-white p-1 mb-2 rounded-3 text-center">'.$priority.'</span>
                            <span class="priority-type border-2 border border-hex p-1 rounded-3  text-center">'.$type.'</span>
                        </div>
                    </div>
                    </button>'
                );
            } else if($status == 'done' && $st == 3){
                echo(
                    '<button class="task border-0 rounded mb-3 p-2 shadow-sm w-100 d-flex">
                    <div class="">
                        <i class="bi bi-check-square fs-25px"></i>
                    </div>
                    <div class="edit-delete-container">
                        <div class="edit-delete d-flex flex-column justify-content-between">
                            <i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#modal-task" onclick="updateButton()"></i>
                            <span class=""></span>
                            <a href="scripts.php?id='.$id.'"><i id="trash" class="bi bi-trash3 link-dark"></i></a>
                        </div>
                    </div>
                    <div class="text-start ms-2 d-flex w-100 justify-content-between">
                        <div>
                            <div class="fw-bolder fs-5">'.$title.'</div>
                            <div class="">
                                <div class="text-secondary ms-1">#'.$id.' created in'.$date.'</div>
                                <div class="task-description ms-1" title="'.$description.'">'.$description.'</div>
                            </div>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-end ms-2 w-25">
                            <span class="priority-type bg-hex text-white p-1 mb-2 rounded-3 text-center">'.$priority.'</span>
                            <span class="priority-type border-2 border border-hex p-1 rounded-3  text-center">'.$type.'</span>
                        </div>
                    </div>
                    </button>'
                );
            }   
        } 
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
        global $conn;

        $_SESSION['message'] = "Task has been updated successfully !";
		header('location: index.php');
    }

    function deleteTask()
    {
        global $conn;

        $id = $_GET[ 'id'];
        $sql = "delete from tasks where id=$id";
        $conn->query($sql);
        $conn->close();
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
    }