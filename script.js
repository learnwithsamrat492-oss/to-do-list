document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const list = document.getElementById("todo-list");

  addBtn.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      li.addEventListener("click", function () {
        li.remove();
      });

      list.appendChild(li);
      input.value = "";
    } else {
      alert("Please enter a task.");
    }
  });
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addBtn.click();
    }
  });
  
});
