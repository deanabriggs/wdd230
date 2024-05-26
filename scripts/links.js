const baseURL = "https://deanabriggs.github.io/wdd230/";
const linksURL = "https://deanabriggs.github.io/wdd230/data/links.json";
const assignments = document.querySelector("#assignments");

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayLinks(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayLinks = (weeks) => {

    weeks.forEach((weekSet) => {
        let weekName = document.createElement("li");
        weekName.textContent = weekSet.week;

        links.forEach((linkSet) => {
            let link = document.createElement("a");
            link.textContent = linkSet.title;
            link.href = linkSet.url;
            weekName.appendChild(link);
        })

        assignments.appendChild(weekName);
    })
}

getLinks();