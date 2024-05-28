const baseURL = "https://deanabriggs.github.io/wdd230/";
const linksURL = "https://deanabriggs.github.io/wdd230/data/links.json";

const activities = document.querySelector("#activities");   // verified doc for id

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayLinks(data.weeks);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayLinks = (weeks) => {

    const h2 = document.createElement("h2");            // create h2 element
    h2.textContent = "Learning Activities";
    activities.appendChild(h2);                         // append caption to table

    const ul = document.createElement("ul");         // create ul element
    ul.setAttribute("id", "assignments");
    activities.appendChild(ul);                         // append ul to activities

    weeks.forEach(week => {
        const li = document.createElement("li");            // create li element for each week
        li.innerHTML = `${week.week}: `;
        ul.appendChild(li);                                 // append li to ul

        week.links.forEach(link => {
            const a = document.createElement("a");              // create an anchor element for each link
            a.href = link.url;
            a.textContent = ` | ${link.title}`;
            li.appendChild(a);                                  // append anchor to li
        })
    })


    // const table = document.createElement("table");          // create a table element

    // const caption = document.createElement("caption");          // create a caption element
    // caption.textContent = "Learning Activities";
    // table.appendChild(caption);                                 // append caption to table

    // const tbody = document.createElement("tbody");              // create a tbody element

    // weeks.forEach(week => {
    //     const tr = document.createElement("tr");                    // create a tr (table row) element

    //     const th = document.createElement("th");                       // create a th (table header) element for each week name
    //     th.setAttribute("scope", "row");
    //     th.textContent = week.week;
    //     tr.appendChild(th);                                            // append th to tr

    //     week.links.forEach(link => {
    //         const td = document.createElement("td");                    // create a td element for each link
    //         const a = document.createElement("a");                          // create an anchor element for each link
    //         a.href = link.url;
    //         a.textContent = link.title;
    //         td.appendChild(a);                                              // append anchor to td
    //         tr.appendChild(td);                                         // append td to tr
    //     })

    //     tbody.appendChild(tr);                                      // append tr to tbody
    // })

    // table.appendChild(tbody);                                   // append tbody to table
    // activities.appendChild(table);                          // append table to activities
}

getLinks();