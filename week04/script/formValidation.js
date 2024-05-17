let password = document.querySelector("#password");
let confo = document.querySelector("#confo");
let msg = document.querySelector("#confo-msg");

confo.addEventListener("focusout", checkSame);
confo.addEventListener("focus", checkMsg);

function checkSame() {
    if (confo != password) {
        msg.textContent = "Confirmation doesn't match your password. Please try again.";
        confo.value = "";
        password.value = "";
        password.focus();
    }
}

function clearMsg() {
    msg.textContent = "";
}