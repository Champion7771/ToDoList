const toDolist = [];

function renderTodoList() {
    let toDolistHTML = '';

    toDolist.forEach((toDOobject, index) => {
        const {name, dueDate} = toDOobject;
        const html = `
        <div>${name}</div> 
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>`;
        toDolistHTML += html;
    });


    document.querySelector('.js-toDolist')
    .innerHTML = toDolistHTML;

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            toDolist.splice(index, 1);
            renderTodoList();
        });
    });
} 

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
});

function addTodo() {
    
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    toDolist.push({
        name,                 // short hand property
        dueDate
    });
    
    inputElement.value = '';

    renderTodoList();
}