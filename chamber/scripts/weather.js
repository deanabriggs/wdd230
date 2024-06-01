const docWeather = document.querySelector(".weather");
const weatherIcon = document.querySelector('#rsvl-weather-icon');
const currentTemp = document.querySelector('#rsvl-current-temp');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/3.0/onecall?lat=38.752&lon=-121.288&exclude=hourly&units=imperial&appid=b95911a02dd219ecf37afbfde6d77c81"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    // apply data to variables
    const temp = parseInt(data.current.temp);
    const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
    const desc = data.current.weather[0].description;

    currentTemp.innerHTML = `${temp}&deg;F`;
    weatherIcon.src = iconsrc;
    weatherIcon.alt = desc;
    captionDesc.textContent = desc;

    // for 3-day forcast (would prefer to write in a loop)
    for (let i = 0; i < 3; i++) {
        // create document elements
        let eachDay = document.createElement("figure");
        let theDate = document.createElement("h3");
        let icon = document.createElement("img");
        let tempDay = document.createElement("span");
        let descDay = document.createElement("figcaption");

        // assign a variable to the pulled data
        let dateData = new Date(data.daily[i].dt * 1000);
        let fDate = dateData.toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).replace(',', '');
        let iconsrc = `https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png`;
        let tempD = parseInt(data.daily[i].temp.day);
        let descData = data.daily[i].weather[0].description;

        // set attributes and content to doc elements
        eachDay.className = "forecast";
        theDate.textContent = fDate;
        icon.src = iconsrc;
        icon.alt = "weather icon";
        tempDay.innerHTML = `${tempD}&deg;F`;
        descDay.textContent = descData;

        // append to document
        eachDay.appendChild(theDate);       // .forecast h3
        eachDay.appendChild(icon);          // .forecast img
        eachDay.appendChild(tempDay);       // .forecast span
        eachDay.appendChild(descDay);       // .forecast figcaption

        docWeather.appendChild(eachDay);    //  .forecast 
    }
}

