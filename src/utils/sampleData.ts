import { temperatureData, weatherData } from "./types";

export const sample_API_Data = [
    {
        city: {
            name: "San Francisco",
            picture:
                "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/san_francisco.jpg?alt=media&token=3192e915-9a72-4342-b247-072b11ca4a10"
        },
        date: "2022-04-11T08:00:00+00:00",
        temp: 78.21,
        tempType: "F"
    },
    {
        city: {
            name: "Hong Kong",
            picture:
                "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/hong_kong.jpg?alt=media&token=dd206090-d3a8-4338-b57b-6d6df37cdd6f"
        },
        date: "2022-04-11T20:00:00+00:00",
        temp: 23.81,
        tempType: "C"
    },
    {
        city: {
            name: "Barcelona",
            picture:
                "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13"
        },
        date: "2022-04-11T00:00:00+00:00",
        temp: 296.08,
        tempType: "K"
    },
    {
        city: {
            name: "Amsterdam",
            picture:
                "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/amsterdam.jpg?alt=media&token=98d29e95-1cac-400b-bb7b-9290fea8d508"
        },
        date: "2022-04-11T20:00:00+00:00",
        temp: 72.99,
        tempType: "F"
    },
    {
        city: {
            name: "Amsterdam",
            picture:
                "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/amsterdam.jpg?alt=media&token=98d29e95-1cac-400b-bb7b-9290fea8d508"
        },
        date: "2022-04-11T00:00:00+00:00",
        temp: 80.13,
        tempType: "F"
    }
];

export const sample_grouped_Data: weatherData = [
    {
        cityName: "San Francisco",
        picture:
            "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/san_francisco.jpg?alt=media&token=3192e915-9a72-4342-b247-072b11ca4a10",
        temperatures: [
            {
                temperature: 78.21,
                temperatureType: "F",
                date: "2022-04-11T08:00:00+00:00"
            }
        ]
    },
    {
        cityName: "Hong Kong",
        picture:
            "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/hong_kong.jpg?alt=media&token=dd206090-d3a8-4338-b57b-6d6df37cdd6f",
        temperatures: [
            {
                temperature: 23.81,
                temperatureType: "C",
                date: "2022-04-11T20:00:00+00:00"
            }
        ]
    },
    {
        cityName: "Barcelona",
        picture:
            "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13",
        temperatures: [
            {
                temperature: 296.08,
                temperatureType: "K",
                date: "2022-04-11T00:00:00+00:00"
            }
        ]
    },
    {
        cityName: "Amsterdam",
        picture:
            "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/amsterdam.jpg?alt=media&token=98d29e95-1cac-400b-bb7b-9290fea8d508",
        temperatures: [
            {
                temperature: 72.99,
                temperatureType: "F",
                date: "2022-04-11T20:00:00+00:00"
            },
            {
                temperature: 80.13,
                temperatureType: "F",
                date: "2022-04-11T00:00:00+00:00"
            }
        ]
    }
];

export const sample_sorted_groupData: weatherData = [
    {
        cityName: "Amsterdam",
        picture:
            "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/amsterdam.jpg?alt=media&token=98d29e95-1cac-400b-bb7b-9290fea8d508",
        temperatures: [
            {
                temperature: 72.99,
                temperatureType: "F",
                date: "2022-04-11T20:00:00+00:00"
            },
            {
                temperature: 80.13,
                temperatureType: "F",
                date: "2022-04-11T00:00:00+00:00"
            }
        ]
    },
    {
        cityName: "Barcelona",
        picture:
            "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13",
        temperatures: [
            {
                temperature: 296.08,
                temperatureType: "K",
                date: "2022-04-11T00:00:00+00:00"
            }
        ]
    },
    {
        cityName: "Hong Kong",
        picture:
            "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/hong_kong.jpg?alt=media&token=dd206090-d3a8-4338-b57b-6d6df37cdd6f",
        temperatures: [
            {
                temperature: 23.81,
                temperatureType: "C",
                date: "2022-04-11T20:00:00+00:00"
            }
        ]
    },
    {
        cityName: "San Francisco",
        picture:
            "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/san_francisco.jpg?alt=media&token=3192e915-9a72-4342-b247-072b11ca4a10",
        temperatures: [
            {
                temperature: 78.21,
                temperatureType: "F",
                date: "2022-04-11T08:00:00+00:00"
            }
        ]
    }
];

export const sample_temperature_data: temperatureData[] = [
    {
        date: "2022-04-11T00:00:00+00:00",
        temperature: 23.72,
        temperatureType: "C"
    },
    {
        date: "2022-04-11T12:00:00+00:00",
        temperature: 20.42,
        temperatureType: "C"
    },
    {
        date: "2022-04-11T20:00:00+00:00",
        temperature: 68.64,
        temperatureType: "F"
    },
    {
        date: "2022-04-11T08:00:00+00:00",
        temperature: 21.34,
        temperatureType: "C"
    },
    {
        date: "2022-04-11T16:00:00+00:00",
        temperature: 296.69,
        temperatureType: "K"
    },
    {
        date: "2022-04-11T04:00:00+00:00",
        temperature: 297.69,
        temperatureType: "K"
    }
];

export const sample_sorted_temperature_data: temperatureData[] = [
    {
        date: "2022-04-11T00:00:00+00:00",
        temperature: 23.72,
        temperatureType: "C"
    },
    {
        date: "2022-04-11T04:00:00+00:00",
        temperature: 297.69,
        temperatureType: "K"
    },
    {
        date: "2022-04-11T08:00:00+00:00",
        temperature: 21.34,
        temperatureType: "C"
    },
    {
        date: "2022-04-11T12:00:00+00:00",
        temperature: 20.42,
        temperatureType: "C"
    },
    {
        date: "2022-04-11T16:00:00+00:00",
        temperature: 296.69,
        temperatureType: "K"
    },
    {
        date: "2022-04-11T20:00:00+00:00",
        temperature: 68.64,
        temperatureType: "F"
    }
];
