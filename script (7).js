// Select elements from the DOM
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item for the task
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;

        // Append the new task item to the list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';

        // Add event listener to the delete button
        taskItem.querySelector('.delete-button').addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
    }
}

// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Optionally, add event listener to handle the Enter key
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
