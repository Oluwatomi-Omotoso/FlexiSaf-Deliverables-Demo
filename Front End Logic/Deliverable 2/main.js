const bookList = document.getElementById("bookList");

function addBook() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const isbn = document.getElementById("isbn").value.trim();

  if (!title || !author || !isbn) {
    alert("⚠️ Please fill in all fields");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
        <span><strong>${title}</strong> by ${author} (ISBN: ${isbn})</span>
        <button class="remove-btn" onclick="removeBook(this)">Remove</button>
      `;

  bookList.appendChild(li);
  clearFields();
}

function removeBook(button) {
  button.parentElement.remove();
}

function clearFields() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}
