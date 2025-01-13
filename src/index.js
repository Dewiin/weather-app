import "./index.css";
import "./styles/grid.css";
import "./styles/weather-degrees.css"
import "./styles/weather-info.css"
import "./styles/weather-predictions.css"
import { parallaxBg } from "./modules/parallax";
import { updateWeather } from "./modules/contents";

parallaxBg();

updateWeather("London");

const searchBar = document.querySelector("#home-search-bar");
searchBar.addEventListener("change", (e) => {
    if(e.target && e.target.value) {
        updateWeather(e.target.value);
    }
    e.target.value = "";
});




