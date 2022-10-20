import { tasks } from "./data.js";

const toDo = document.getElementById("to-do-tasks");
const inProgress = document.getElementById("in-progress-tasks");
const done = document.getElementById("done-tasks");
const modal = document.getElementById("modal-task");

const taskTitle = document.getElementById("task-title");
const feature = document.getElementById("Feature");
const bug = document.getElementById("Bug");
const taskPriority = document.getElementById("task_priority");
const taskStatus = document.getElementById("task_status");
const taskDate = document.getElementById("task-date");
const taskDescription = document.getElementById("task-description");

var toDoCount = document.getElementById("to-do-tasks-count");
var inProgressCount = document.getElementById("in-progress-tasks-count");
var doneCount = document.getElementById("done-tasks-count");

display();

modal.addEventListener('submit', (e) => {
    e.preventDefault();
	addTask();
});

function display(){
	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i].status == 'To Do') {
			toDo.innerHTML += `
				<button class="task border-0 rounded mb-3 p-2 shadow-sm w-100 d-flex">
				<div class="">
					<i class="bi bi-square fs-25px"></i>
				</div>
				<div class="edit-delete-container">
					<div class="edit-delete d-flex flex-column justify-content-between">
						<i class="bi bi-pencil-square"></i>
						<span class=""></span>
						<i class="bi bi-trash3"></i>
					</div>
				</div>
				<div class="text-start ms-2 d-flex w-100 justify-content-between">
					<div>
						<div class="fw-bolder fs-5">${tasks[i].title}</div>
						<div class="">
							<div class="text-secondary ms-1">#${i+1} created in ${tasks[i].date}</div>
							<div class="description ms-1" title="${tasks[i].description}">${tasks[i].description}</div>
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
		}
		else if(tasks[i].status == 'In Progress'){
			inProgress.innerHTML += `
				<button class="task border-0 rounded mb-3 p-2 shadow-sm w-100 d-flex" style="background-color: #FAF7F0;">
				<div class="">
					<i class="bi bi-clock-history fs-25px"></i>
				</div>
				<div class="edit-delete-container">
					<div class="edit-delete d-flex flex-column justify-content-between">
						<i class="bi bi-pencil-square"></i>
						<span class=""></span>
						<i class="bi bi-trash3"></i>
					</div>
				</div>
				<div class="text-start ms-2 d-flex w-100 justify-content-between">
					<div>
						<div class="fw-bolder fs-5">${tasks[i].title}</div>
						<div class="">
							<div class="text-secondary ms-1">#${i+1} created in ${tasks[i].date}</div>
							<div class="description ms-1" title="${tasks[i].description}">${tasks[i].description}</div>
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
		}
		else if(tasks[i].status == 'Done'){
			done.innerHTML += `
				<button class="task border-0 rounded mb-3 p-2 shadow-sm w-100 d-flex" style="background-color: #FAF7F0;">
				<div class="">
				<i class="bi bi-check-lg fs-25px"></i>
				</div>
				<div class="edit-delete-container">
					<div class="edit-delete d-flex flex-column justify-content-between">
						<i class="bi bi-pencil-square"></i>
						<span class=""></span>
						<i class="bi bi-trash3"></i>
					</div>
				</div>
				<div class="text-start ms-2 d-flex w-100 justify-content-between">
					<div>
						<div class="fw-bolder fs-5">${tasks[i].title}</div>
						<div class="">
							<div class="text-secondary ms-1">#${i+1} created in ${tasks[i].date}</div>
							<div class="description ms-1" title="${tasks[i].description}">${tasks[i].description}</div>
						</div>
					</div>
					<div class="d-flex flex-column justify-content-center align-items-end ms-2 w-25">
						<span class="priority-type bg-hex text-white p-1 mb-2 rounded-3 text-center">${tasks[i].priority}</span>
						<span class="priority-type border-2 border border-hex p-1 rounded-3  text-center">${tasks[i].type}</span>
					</div>
				</div>
				</button>
			`;
			doneCount.innerHTML++
		}
	}
}

function clearAllTasks(){
	let deleteTasks = document.querySelectorAll(".task");
	for(let t of deleteTasks){
		t.remove();
		toDoCount.innerHTML=0;
		inProgressCount.innerHTML=0;
		doneCount.innerHTML=0;
	}
}

function addTask(){
	
	var type;

	if(feature.checked){
    	type = feature.id;
	}
	else{
		type = bug.id;
	}
	
	tasks.push(
		{
			'id'            :   tasks.length+1,
			'title'         :   taskTitle.value,
			'type'          :   type,
			'priority'      :   taskPriority.value,
			'status'        :   taskStatus.value,
			'date'          :   taskDate.value,
			'description'   :   taskDescription.value,
		}
	);
	clearAllTasks();
	display();
	resetForm();
}

function resetForm(){
	taskTitle.value = "";
	feature.checked;
	taskPriority = "";
	taskStatus = "";
	taskDate = "";
	taskDescription = "";
}
