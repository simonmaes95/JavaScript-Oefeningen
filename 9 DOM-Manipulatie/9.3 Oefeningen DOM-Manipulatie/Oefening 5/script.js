let removeItemButton = document.getElementById('remove-item');
let todoList = document.getElementById('todo-list');

if (removeItemButton && todoList) {
    removeItemButton.addEventListener('click', () => {
        if (todoList.children.length > 0) {
            todoList.removeChild(todoList.lastElementChild);
        }
    });
}