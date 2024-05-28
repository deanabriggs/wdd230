const baseURL = "https://deanabriggs.github.io/wdd230/chamber/";
const membersURL = "https://deanabriggs.github.io/wdd230/chamber/data/members.json";

const docMembers = document.querySelector("#members");

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

    members.forEach(member => {

        // create document elements for each card
        const card = document.createElement("section");
        const business = document.createElement("h3");
        const address = document.createElement("address");
        const street = document.createElement("p");
        const csz = document.createElement('p');
        const phone = document.createElement("a");
        const email = document.createElement("a");
        const logo = document.createElement("img");
        const membership = document.createElement("p");
        const category = document.createElement("p");

        // set element properties & values
        card.setAttribute("class", "card");
        business.textContent = member.business;
        street.textContent = member.address.street;
        let compoundCSZ = `${member.address.city}, ${member.address.state} ${member.address.zip}`;
        csz.textContent = compoundCSZ;
        phone.setAttribute("href", `tel:${member.phone}`);
        phone.textContent = member.phone;
        email.setAttribute("href", `mailto:${member.email}`);
        email.textContent = member.email;
        membership.textContent = `Membership: ${member.membership}`;
        category.textContent = `Category: ${member.category}`;

        logo.setAttribute("src", member.img);
        logo.setAttribute("alt", `Logo for ${member.business}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "200");
        logo.setAttribute("height", "100");

        // append elements to the document
        address.appendChild(street);
        address.appendChild(csz);

        card.appendChild(logo);
        card.appendChild(business);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(email);
        card.appendChild(membership);
        card.appendChild(category);

        docMembers.appendChild(card);

    });
}

getMembers();