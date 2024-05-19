const password = document.querySelector("#password");
const confo = document.querySelector("#confo");
const msg = document.querySelector("#confoMsg");

confo.addEventListener("focusout", checkSame);

function checkSame() {
    if (confo.value !== password.value) {
        msg.textContent = "Password and Confirmation don't match. Please try again.";
        msg.style.padding = "5px";
        confo.style.marginBottom = "2px";
        password.style.background = "pink";
        confo.style.background = "pink";
        confo.value = "";
        password.value = "";
        password.focus();
    }
    else {
        msg.textContent = "";
        msg.style.padding = "0px";
        confo.style.marginBottom = "1rem";
        password.style.background = "white";
        confo.style.background = "white";
    }
}

const range = document.querySelector("#range");
const rating = document.querySelector("#rating");

range.addEventListener("change", displayRating);
range.addEventListener("input", displayRating);

function displayRating() {
    rating.innerHTML = range.value;
}
