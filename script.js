const itemCount = document.getElementById('item-count');
const uncheckedCount = document.getElementById('unchecked-count');
const newTodoBtn = document.querySelector('.btn-primary');
const todoList = document.getElementById('todo-list');

let totalCountValue = 3;
let uncheckedCountValue = 1;

function updateCounts() {
    itemCount.textContent = totalCountValue;
    uncheckedCount.textContent = uncheckedCountValue;
}

function createTodoItem(text) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('form-check-input', 'me-2');

    const label = document.createElement('label');
    label.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'float-end');
    deleteBtn.textContent = 'delete';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteBtn);

    return listItem;
}

newTodoBtn.addEventListener('click', function() {
    // Prompt for new todo text
    const newTodoText = prompt('Введіть нове завдання:');
    if (newTodoText) {
        const newTodoItem = createTodoItem(newTodoText);
        
        todoList.appendChild(newTodoItem);
        totalCountValue++;
        uncheckedCountValue++;
        updateCounts();
    }
});

todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-danger')) {
        event.target.parentElement.remove();

        totalCountValue--;
        if (!event.target.previousSibling.checked) {
            uncheckedCountValue--;
        }
        updateCounts();
    }
});

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
