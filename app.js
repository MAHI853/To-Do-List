function addTask() {
    const todoInput = document.getElementById('todoInput');
    const taskText = todoInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const todoList = document.getElementById('todoList');

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        todoList.removeChild(listItem);
    };

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    todoList.appendChild(listItem);

    todoInput.value = '';
}