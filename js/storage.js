const STORAGE_KEY = 'dailyTasks';

export function loadTasks() {
    try {
        const storedTasks = localStorage.getItem(STORAGE_KEY);
        if (storedTasks) {
            return JSON.parse(storedTasks);
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error loading tasks from localStorage:", error);
        return []; 
    }
}

export function saveTasks(tasks) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error("Error saving tasks to localStorage:", error);
    }
}