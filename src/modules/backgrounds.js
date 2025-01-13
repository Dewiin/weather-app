import morningBackground from "../assets/backgrounds/morning.jpg";
import afternoonBackground from "../assets/backgrounds/afternoon.jpg";
import eveningBackground from "../assets/backgrounds/evening.jpg";
import nightBackground from "../assets/backgrounds/night.jpg";

const homeBackground = document.querySelector("#home-bg");

const changeBackgroundWithFade = (newBackground) => {
    // First, fade out the current background
    homeBackground.classList.add('fade-out');
    
    // After the fade-out effect completes, change the background image and fade it back in
    setTimeout(() => {
        homeBackground.style["background-image"] = `url(${newBackground})`;
        homeBackground.classList.remove('fade-out'); 
    }, 1000); 
};

const displayMorning = () => {
    changeBackgroundWithFade(morningBackground);
}

const displayAfternoon = () => {
    changeBackgroundWithFade(afternoonBackground);
}

const displayEvening = () => {
    changeBackgroundWithFade(eveningBackground);
}

const displayNight = () => {
    changeBackgroundWithFade(nightBackground);
}

export const updateBackgrounds = (datetime) => {
    const hours = parseInt(datetime.split(":")[0], 10);

    if(hours >= 5 && hours < 12) {
        displayMorning();
    }
    else if(hours >= 12 && hours < 17) {
        displayAfternoon();
    }
    else if(hours >= 17 && hours < 21) {
        displayEvening();
    }
    else {
        displayNight();
    }
}