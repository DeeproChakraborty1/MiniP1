import { addTask, filterTasks } from './taskManager.js';
import { debounce, throttle } from './utils.js';

const addTaskForm = document.getElementById('addTaskForm');
const newTaskInput = document.getElementById('newTask');
const searchInput = document.getElementById('search');
const backToTopBtn = document.getElementById('backToTopBtn');

addTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        newTaskInput.value = '';
    }
});

searchInput.addEventListener('input', debounce((event) => {
    filterTasks(event.target.value);
}, 300));


window.addEventListener('scroll', throttle(() => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
}, 200));

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});