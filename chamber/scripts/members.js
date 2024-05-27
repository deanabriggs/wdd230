const baseURL = "https://deanabriggs.github.io/wdd230/chamber/";
const membersURL = "https://deanabriggs.github.io/wdd230/chamber/data/members.json";

const members = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // displayLinks(data.members);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getMembers();