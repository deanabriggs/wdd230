const baseURL = "https://deanabriggs.github.io/wdd230/chamber/";
const membersURL = "https://deanabriggs.github.io/wdd230/chamber/data/members.json";
const spotlight = document.querySelector("#spotlight");

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayMembers(data.members);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayMembers = (members) => {
    // create elements that for document
    const gold = document.createElement("div");
    const silver = document.createElement("div");

    // set class attributes for the document elements
    gold.className, "gold";
    silver.className, "silver";

    // create lists for valid members based on type
    const golds = [];
    const silvers = [];

    let i = 0;
    members.forEach(member => {

        if (member.membership == "gold") {
            golds.add(i);
            i++;
        }
        else if (member.membership == "silver") {
            silvers.add(i);
            i++;
        }
        i++;
    });

    // pull a random index number with the correct criteria
    const randomGold = Math.floor(Math.random(golds));
    const randomSilver = Math.floor(Math.random(silvers));
    console.log(golds);
    console.log(randomGold);

    // create document elements for each card
    const goldBus = document.createElement("h3");
    const goldLogo = document.createElement("img");
    const goldWeb = document.createElement("a");
    const goldAdv = document.createElement("p");

    // set element properties & values
    goldBus.textContent = member.business;
    goldWeb.setAttribute("href", member.website);
    goldWeb.textContent = "website";

    // define logo image attributes
    logo.setAttribute("src", member.logo.url);
    logo.setAttribute("alt", `Logo for ${member.business}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", member.logo.width);
    logo.setAttribute("height", member.logo.height);
    logo.id = "mem-logo";

    // append elements to the document
    card.appendChild(logo);         // #mem-logo
    card.appendChild(business);     // #mem-name
    card.appendChild(website);      // #mem-web

    docMembers.appendChild(card);   // .card


}
getMembers();