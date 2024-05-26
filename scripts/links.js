const baseURL = "https://deanabriggs.github.io/wdd230/";
const linksURL = "https://deanabriggs.github.io/wdd230/data/links.json";


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

    const activities = document.querySelector("#activities");

    const table = document.createElement("table");

    const caption = document.createElement("caption");
    caption.textContent = "Learning Activities";
    caption.style.display = "block";
    table.appendChild(caption);

    const thead = document.createElement("thead");
    const tc1 = document.createElement("tc");

    weeks.forEach(weekName => {
        const th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.textContent = weekName.week;
        tc1.appendChild(th);
    });

    thead.appendChild(tc1);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    weeks.forEach(week => {
        const tr = document.createElement("tr");

        week.links.forEach(link => {
            const td = document.createElement("td");
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.title;
            td.appendChild(a);
            tr.appendChild(td);
        })

        tbody.appendChild(tr);
    })

    table.appendChild(tbody);
    activities.appendChild(table);
}

getLinks();