// ==== FILTER BUTTONS ==== //
const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach((card) => {
      const hasTasks = card.querySelector(".task-list li") !== null;
      if (filter === "all") {
        card.style.display = "block";
      } else if (filter === "withTasks") {
        card.style.display = hasTasks ? "block" : "none";
      }
    });
  });
});

// ==== MODAL ELEMENTS ==== //
const modal = document.querySelector(".modal");
const modalDay = document.getElementById("modal-day");
const modalTaskList = document.getElementById("modal-task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task");
const saveBtn = document.getElementById("save-tasks");
const closeBtn = document.getElementById("close-modal");

let currentCard = null;
let tempTasks = [];

// ==== OPEN MODAL ==== //
document.querySelectorAll(".edit-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentCard = btn.closest(".card");
    modalDay.textContent = `Edit ${currentCard.dataset.day} Tasks`;

    // Load current tasks from card
    tempTasks = Array.from(currentCard.querySelectorAll(".task-list li")).map(
      (li) => li.textContent
    );

    renderModalTasks();
    modal.classList.remove("hidden");
  });
});

// ==== ADD TASK IN MODAL ==== //
addTaskBtn.addEventListener("click", () => {
  if (newTaskInput.value.trim() !== "") {
    tempTasks.push(newTaskInput.value.trim());
    newTaskInput.value = "";
    renderModalTasks();
  }
});

// ==== RENDER TASKS INSIDE MODAL ==== //
function renderModalTasks() {
  modalTaskList.innerHTML = "";
  tempTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "×";
    delBtn.style.marginLeft = "0.5rem";
    delBtn.style.color = "#f55";
    delBtn.style.background = "none";
    delBtn.style.border = "none";
    delBtn.style.cursor = "pointer";

    delBtn.onclick = () => {
      tempTasks.splice(index, 1);
      renderModalTasks();
    };

    li.appendChild(delBtn);
    modalTaskList.appendChild(li);
  });
}

// ==== SAVE TASKS BACK TO CARD ==== //
saveBtn.addEventListener("click", () => {
  const ul = currentCard.querySelector(".task-list");
  ul.innerHTML = "";
  tempTasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    ul.appendChild(li);
  });
  modal.classList.add("hidden");
});

// ==== CLOSE MODAL ==== //
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// ==== CLEAR ALL TASKS (per day) ==== //
document.querySelectorAll(".clear-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const ul = btn.closest(".card").querySelector(".task-list");
    ul.innerHTML = "";
  });
});
