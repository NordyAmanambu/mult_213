import { renderMessage } from "./dom.js";
import { searchCity, fetchWeather } from "./api.js";

// Grab references to various parts of the HTML page
const cityForm = document.querySelector("#city-form");
const cityList = document.querySelector("#city-list");
const weatherForm = document.querySelector("#weather-form");
const weatherOutput = document.querySelector("#weather-output");

cityForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = document.querySelector("#city").value.trim();
    if (!city) return;

    renderMessage(cityList, "Loading…");

    try {
        const data = await searchCity(city);
        if (data.length === 0) {
            renderMessage(cityList, `No results found for "${city}".`);
            return;
        }

        let message = `Found ${data.length} result(s) for "${city}":`;

        message += "<ul>";
        data.forEach((item) => {
            message += `<li>${item.name}, ${item.country} (Lat: ${item.latitude}, Lon: ${item.longitude})</li>`;
        });
        message += "</ul>";

        renderMessage(cityList, message);
    } catch (err) {
        renderMessage(cityList, `Error: ${err.message}`);
    }
});

weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const latStr = document.querySelector("#lat").value.trim();
    const lonStr = document.querySelector("#lon").value.trim();

    if (!latStr || !lonStr) {
        renderMessage(weatherOutput, "Please provide both latitude and longitude.");
        return;
    }

    const lat = parseFloat(latStr);
    const lon = parseFloat(lonStr);
    if (Number.isNaN(lat) || Number.isNaN(lon)) {
        renderMessage(weatherOutput, "Latitude and longitude must be valid numbers.");
        return;
    }

    renderMessage(weatherOutput, "Loading Weather Data…");

    try {
        const weather = await fetchWeather(lat, lon);
        renderMessage(weatherOutput, `<pre>${JSON.stringify(weather, null, 2)}</pre>`);
    } catch (err) {
        renderMessage(weatherOutput, `Error: ${err.message}`);
    }
});
