const iconsMap = new Map();

const getIcons = () => {
    const r = require.context("../assets/weather-conditions", false, /\.(svg|png|jpg)$/);
    r.keys().forEach((key) => {
        const iconName = key.replace('./', '').replace(/\.\w+$/, '');
        iconsMap.set(iconName, r(key));
    });
}

getIcons();

export const updateIcon = (id) => {
    console.log(id);

    return iconsMap.get(id);
}

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const getWeekday = (dateString) => {
    const date = new Date(dateString);

    return weekdays[date.getDay()];
}
