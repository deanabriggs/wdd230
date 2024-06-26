const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value != "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.innerHTML = input.value;
        deleteButton.textContent = "❌";

        deleteButton.style.border = "none";
        deleteButton.style.backgroundColor = "transparent";
        deleteButton.ariaLabel = "Remove";

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            input.value = "";
            input.focus();
        })
    }
});