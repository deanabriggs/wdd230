const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener("click", () => {
    if (input != "") {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.innerHTML = item;
    deleteButton.textContent = "❌";

    deleteButton.style.border = "none";
    deleteButton.style.backgroundColor = "transparent";
    deleteButton.ariaLabel = "Remove";

    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chapterArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter((item) => item !== chapter);
    setChapterList();
}