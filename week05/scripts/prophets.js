// Assign JSON source to a variable "url"
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

// Assign the HTML document location to a variable
const cards = document.querySelector("#cards");

// Create an async defined function to fetch data from JSON source using await fatch() method
async function getProphetData() {
    // stores the response from fetch() method into a const variable
    const response = await fetch(url);
    // convertsthe response to a JSON object using .json method and stores result to a const variable
    const data = await response.json();

    // creates a console window to check the data respons, organizing the ARRAY of data into a table
    // console.table(data.prophets);

    // targets the VALUES of the KEY "prophets" in the data (all data is within the key "prophets")
    // Should return a single property, the array of the KEY/VALUE pair in the JSON file (an array of objects named prophets - data alone would give the key/value pair)
    displayProphets(data.prophets);
}

// Calls the function to test the fetch and response (use DevTools to view console data)
getProphetData();

// Define a function EXPRESSION that using arrow expression to contain statements that will process the parameter value of build a card for each prophet
// accepts an ARRAY of data (from the JSON file) and formats it to the document
const displayProphets = (prophets) => {
    // build a card for each prophet
    prophets.forEach((prophet) => {
        // create elements to add to the document div.cards element
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");

        // build the content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // build the image portrait by setting all the relevant attributes
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        // append the h2 and img for each card, to "section" for each individual card with the created elements
        card.appendChild(fullName);
        card.appendChild(portrait);

        // add the cards to the documents
        cards.appendChild(card);

        // append the collective cards to the 
        cards.appendChild(card);
    });
}


