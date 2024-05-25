const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/3.0/onecall?lat=49.75&lon=6.64&exclude=part&units=imperial&appid=b95911a02dd219ecf37afbfde6d77c81"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
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
    currentTemp.innerHTML = `${data.current.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
    let desc = data.current.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}