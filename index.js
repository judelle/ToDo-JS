const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value;
  
    if (!task) return;
  
    const taskList = document.getElementById("taskList");
  
    const newTask = document.createElement("div");
    newTask.classList.add("task");
  
    const taskText = document.createElement("div");
    taskText.classList.add("task-text");
    taskText.innerHTML = task;
  
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("new"); 
    deleteButton.onclick = () => {
      taskList.removeChild(newTask);
      updateTaskCount();
    };
    
    
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
  
    taskInput.value = "";
    updateTaskCount();
  };

const clearAll = () => {
    const taskList = document.getElementById("taskList");
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    updateTaskCount();
};


function updateTaskCount() {
  const taskCount = document.querySelectorAll('.task').length;
  const taskCountElement = document.getElementById('taskCount');
  taskCountElement.textContent = `${taskCount} tasks left`;
}

