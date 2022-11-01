const modalTitle = document.getElementById("modal-title");
const saveButton = document.getElementById("saveButton");
const editButton = document.getElementById("editButton");

function addButton(){
    modalTitle.innerHTML = "Add task";
    saveButton.style.display = "block";
    editButton.style.display = "none";

    document.getElementById("form-task").reset();
}

function updateButton(id, title, type, priority, status, date, description){
    modalTitle.innerHTML = "Edit task";
    saveButton.style.display = "none";
    editButton.style.display = "block";

    document.getElementById("task-id").value=id;
    document.getElementById("task-title").value = title;
    document.getElementById("task_priority").value = priority;
    document.getElementById("task_status").value = status;
    document.getElementById("task-date").value = date;
    document.getElementById("task-description").value = description;
    if(type == 1) document.getElementById("Feature").checked = true;
    else document.getElementById("Bug").checked = true;
}