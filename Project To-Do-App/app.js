
const todoForm = document.querySelector('.todo-form');

const todoInput = document.querySelector('.todo-input');

const todoItemsList = document.querySelector('.todo-items');


let todos = [];


todoForm.addEventListener('submit', function(event) {
  
  event.preventDefault();
  addTodo(todoInput.value); 
});


function addTodo(item) {
  
  if (item !== '') {
    
    const todo = {
      id: Date.now(),
      name: item,
      completed: false
    };

    
    todos.push(todo);
    addToLocalStorage(todos); 

    
    todoInput.value = '';
  }
}


function printTodos(todos) {
  
  todoItemsList.innerHTML = '';

  
  todos.forEach(function(item) {
    
    const checked = item.completed ? 'checked': null;

    
    
    const li = document.createElement('li');
    
    li.setAttribute('class', 'item');
    
    li.setAttribute('data-key', item.id);
   
    
    if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" id="itm" ${checked}>

        <label for="itm" class="task-name">${item.name}
        
        </label> 

        <img src= "https://img.icons8.com/plasticine/100/000000/filled-trash.png" class="delete-button" />
        
    `;
    
    todoItemsList.append(li);
  });

}


function addToLocalStorage(todos) {
  
  localStorage.setItem('todos', JSON.stringify(todos));
  
  printTodos(todos);
}


function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  
  if (reference) {
    
    todos = JSON.parse(reference);
    printTodos(todos);
  }
}


function toggle(id) {
  todos.forEach(function(item) {
    
    if (item.id == id) {
      
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}


function deleteTodo(id) {
  
  todos = todos.filter(function(item) {
    
    return item.id != id;
  });

  
  addToLocalStorage(todos);
}


getFromLocalStorage();


todoItemsList.addEventListener('click', function(event) {
  
  if (event.target.type === 'checkbox') {
    
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  
  if (event.target.classList.contains('delete-button')) {
    
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});