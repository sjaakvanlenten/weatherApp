import { temperatureData, weatherData, weatherDetails } from "./types";

/**
 * * Sorts the weatherData array by cityName
 * @param data
 * @returns weatherData
 */

export const sortByCityName = (data: weatherData): weatherData => {
    return data.sort((a: weatherDetails, b: weatherDetails) =>
        a.cityName < b.cityName ? -1 : a.cityName > b.cityName ? 1 : 0
    );
};

/**
 * * Sorts the temperatures in chronological order
 * @param data
 * @returns [temperatureData]
 */

export const sortChronological = (data: temperatureData[]): temperatureData[] => {
    return data.sort(
        (a: temperatureData, b: temperatureData) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
    );
};
