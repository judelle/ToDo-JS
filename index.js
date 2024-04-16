// // это массив обьектов, тут именно обьекты для того чтобы если бы была еще инфа, то чтобы она относилась только к 1 элемнту, потому что если бы был
// // просто массив то это хуйня, ты бы хуй понял какой десриптион к какому таску щас покажу на примере
// // let test = [
// //     {id: 1, title: 'TEST 1'},
// //     {id: 2, title: 'TEST 2'},
// //     {id: 3, title: 'TEST 3'},
// //     {id: 4, title: 'TEST 4'},
// // ]
// // рендеринг задач (берется массив test и ренедерит каждую задачу)
// function loadTasks() {
//     test.forEach(t => {
//         // создаем элемент h1
//         let h1 = document.createElement("h1")
//         // добавляем в элемент в его контент title задач
//         h1.textContent = t.title
//         // добавляем задачу в боди, если родительский элемент другой, то можно и в другой добавить
//         document.querySelector("body").appendChild(h1)
//     })
// }
// // чистим массив чтобы красиво добавлять задачи
// function clearAll() {
//     test = []
// }
// // добавление задачи
// function addTask() {
//     // инициализируем наш инпут, тут я его беру по тегу, но лучше по id или классу, главнео что-то что индивидуально у него
//     let input = document.querySelector('input')
//     console.log(Math.floor(Math.random()*16777215).toString(16));
//     if(input.value) {
//         // чиста задач чтобы текст не накладывался, можешь убрать потом эту функцию и поймешь зачем она во vue такое не нужно
//         clearAll()
//         // тут мы пушим в массив задач значение нашего инпута + id который равен длине массива +1
//         test.push({
//             id: test.length + 1,
//             title: input.value,
//         })
//         // тут мы для красоты опустошаем занчение инпута
//         input.value = ''
//         // и опять запускаем рендер
//         loadTasks()
//     } else {
//         alert('Введите название задачи')
//     }
// }



// // а тут мы выполняем скрипт ренедера при загрузке страницы, если убрать это, то задачи будут появлятся на странице только при нажатии на кнопку
// document.addEventListener('DOMContentLoaded', () => {
//     loadTasks()
// })

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
    // Удалите все дочерние элементы taskList
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
let done = [];

