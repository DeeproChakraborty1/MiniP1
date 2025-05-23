# DailyFi

## Deployed Link - https://voluble-tiramisu-207391.netlify.app/

## Project Setup

1.  Clone this repository to your local machine.
2.  Open the `index.html` file in your web browser. No specific build steps are required as it's a client-side application.

## Build Commands

This project does not require any specific build commands. Simply open the `index.html` file in a web browser to run the application.

## Functionalities

This simple task planner allows users to manage their daily tasks with the following core features:

* **Header:** Displays the application title "DailyFi-The Daily Planner"
* **Add Task Form:**
    * An input field to enter new tasks.
    * An "Add" button to submit and add the task to the list.
* **Task List:**
    * Displays a list of added tasks.
    * Each task has a checkbox to mark it as complete (visualized with strikethrough).
    * Each task has a "Delete" button to remove it from the list.
* **Search Bar:**
    * An input field to filter tasks in real-time as the user types (using debouncing for performance).
* **Persistent Storage:**
    * Tasks are saved in the browser's `localStorage` so they persist even after the browser is closed or refreshed.

### Stretch Goals Implemented:

* **Back to Top Button:** A "Back to Top" button appears at the bottom right of the screen when the user scrolls down (throttled scroll event for performance). Clicking this button smoothly scrolls the user back to the top of the page.
* **Modular JavaScript:** The JavaScript code is organized into ES6 modules (`app.js`, `taskManager.js`, `storage.js`, `utils.js`) for better organization and maintainability.

## Further Improvements (Potential Stretch Goals Not Implemented):

* Adding basic categories or tags to tasks.
* Implementing an optional "Clear All Tasks" button.
