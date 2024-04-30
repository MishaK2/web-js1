// Get DOM elements
const itemCount = document.getElementById('item-count');
const uncheckedCount = document.getElementById('unchecked-count');
const newTodoBtn = document.querySelector('.btn-primary');
const todoList = document.getElementById('todo-list');

// Initialize counts
let totalCountValue = 3;
let uncheckedCountValue = 1;

// Function to update counts
function updateCounts() {
    itemCount.textContent = totalCountValue;
    uncheckedCount.textContent = uncheckedCountValue;
}

// Function to create new todo item
function createTodoItem(text) {
    // Create list item
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('form-check-input', 'me-2');

    // Create label
    const label = document.createElement('label');
    label.textContent = text;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'float-end');
    deleteBtn.textContent = 'delete';

    // Append elements to list item
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteBtn);

    return listItem;
}

// Event listener for New TODO button
newTodoBtn.addEventListener('click', function() {
    // Prompt for new todo text
    const newTodoText = prompt('Введіть нове завдання:');
    if (newTodoText) {
        // Create new todo item
        const newTodoItem = createTodoItem(newTodoText);
        
        // Append new todo item to todo list
        todoList.appendChild(newTodoItem);

        // Update counts
        totalCountValue++;
        uncheckedCountValue++;
        updateCounts();
    }
});

// Event delegation for delete buttons
todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-danger')) {
        // Remove list item
        event.target.parentElement.remove();

        // Update counts
        totalCountValue--;
        if (!event.target.previousSibling.checked) {
            uncheckedCountValue--;
        }
        updateCounts();
    }
});

// Event delegation for checkboxes
todoList.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
        if (event.target.checked) {
            uncheckedCountValue--;
        } else {
            uncheckedCountValue++;
        }
        updateCounts();
    }
});

// Initial update of counts
updateCounts();
