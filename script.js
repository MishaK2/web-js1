let todos = [
    { id: 1, title: 'Вивчити HTML', completed: true },
    { id: 2, title: 'Вивчити CSS', completed: true },
    { id: 3, title: 'Вивчити JavaScript', completed: false }
  ];
  
  function newTodo() {
    const title = prompt("Введіть нову справу:");
    if (title) {
      const newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false
      };
      todos.push(newTodo);
      render();
      updateCounter();
    }
  }
  
  function renderTodo(todo) {
    return `
      <li class="list-group-item">
        <input type="checkbox" class="form-check-input me-2" id="${todo.id}" ${todo.completed ? 'checked' : ''} onchange="checkTodo(${todo.id})">
        <label for="${todo.id}" class="${todo.completed ? 'text-success text-decoration-line-through' : ''}">${todo.title}</label>
        <button class="btn btn-danger btn-sm float-end" onclick="deleteTodo(${todo.id})">delete</button>
      </li>
    `;
  }
  
  function render() {
    const todoList = document.getElementById('todo-list');
    const todoHTML = todos.map(todo => renderTodo(todo)).join('');
    todoList.innerHTML = todoHTML;
  }
  
  function updateCounter() {
    const itemCount = todos.length;
    const uncheckedCount = todos.filter(todo => !todo.completed).length;
    document.getElementById('item-count').innerText = itemCount;
    document.getElementById('unchecked-count').innerText = uncheckedCount;
  }
  
  function deleteTodo(todoId) {
    todos = todos.filter(todo => todo.id !== todoId);
    render();
    updateCounter();
  }
  
  function checkTodo(todoId) {
    const todo = todos.find(todo => todo.id === todoId);
    todo.completed = !todo.completed;
    render();
    updateCounter();
  }
  
  render();
  updateCounter();
  
