class Task {
    constructor(name, description, deadline, done = false) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.done = done;
    }
}

let tasks = [];

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const tasksJSON = localStorage.getItem('tasks');
    if (tasksJSON) {
        tasks = JSON.parse(tasksJSON).map(task => new Task(task.name, task.description, task.deadline, task.done));
    }
}

function tableFromArray(array) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    const headers = ['Name', 'Description', 'Deadline', 'Mark as done', 'Remove'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    array.forEach(task => {
        const row = document.createElement('tr');
        if (task.done) {
            row.style.backgroundColor = 'green';
        }
        Object.values(task).forEach(text => {
            if (typeof text === 'boolean') {
                const cell = document.createElement('td');
                const button = document.createElement('button');
                button.textContent = 'Done/Undone';
                button.onclick = markAsDone.bind(null, task.name);
                cell.appendChild(button);
                row.appendChild(cell);
                return;
            } else {
                const cell = document.createElement('td');
                cell.textContent = text;
                row.appendChild(cell);
            }
        });

        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = removeTask.bind(null, task.name);
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);

        table.appendChild(row);
    });

    return table;
}

async function addTask() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const deadline = document.getElementById('deadline').value;

    if (!name || !description || !deadline) {
        alert('All fields are required!');
        return;
    }

    tasks.push(new Task(name, description, deadline));
    document.getElementById('task-table').innerHTML = '';
    document.getElementById('task-table').appendChild(tableFromArray(tasks));
    saveTasksToLocalStorage();
}

function removeTask(taskName) {
    tasks = tasks.filter(task => task.name !== taskName);
    saveTasksToLocalStorage();
    document.getElementById('task-table').innerHTML = '';
    document.getElementById('task-table').appendChild(tableFromArray(tasks));
}

async function markAsDone(taskName) {
    const task = tasks.find(task => task.name === taskName);
    task.done = !task.done; // Toggle the done property
    saveTasksToLocalStorage();
    document.getElementById('task-table').innerHTML = '';
    document.getElementById('task-table').appendChild(tableFromArray(tasks));
}

document.addEventListener('DOMContentLoaded', async () => {
    loadTasksFromLocalStorage();
    const tableContainer = document.getElementById('task-table');
    const table = tableFromArray(tasks);
    tableContainer.appendChild(table);
});