import morningBackground from "../assets/morning.jpg";
import afternoonBackground from "../assets/afternoon.jpg";
import eveningBackground from "../assets/evening.jpg";
import nightBackground from "../assets/night.jpg";


const homeBackground = document.querySelector("#home-bg");


export const displayMorning = () => {
    homeBackground.style["background-image"] = `url(${morningBackground})`;
}


export const displayAfternoon = () => {
    homeBackground.style["background-image"] = `url(${afternoonBackground})`;
}


export const displayEvening = () => {
    homeBackground.style["background-image"] = `url(${eveningBackground})`;
}


export const displayNight = () => {
    homeBackground.style["background-image"] = `url(${nightBackground})`;
}