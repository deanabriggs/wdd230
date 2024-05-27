const weatherIcon = document.querySelector('#hw-weather-icon');
const currentTemp = document.querySelector('#hw-current-temp');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/3.0/onecall?lat=38.77&lon=-121.26&exclude=part&units=imperial&appid=b95911a02dd219ecf37afbfde6d77c81"

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
    let temp = parseInt(data.current.temp);
    currentTemp.innerHTML = `${temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
    let desc = data.current.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}

