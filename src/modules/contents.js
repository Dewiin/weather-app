import { updateBackgrounds } from "./backgrounds";
import { updateIcon, getWeekday } from "./icons";

const gridContainer = document.querySelector("#grid-container");

export const updateWeather = (location) => {
    try {
        // OK showing the public access free key. Will hide in future.
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=VSGFZ6GGNNY7BQ5PNLS3F6GM3`, {mode: "cors"})
            .then( response => {
                if(!response.ok) {
                    throw new Error(`Location not found.`);    
                }
                return response.json();
            })
            .then( response => {
                updateBackgrounds(response.currentConditions.datetime);

                gridContainer.innerHTML = 
                `
                    <div id="weather-degrees-image" class="grid-item">
                        <h2>${response.resolvedAddress}</h2>
                        <p class="degrees">${response.currentConditions.temp}°F</p>
                        <p class="minmax">${response.days[0].tempmin}° / ${response.days[0].tempmax}°</p>
                        <img class="weather-icon" src=${updateIcon(response.currentConditions.icon)} alt=${response.currentConditions.icon}>
                    </div>
                    <div id="weather-conditions-info" class="grid-item">
                        <h2>Weather details</h2>
                        <ul>
                            <li>
                                <span class="list-content">
                                    <img>
                                    Precipitation
                                </span>
                                <span class="list-value">${response.currentConditions.precipprob}%</span>
                            </li>
                            <li>
                                <span class="list-content">
                                    <img>
                                    Wind Speed
                                </span>
                                <span class="list-value">${response.currentConditions.windspeed} km/h</span>
                            </li>
                            <li>
                                <span class="list-content">
                                    <img>
                                    Humidity
                                </span>
                                <span class="list-value">${response.currentConditions.humidity}%</span>
                            </li>
                            <li>
                                <span class="list-content">
                                    <img>
                                    UV Index
                                </span>
                                <span class="list-value">${response.currentConditions.uvindex}</span>
                            </li>
                            <li>
                                <span class="list-content">
                                    <img>
                                    Visibility
                                </span>
                                <span class="list-value">${response.currentConditions.visibility} miles</span>
                            </li>
                        </ul>
                    </div>
                    <div id="weather-future-forecasts" class="grid-item">
                        <h2>Future forecasts</h2>
                        <ul>
                            <li>
                                <p>${getWeekday(response.days[1].datetime)}</p>
                                <img src=${updateIcon(response.days[1].icon)}>
                                <p>${response.days[1].tempmin}° / ${response.days[1].tempmax}°</p>
                            </li>
                            <li>
                                <p>${getWeekday(response.days[2].datetime)}</p>
                                <img src=${updateIcon(response.days[2].icon)}>
                                <p>${response.days[2].tempmin}° / ${response.days[2].tempmax}°</p>
                            </li>
                            <li>
                                <p>${getWeekday(response.days[3].datetime)}</p>
                                <img src=${updateIcon(response.days[3].icon)}>
                                <p>${response.days[3].tempmin}° / ${response.days[3].tempmax}°</p>
                            </li>
                            <li>
                                <p>${getWeekday(response.days[4].datetime)}</p>
                                <img src=${updateIcon(response.days[4].icon)}>
                                <p>${response.days[4].tempmin}° / ${response.days[4].tempmax}°</p>
                            </li>
                            <li>
                                <p>${getWeekday(response.days[5].datetime)}</p>
                                <img src=${updateIcon(response.days[5].icon)}>
                                <p>${response.days[5].tempmin}° / ${response.days[5].tempmax}°</p>
                            </li>
                        </ul>
                    </div>
                `
            })
            .catch( error => {
                console.log(error.message);
            })
    }
    catch {
        console.log("An unexpected error occured.");
    }
}



