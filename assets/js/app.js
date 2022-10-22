/*---------------------Variabls section---------------------*/

// Status Sections
const toDo = document.getElementById("to-do-tasks");
const inProgress = document.getElementById("in-progress-tasks");
const done = document.getElementById("done-tasks");

// Tasks count
let toDoCount = document.getElementById("to-do-tasks-count");
let inProgressCount = document.getElementById("in-progress-tasks-count");
let doneCount = document.getElementById("done-tasks-count");

// Modal
const modal = document.getElementById("modal-task");
const modalTitle = document.getElementById("modal-title");
const saveButton = document.getElementById("saveButton");
const editButton = document.getElementById("editButton");

// Task's Property
const taskTitle = document.getElementById("task-title");
const feature = document.getElementById("Feature");
const bug = document.getElementById("Bug");
const taskPriority = document.getElementById("task_priority");
const taskStatus = document.getElementById("task_status");
const taskDate = document.getElementById("task-date");
const taskDescription = document.getElementById("task-description");

//save the index of the task for update
let temp;

/*---------------------------------------------------------------*/

display();

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});

editButton.addEventListener("click", (e) => {
  e.preventDefault();
  editTask(temp);
});

function display() {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status == "To Do") {
      toDo.innerHTML += `
				<button class="task border-0 rounded mb-3 p-2 shadow-sm w-100 d-flex">
				<div class="">
					<i class="bi bi-question-square fs-25px"></i>
				</div>
				<div class="edit-delete-container">
					<div class="edit-delete d-flex flex-column justify-content-between">
					<i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#modal-task" onclick="initTaskForm(${i}); updateButton()"></i>
						<span class=""></span>
						<i id="trash" class="bi bi-trash3" onclick="removeTask(${i})"></i>
					</div>
				</div>
				<div class="text-start ms-2 d-flex w-100 justify-content-between">
					<div>
						<div class="fw-bolder fs-5">${tasks[i].title}</div>
						<div class="">
							<div class="text-secondary ms-1">#${tasks[i].id} created in ${tasks[i].date}</div>
							<div class="task-description ms-1" title="${tasks[i].description}">${tasks[i].description}</div>
						</div>
					</div>
					<div class="d-flex flex-column justify-content-center align-items-end ms-2 w-25">
						<span class="priority-type bg-hex text-white p-1 mb-2 rounded-3 text-center">${tasks[i].priority}</span>
						<span class="priority-type border-2 border border-hex p-1 rounded-3  text-center">${tasks[i].type}</span>
					</div>
				</div>
				</button>
			`;
      toDoCount.innerHTML++;
    } else if (tasks[i].status == "In Progress") {
      inProgress.innerHTML += `
				<button class="task border-0 rounded mb-3 p-2 shadow-sm w-100 d-flex" style="background-color: #FAF7F0;">
				<div class="">
					<i class="bi bi-hourglass-split fs-25px"></i>
				</div>
				<div class="edit-delete-container">
					<div class="edit-delete d-flex flex-column justify-content-between">
					<i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#modal-task" onclick="initTaskForm(${i}); updateButton()"></i>
						<span class=""></span>
						<i class="bi bi-trash3" onclick="removeTask(${i})"></i>
					</div>
				</div>
				<div class="text-start ms-2 d-flex w-100 justify-content-between">
					<div>
						<div class="fw-bolder fs-5">${tasks[i].title}</div>
						<div class="">
							<div class="text-secondary ms-1">#${tasks[i].id} created in ${tasks[i].date}</div>
							<div class="task-description ms-1" title="${tasks[i].description}">${tasks[i].description}</div>
						</div>
					</div>
					<div class="d-flex flex-column justify-content-center align-items-end ms-2 w-25">
						<span class="priority-type bg-hex text-white p-1 mb-2 rounded-3 text-center">${tasks[i].priority}</span>
						<span class="priority-type border-2 border border-hex p-1 rounded-3  text-center">${tasks[i].type}</span>
					</div>
				</div>
				</button>
			`;
      inProgressCount.innerHTML++;
    } else if (tasks[i].status == "Done") {
      done.innerHTML += `
				<button class="task border-0 rounded mb-3 p-2 shadow-sm w-100 d-flex" style="background-color: #FAF7F0;">
				<div class="">
				<i class="bi bi-check-square fs-25px"></i>
				</div>
				<div class="edit-delete-container">
					<div class="edit-delete d-flex flex-column justify-content-between">
					<i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#modal-task" onclick="initTaskForm(${i}); updateButton()"></i>
						<span class=""></span>
						<i class="bi bi-trash3" onclick="removeTask(${i})"></i>
					</div>
				</div>
				<div class="text-start ms-2 d-flex w-100 justify-content-between">
					<div>
						<div class="fw-bolder fs-5">${tasks[i].title}</div>
						<div class="">
							<div class="text-secondary ms-1">#${tasks[i].id} created in ${tasks[i].date}</div>
							<div class="task-description ms-1" title="${tasks[i].description}">${tasks[i].description}</div>
						</div>
					</div>
					<div class="d-flex flex-column justify-content-center align-items-end ms-2 w-25">
						<span class="priority-type bg-hex text-white p-1 mb-2 rounded-3 text-center">${tasks[i].priority}</span>
						<span class="priority-type border-2 border border-hex p-1 rounded-3  text-center">${tasks[i].type}</span>
					</div>
				</div>
				</button>
			`;
      doneCount.innerHTML++;
    }
  }
}

function addTask() {
  let type;
  if (feature.checked) {
    type = feature.id;
  } else {
    type = bug.id;
  }

  tasks.push({
    id: tasks[tasks.length - 1].id + 1,
    title: taskTitle.value,
    type: type,
    priority: taskPriority.value,
    status: taskStatus.value,
    date: taskDate.value,
    description: taskDescription.value,
  });
  clearAllTasks();
  display();
  resetForm();
}

function removeTask(index) {
  tasks.splice(index, 1);
  clearAllTasks();
  display();
}

function editTask(index) {
  let type;
  if (feature.checked) {
    type = feature.id;
  } else {
    type = bug.id;
  }

  let taskTarget = {
    id: tasks[index].id,
    title: taskTitle.value,
    type: type,
    priority: taskPriority.value,
    status: taskStatus.value,
    date: taskDate.value,
    description: taskDescription.value,
  };

  tasks[index] = taskTarget;

  clearAllTasks();
  display();
}

function initTaskForm(index) {
  taskTitle.value = tasks[index].title;

  if (feature.checked) {
    feature.checked = true;
    bug.checked = false;
  } else {
    feature.checked = false;
    bug.checked = true;
  }

  taskPriority.value = tasks[index].priority;
  taskStatus.value = tasks[index].status;
  taskDate.value = tasks[index].date;
  taskDescription.value = tasks[index].description;

  temp = index;
}

function clearAllTasks() {
  let deleteTasks = document.querySelectorAll(".task");
  for (let t of deleteTasks) {
    t.remove();
    toDoCount.innerHTML = 0;
    inProgressCount.innerHTML = 0;
    doneCount.innerHTML = 0;
  }
}

function resetForm() {
  taskTitle.value = "";
  feature.checked = true;
  taskPriority.value = "Please select";
  taskStatus.value = "Please select";
  taskDate.value = "";
  taskDescription.value = "";
}

function addButton() {
  modalTitle.innerHTML = "Add task";
  resetForm();
  saveButton.style.display = "block";
  editButton.style.display = "none";
}

function updateButton() {
  modalTitle.innerHTML = "Edit task";
  saveButton.style.display = "none";
  editButton.style.display = "block";
}
