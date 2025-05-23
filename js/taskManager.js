import { saveTasks } from './storage.js'; 
import { loadTasks } from './storage.js'; 

let tasks = [];
const taskListElement = document.getElementById('taskList');

export function addTask(taskText) {
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks();
}

export function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== parseInt(taskId));
    saveTasks(tasks);
    renderTasks();
}

export function toggleComplete(taskId) {
    tasks = tasks.map(task =>
        task.id === parseInt(taskId) ? { ...task, completed: !task.completed } : task
    );
    saveTasks(tasks);
    renderTasks();
}

export function filterTasks(searchTerm) {
    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderTasks(filteredTasks);
}

function renderTasks(taskList = tasks) {
    taskListElement.innerHTML = '';
    taskList.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
            <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
            <button class="delete-btn" data-id="${task.id}">Delete</button>
        `;
        taskListElement.appendChild(listItem);
    });
}


tasks = loadTasks();
renderTasks();

// Event delegation for task list actions
taskListElement.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        toggleComplete(event.target.dataset.id);
    }
});

taskListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        deleteTask(event.target.dataset.id);
    }
});