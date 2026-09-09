const theme = document.getElementById("themeButton");
let darkMode = false;

function changeTheme() {
    //Function to change background of webPage
    if (!darkMode) {
        document.body.style.backgroundColor = "rgb(101, 99, 99)";
        theme.textContent = "Light Mode";
        theme.style.backgroundColor = "#222";
        theme.style.color = "#f2f2f2";
        document.body.classList.remove("lightMode");
        document.body.classList.add("darkMode");
        darkMode = true;

    } else {
        document.body.style.backgroundColor = "white";
        theme.textContent = "Dark Mode";
        theme.style.backgroundColor = "#f2f2f2";
        theme.style.color = "#222";
        document.body.classList.remove("darkMode");
        document.body.classList.add("lightMode");
        darkMode = false;
    }
}

const inputCity = document.getElementById("inputCity");
const searchButton = document.getElementById("searchButton");
const output = document.getElementById("output");
const apiKey = "c04a3191655e34ec6392a2bda8d309c5";

inputCity.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        main();
    }
});

searchButton.addEventListener("click", main);

async function main() {
    const city = inputCity.value.trim().toLowerCase();
    if (!city) {
        displayError("Please enter a city!!");
    } else {
        
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error);
        }
    }
}

async function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        console.error("Could not fetch whether data.");
        displayError("City not found.");
    }
    return await response.json();
}

function displayWeatherData(data) {

}

function getWeatherEmoji(weatherID) {

}

function displayError(message) {
    const error = document.createElement("h5"); //h5 element with id = "error" created
    error.textContent = message; //text content changed
    error.classList.add("error"); //.error class added, so styling can be applied acc. to CSS

    //output.textContent = "";
    output.appendChild(error);
    output.style.display = "flex";
}