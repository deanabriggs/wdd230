const docInput = document.querySelector("#favchap");
const docButton = document.querySelector("button");
const docList = document.querySelector("#list");


docButton.addEventListener("click", () => {
    if (docInput.value == "") {
        docInput.focus()
    }
    else {
        const newLi = document.createElement("li");
        newLi.innerText = docInput;
        docList.appendChild(newLi);        
    }
});


const deleteButton = document.createElement("button");


