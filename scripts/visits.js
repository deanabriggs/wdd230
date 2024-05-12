// target the document location for the visits
const visits = document.querySelector(".visits");

// get VALUE for the "numVisits-Is" KEY if it exists. If missing, assign 0 to numVisits variable
let numVisits = Number(window.localStorage.getItem("numVisits-Is")) || 0;

if (numVisits !== 0) {
    visits.textContent = numVisits;
}
else {
    visits.textContent = "This is your 1st visit!";
}

// add to the number of visits to be stored
numVisits++;

// set the new VALUE of the local storage, create if not there
localStorage.setItem("numVisits-Is", numVisits);