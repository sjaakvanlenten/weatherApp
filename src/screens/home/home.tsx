import { ReactElement, useEffect, useState } from "react";
import { FlatList, ListRenderItem, TouchableOpacity, RefreshControl, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import i18n from "i18n-js";

import { GradientBackground, ListItem, Text } from "@components";
import { groupDataByCity, sortByCityName, weatherDetails } from "@utils";
import { useAsyncStorage } from "@contexts/asyncStorage";
import styles from "./home.styles";

const Home = (): ReactElement => {
    const { weatherData, saveWeatherData } = useAsyncStorage();
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<String[] | null>(null);

    // Fetches the data from the API.
    const getRawWeatherData = async (): Promise<void> => {
        try {
            const response = await fetch(
                "https://us-central1-mobile-assignment-server.cloudfunctions.net/weather"
            );
            const json = await response.json();

            if (json.length > 0) {
                const newWeatherData = groupDataByCity(json);
                saveWeatherData(newWeatherData);
            }
            setErrorMessages(null);
        } catch (error) {
            setErrorMessages([i18n.t("errorFetch"), i18n.t("errorConnection")]);
        }
    };

    useEffect(() => {
        getRawWeatherData();
    }, []);

    const fetchNewData = (): void => {
        setIsFetching(true);
        getRawWeatherData();
        setIsFetching(false);
    };

    const renderItem: ListRenderItem<weatherDetails> = ({ item }): ReactElement => {
        return <ListItem cityName={item.cityName} picture={item.picture} />;
    };

    const ListEmptyComponent = (): ReactElement => (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50
            }}
        >
            <Text weight="500" style={styles.paragraph}>
                {i18n.t("noTempData")}
            </Text>
            <Text weight="500" style={styles.paragraph}>
                {i18n.t("errorConnection")}
            </Text>
        </View>
    );

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerBar}>
                        <Text weight="600" style={styles.headerText}>
                            CityWeather
                        </Text>
                        <TouchableOpacity onPress={fetchNewData}>
                            <Ionicons name="refresh-circle-sharp" size={46} color="white" />
                        </TouchableOpacity>
                    </View>

                    {errorMessages && (
                        <View
                            style={{
                                flex: 1,
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <View style={styles.errorBox}>
                                {errorMessages.map((errorMessage, i) => (
                                    <Text key={i} style={styles.errorText}>
                                        {errorMessage}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    )}
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.paragraph}>{i18n.t("clickDetails")}</Text>
                    </View>
                    <FlatList
                        data={sortByCityName(weatherData)}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                        numColumns={2}
                        ListEmptyComponent={ListEmptyComponent}
                        refreshControl={
                            <RefreshControl
                                refreshing={isFetching}
                                onRefresh={fetchNewData}
                                colors={["#fda113"]}
                                tintColor="#fda113"
                            />
                        }
                    />
                </View>
            </SafeAreaView>
        </GradientBackground>
    );
};

export default Home;
