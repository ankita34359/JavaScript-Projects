// Selecting HTML elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Adding event listener to the add button
addBtn.addEventListener('click', addTodo);

// Function to add a new Todo
function addTodo() {
  // Get the value of the todo input
  const todoText = todoInput.value.trim(); // Trim to remove leading/trailing spaces

  // Ensure input is not empty
  if (todoText === '') {
    alert("Please enter a task");
    return;
  }

  // Create a new list item
  const listItem = document.createElement('li');

  // Add the todo text to the list item
  listItem.innerText = todoText;

  // Create Delete Button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add('delete-btn'); // Add a class for styling
  deleteBtn.addEventListener('click', deleteTodo);

  // Create Edit Button
  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.classList.add('edit-btn'); // Add a class for styling
  editBtn.addEventListener('click', editTodo);

  // Add buttons to the list item
  listItem.appendChild(editBtn);
  listItem.appendChild(deleteBtn);

  // Append the list item element to the todo list
  todoList.appendChild(listItem);

  // Clear the input field
  todoInput.value = '';
}

// Function to delete a todo
function deleteTodo(event) {
  const listItem = event.target.parentElement;
  todoList.removeChild(listItem);
}

// Function to edit a todo
function editTodo(event) {
  const listItem = event.target.parentElement;
  const newTodo = prompt("Update the task:", listItem.firstChild.nodeValue);
  
  if (newTodo !== null && newTodo.trim() !== '') {
    listItem.firstChild.nodeValue = newTodo.trim(); // Update only if non-empty
  }
}
