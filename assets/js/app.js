const modalTitle = document.getElementById("modal-title");
const saveButton = document.getElementById("saveButton");
const editButton = document.getElementById("editButton");

function addButton(){
    modalTitle.innerHTML = "Add task";
    saveButton.style.display = "block";
    editButton.style.display = "none";

    document.getElementById("form-task").reset();
}

function updateButton(id){
    modalTitle.innerHTML = "Edit task";
    saveButton.style.display = "none";
    editButton.style.display = "block";

    document.getElementById("task-id").value=id;
    let title = document.getElementById(id+"title").getAttribute("data");
    let type = document.getElementById(id+"type").getAttribute("data");
    let priority = document.getElementById(id+"priority").getAttribute("data");
    let status = document.getElementById(id+"status").getAttribute("data");
    let date = document.getElementById(id+"date").getAttribute("data");
    let description = document.getElementById(id+"description").getAttribute("data");
    
    document.getElementById("task-title").value = title;
    document.getElementById("task_priority").value = priority;
    document.getElementById("task_status").value = status;
    document.getElementById("task-date").value = date;
    document.getElementById("task-description").value = description;
    if(type == 1){
        document.getElementById("Feature").checked = true;
    }else{
        document.getElementById("Bug").checked = true;
    }
}