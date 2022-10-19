import { tasks } from "./data.js";

const toDo = document.getElementById("to-do-tasks");
const inProgress = document.getElementById("in-progress-tasks");
const done = document.getElementById("done-tasks");
const modal = document.getElementById("modal-task")

for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].status == 'To Do') {
    toDo.innerHTML += `
        <button class="border-0 rounded mb-3 p-2 shadow-sm w-100 d-flex" style="background-color: #FAF7F0;">
		<div class="">
			<i class="bi bi-square fs-25px"></i>
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
  }
  else if(tasks[i].status == 'In Progress'){
    inProgress.innerHTML += `
        <button class="border-0 rounded mb-3 p-2 shadow-sm w-100 d-flex" style="background-color: #FAF7F0;">
		<div class="">
            <i class="bi bi-clock-history fs-25px"></i>
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
  }
  else if(tasks[i].status == 'Done'){
    done.innerHTML += `
        <button class="border-0 rounded mb-3 p-2 shadow-sm w-100 d-flex" style="background-color: #FAF7F0;">
		<div class="">
        <i class="bi bi-check-lg fs-25px"></i>
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
  }
}

modal.addEventListener('submit', (e) => {
    e.preventDefault();
});

let data = {};

function acceptData = () => {
    data["task"] = 
};
