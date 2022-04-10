import { temperatureType, weatherData, weatherDetails } from "./types";

/**
 * * Takes in data from the API and reduces this data to an array of objects
 * * containing the name of the city, the uri of the picture and an object with the temperature data.
 * @param data
 * @returns weatherData
 */

export const groupDataByCity = (data: Array<any>): weatherData => {
    return data.reduce((groupedCities, item) => {
        if (
            groupedCities.some(
                (weatherObject: weatherDetails) => weatherObject.cityName === item.city.name
            )
        ) {
            const index = groupedCities.findIndex(
                (weatherObject: weatherDetails) => weatherObject.cityName === item.city.name
            );
            groupedCities[index].temperatures.push({
                temperature: item.temp,
                temperatureType: item.tempType,
                date: item.date
            });
        } else {
            groupedCities.push({
                cityName: item.city.name,
                picture: item.city.picture,
                temperatures: [
                    {
                        temperature: item.temp,
                        temperatureType: item.tempType,
                        date: item.date
                    }
                ]
            });
        }
        return groupedCities;
    }, []);
};

/**
 * * Takes in a temperature and checks what type of temperature is given. returns the rounded temperature in Celcius.
 * @param temperature
 * @param temperatureType
 * @returns number
 */

export const convertToCelcius = (temperature: number, temperatureType: temperatureType): number => {
    switch (temperatureType) {
        case "F":
            return Math.floor((temperature - 32) / 1.8);
        case "K":
            return Math.floor(temperature - 273.15);
        default:
            return Math.floor(temperature);
    }
};
