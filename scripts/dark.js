const modeBtn = document.querySelector("#drkMode");
const body = document.querySelector("body");
const title = document.querySelector("h1");
const cards = document.querySelectorAll(".card");
const footer = document.querySelector("footer");

modeBtn.addEventListener("click", () => {
    if (modeBtn.textContent.includes("🕶️")) {
        body.style.background = "black";
        title.style.color = "white";
        title.style.borderBottomColor = "white";
        cards.forEach(function (card) {
            card.style.background = "var(--light-neutral)";
            card.style.boxShadow = "3px 3px 8px var(--medium-neutral)";
        });
        modeBtn.textContent = "💡";
        modeBtn.style.background = "transparent";
        modeBtn.style.border = "none";
    } else {
        body.style.background = "var(--light-neutral)";
        body.style.color = "black";
        title.style.color = "black";
        title.style.borderBottomColor = "black";
        cards.forEach(function (card) {
            card.style.background = "white";
            card.style.boxShadow = "5px 5px 10px var(--dark-neutral)";
        });
        modeBtn.textContent = "🕶️";
        modeBtn.style.background = "var(--light-neutral)";
        modeBtn.style.border = "1px solid black";
    }
})