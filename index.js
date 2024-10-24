// To-Do Application Example

// Task object constructor
class Task {
    constructor(id, name, isCompleted = false) {
        this.id = id;
        this.name = name;
        this.isCompleted = isCompleted;
    }
}

// Global task list
let tasks = [];
let taskId = 0;

// Function to add a new task
function addTask(taskName) {
    if (taskName === "") {
        alert("Task name cannot be empty");
        return;
    }
    const newTask = new Task(taskId++, taskName);
    tasks.push(newTask);
    renderTasks();
}

// Function to delete a task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

// Function to toggle task completion
function toggleTaskCompletion(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.isCompleted = !task.isCompleted;
    }
    renderTasks();
}

// Function to filter tasks
function filterTasks(filterType) {
    let filteredTasks = [];
    switch (filterType) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.isCompleted);
            break;
        case 'pending':
            filteredTasks = tasks.filter(task => !task.isCompleted);
            break;
        default:
            filteredTasks = tasks;
    }
    renderTasks(filteredTasks);
}

// Function to render tasks to the UI
function renderTasks(taskList = tasks) {
    const taskContainer = document.getElementById("taskContainer");
    taskContainer.innerHTML = "";  // Clear existing tasks

    taskList.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        // Task checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.isCompleted;
        checkbox.addEventListener("click", () => toggleTaskCompletion(task.id));
        taskElement.appendChild(checkbox);

        // Task name
        const taskName = document.createElement("span");
        taskName.textContent = task.name;
        if (task.isCompleted) {
            taskName.classList.add("completed");
        }
        taskElement.appendChild(taskName);

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTask(task.id));
        taskElement.appendChild(deleteButton);

        // Append task to the container
        taskContainer.appendChild(taskElement);
    });
}

// Event listener for adding a task
document.getElementById("addTaskButton").addEventListener("click", () => {
    const taskNameInput = document.getElementById("taskInput").value;
    addTask(taskNameInput);
    document.getElementById("taskInput").value = "";  // Clear input field
});

// Event listener for filtering tasks
document.getElementById("filterTasks").addEventListener("change", (event) => {
    const filterType = event.target.value;
    filterTasks(filterType);
});

// Initial rendering
renderTasks();

// HTML structure in the DOM:
// <input type="text" id="taskInput" placeholder="Enter task name">
// <button id="addTaskButton">Add Task</button>
// <select id="filterTasks">
//     <option value="all">All</option>
//     <option value="completed">Completed</option>
//     <option value="pending">Pending</option>
// </select>
// <div id="taskContainer"></div>

// Styles for the tasks
const style = `
    .task { display: flex; align-items: center; justify-content: space-between; padding: 5px; }
    .completed { text-decoration: line-through; color: gray; }
    button { margin-left: 10px; }
`;
const styleElement = document.createElement('style');
styleElement.innerHTML = style;
document.head.appendChild(styleElement);

