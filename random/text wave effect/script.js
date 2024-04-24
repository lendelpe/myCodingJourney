iconst taskList = document.querySelector(".task-list");

function enterKey(event) {
	if (event.key == "Enter") {
		addTodo();
	}
}

loadTodo();
function loadTodo() {
	const taskStorage = localStorage.getItem("taskStorage");
	if (taskStorage != null) {
		taskList.insertAdjacentHTML("beforeend", taskStorage);
		countPendingTasks();
	}
}

function addTodo() {
  const inputTodo = document.getElementById("inputTodo")

  if (inputTodo.value != "") {
    const element = `
    <div class="task">
    <button onclick="checkBtn(this)" class="check-btn">
    <i class="bx bx-check"></i>
    </button>
    <span onclick="checkBtn(this)">${inputTodo.value}</span>
  <button onclick="deleteBtn(this)" class="delete-btn">
  <i class="bx bx-trash"></i></button>
  </div>
`;
taskList.insertAdjacentHTML('afterbegin', element)

saveTodo();
countPendingTasks()

inputTodo.value = ""
  } else {
    alert("Please enter a task!")
  }
}

function checkBtn(element) {
  const task = element.parentElement;

  task.classList.toggle("true")

  saveTodo();
  countPendingTasks()
}

function deleteBtn(element) {
  const task = element.parentElement;

  task.remove();

  saveTodo();
  countPendingTasks();
}

function countPendingTasks() {
  const countPendingTasks = document.getElementById("countPendingTasks")
  countPendingTasks.textContent = document.querySelectorAll(".task:bot(.true)").length;
}

function clearAll() {
  if (confirm("clear all tasks?")) {
    taskList.innerHTML = "";
    saveTodo();
    countPendingTasks();
  }
}

function saveTodo() {
  localStorage.setItem("taskStorage", taskList.innerHTML)
}