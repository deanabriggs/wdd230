const baseURL = "https://deanabriggs.github.io/wdd230/";
const chamberMembersURL = "https://deanabriggs.github.io/wdd230/chamber/data/members.json";

const members = document.querySelector("#members");

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data, nenbers);
            displayLinks(data.members);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}