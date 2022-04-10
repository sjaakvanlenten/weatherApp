export type temperatureType = "C" | "F" | "K";

export type temperatureData = {
    date: string;
    temperature: number;
    temperatureType: temperatureType;
};

export type weatherDetails = {
    cityName: string;
    picture: string;
    temperatures?: temperatureData[];
};

export type weatherData = weatherDetails[];
