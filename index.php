<?php
  include('scripts.php');
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>YouCode | Scrum Board</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
    <meta content="" name="description">
    <meta content="" name="author">

    <!-- ================== BEGIN core-css ================== -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
    <link href="assets/css/vendor.min.css" rel="stylesheet" />
    <link href="assets/css/default/app.min.css" rel="stylesheet" />
    <link href="assets/css/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
    <!-- ================== END core-css ================== -->
  </head>
  <body>
    <!-- BEGIN #app -->
    <div id="app" class="app-without-sidebar">
      <!-- BEGIN #content -->
      <div id="content" class="app-content main-style">
        <div class="d-flex justify-content-between">
          <div aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item fw-bold">
                <a href="javascript:;">Home</a>
              </li>
              <li class="breadcrumb-item active">Scrum Board</li>
            </ol>
            <!-- BEGIN page-header -->
            <h1 class="page-header">Scrum Board</h1>
            <!-- END page-header -->
          </div>

          <div class="">
            <button id="add-task-button" type="button" class="btn bg-hex text-white" data-bs-toggle="modal" data-bs-target="#modal-task" onclick="addButton()">
              <i class="bi bi-plus-lg me-2"></i> Add Task
            </button>
          </div>
        </div>

        <?php if (isset($_SESSION['message'])): ?>
          <div class="alert alert-green alert-dismissible fade show">
          <strong>Success!</strong>
              <?php 
                echo $_SESSION['message']; 
                unset($_SESSION['message']);
              ?>
              <button type="button" class="btn-close" data-bs-dismiss="alert"></span>
          </div>
			  <?php endif ?>

        <div class="row justify-content-center gap-4">
          <div class="col-lg col-md-6 col-sm-12 rounded p-0">
            <div class="card" style="background-color: #e6eec7">
              <div class="card-header rounded p-2" style="background-color: #c1ce8e">
                <h4 class="fs-4 m-0"> To do (<span id="to-do-tasks-count">0</span>)</h4>
              </div>
              <div class="card-body p-2" id="to-do-tasks">
                <!-- TO DO TASKS HERE -->
                <?php
                  getTasks(1);
                ?>
              </div>
            </div>
          </div>
          <div class="col-lg col-md-6 col-sm-12 rounded p-0">
            <div class="card" style="background-color: #e7eada">
              <div class="card-header rounded p-2" style="background-color: #dbe3b5">
                <h4 class="fs-4 m-0"> In Progress (<span id="in-progress-tasks-count">0</span>)</h4>
              </div>
              <div class="card-body p-2" id="in-progress-tasks">
                <!-- IN PROGRESS TASKS HERE -->
                <?php
                  getTasks(2);
                ?>
              </div>
            </div>
          </div>
          <div class="col-lg col-md-6 col-sm-12 rounded p-0">
            <div class="card" style="background-color: #e9ece1">
              <div class="card-header rounded p-2" style="background-color: #dfe8cc">
                <h4 class="fs-4 m-0"> Done (<span id="done-tasks-count">0</span>)</h4>
              </div>
              <div class="card-body p-2" id="done-tasks">
                <!-- DONE TASKS HERE -->
                <?php
                  getTasks(3);
                ?>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END #content -->

      <!-- BEGIN scroll-top-btn -->
      <a href="javascript:;" class="btn btn-icon btn-circle bg-hex btn-scroll-to-top" data-toggle="scroll-to-top"><i class="fa fa-angle-up"></i></a>
      <!-- END scroll-top-btn -->
    </div>
    <!-- END #app -->

    <!-- ################################ TASK MODAL ################################ -->

    <div class="modal fade" id="modal-task" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Modal content goes here -->
        <div class="modal-content">
          <form action="scripts.php" method="POST" id="form-task">
            <div class="modal-header bg-hex">
              <h5 class="modal-title" id="modal-title">Add task</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="background-color: #e9ece1">
              <!-- This Input Allows Storing Task Index  -->
							<input name="task-id" value="" type="hidden" id="task-id">
              <div class="">
                <label for="task-title" class="col-form-label">Title:</label>
                <input name="task-title" type="text" class="form-control" id="task-title" style="background-color: #faf7f0"/>
              </div>
              <div class="">
                <label for="type" class="col-form-label" id="type">Type:</label>
                <div class="ms-3 form-check">
                  <input name="task-type" value="1" class="form-check-input" type="radio" name="flexRadioDefault" id="Feature" checked/>
                  <label class="form-check-label" for="Feature"> Feature </label>
                </div>
                <div class="ms-3 form-check">
                  <input name="task-type" value="2" class="form-check-input" type="radio" name="flexRadioDefault" id="Bug"/>
                  <label class="form-check-label" for="Bug"> Bug </label>
                </div>
              </div>
              <div class="">
                <label for="priority" class="col-form-label">Priority:</label>
                <select name="task-priority" id="task_priority" class="form-select" aria-label="Default select" style="background-color: #faf7f0">
                  <option selected>Please select</option>
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">High</option>
                  <option value="4">Critical</option>
                </select>
              </div>
              <div class="">
                <label for="status" class="col-form-label">Status:</label>
                <select name="task-status" id="task_status" class="form-select" aria-label="Default select" style="background-color: #faf7f0">
                  <option selected>Please select</option>
                  <option value="1">To do</option>
                  <option value="2">In Progress</option>
                  <option value="3">Done</option>
                </select>
              </div>
              <div class="">
                <label for="task-date" class="col-form-label">Date:</label>
                <input name="task-date" type="date" class="form-control" id="task-date" style="background-color: #faf7f0"/>
              </div>
              <div class="">
                <label for="Description" class="col-form-label">Description:</label>
                <textarea name="task-description" class="form-control" id="task-description" aria-label="With textarea" style="background-color: #faf7f0"></textarea>
              </div>
            </div>
            <div class="modal-footer" style="background-color: #e9ece1">
              <button name="cancel" type="button" class="btn border-2 border border-hex" data-bs-dismiss="modal">Cancel</button>
              <button name="save" id="saveButton" type="submit" class="btn bg-hex" data-bs-dismiss="modal">Save</button>
              <button name="update" id="editButton" type="submit" class="btn bg-hex" data-bs-dismiss="modal">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- ############################################################################## -->

    <!-- ================== BEGIN core-js ================== -->
    <script src="assets/js/vendor.min.js"></script>
    <script src="assets/js/app.min.js"></script>
    <script src="assets/js/app.js"></script>
    <!-- ================== END core-js ================== -->
  </body>
</html>