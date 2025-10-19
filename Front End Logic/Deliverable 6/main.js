// --- "Outer class" equivalent ---
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  // "Private inner class" equivalent
  createTask(description) {
    const task = {
      description,
      completed: false,
      markComplete: () => {
        task.completed = true;
        this.logAction(() => {
          Logger.log(`Task '${task.description}' marked as complete.`);
        });
      },
    };
    this.tasks.push(task);
    Logger.log(`Created task: ${task.description}`);
    return task;
  }

  // "Interface action" equivalent (function callback)
  logAction(action) {
    action();
    Logger.log("Action executed.");
  }
}

// --- "Static nested class" equivalent ---
class Logger {
  static log(message) {
    console.log(`[LOG] ${message}`);
    const li = document.createElement("li");
    li.textContent = message;
    document.getElementById("logList").appendChild(li);
  }
}

// --- UI handling ---
const manager = new TaskManager();
const tasksDiv = document.getElementById("tasks");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");

function renderTask(task) {
  const div = document.createElement("div");
  div.className = "task";
  div.innerHTML = `
        <span class="${task.completed ? "completed" : ""}">
          ${task.description}
        </span>
        <button ${task.completed ? "disabled" : ""}>${
    task.completed ? "Done" : "Complete"
  }</button>
      `;

  const btn = div.querySelector("button");
  btn.addEventListener("click", () => {
    task.markComplete();
    div.querySelector("span").classList.add("completed");
    btn.textContent = "Done";
    btn.disabled = true;
  });

  tasksDiv.appendChild(div);
}

addTaskBtn.addEventListener("click", () => {
  const desc = taskInput.value.trim();
  if (!desc) return alert("Enter a task description.");
  const task = manager.createTask(desc);
  renderTask(task);
  taskInput.value = "";
});
