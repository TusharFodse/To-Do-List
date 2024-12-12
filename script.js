
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;

        taskList.appendChild(taskItem);

        taskInput.value = '';

        taskItem.querySelector('.delete-button').addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
    }
}


addTaskButton.addEventListener('click', addTask);


taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
