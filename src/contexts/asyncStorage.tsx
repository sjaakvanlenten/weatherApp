import { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { weatherData } from "@utils";

type asyncStorageContextType = {
    weatherData: weatherData;
    loadWeatherData: () => void;
    saveWeatherData: (weatherData: weatherData) => void;
};

const asyncStorageContext = createContext<asyncStorageContextType | undefined>(undefined);

function useAsyncStorage(): asyncStorageContextType {
    const context = useContext(asyncStorageContext);
    if (!context) {
        throw new Error("useAsyncStorage must be used within a AsyncStorageProvider");
    }
    return context;
}

function AsyncStorageProvider(props: { children: ReactNode }): ReactElement {
    const [weatherData, setWeatherData] = useState<weatherData>([]);

    const saveWeatherData = async (newWeatherData: weatherData): Promise<void> => {
        try {
            const jsonValue = JSON.stringify(newWeatherData);
            await AsyncStorage.setItem("@weatherData", jsonValue);
            setWeatherData(newWeatherData);
        } catch (error) {
            Alert.alert("Something went wrong, try again.");
        }
    };

    const loadWeatherData = async (): Promise<void> => {
        try {
            const weatherData = await AsyncStorage.getItem("@weatherData");
            weatherData !== null ? setWeatherData(JSON.parse(weatherData)) : setWeatherData([]);
        } catch (error) {
            Alert.alert("Unable to load your data, try again.");
            setWeatherData([]);
        }
    };

    useEffect(() => {
        loadWeatherData();
    }, []);

    return (
        <asyncStorageContext.Provider
            {...props}
            value={{
                weatherData,
                loadWeatherData,
                saveWeatherData
            }}
        />
    );
}

export { useAsyncStorage, AsyncStorageProvider };
