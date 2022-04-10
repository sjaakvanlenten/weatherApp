import { ReactElement } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import I18n from "i18n-js";

import { CacheImage, GradientBackground, Text } from "@components";
import { StackNavigatorParams } from "@config/navigator";
import { useAsyncStorage } from "@contexts/asyncStorage";
import { convertToCelcius, sortChronological, gradients } from "@utils";
import styles from "./details.styles";

type DetailsProps = {
    navigation: StackNavigationProp<StackNavigatorParams, "Details">;
    route: RouteProp<StackNavigatorParams, "Details">;
};

const Details = ({ navigation, route }: DetailsProps): ReactElement => {
    const { weatherData } = useAsyncStorage();

    const currentWeatherDetails = weatherData.find(
        weather => weather.cityName === route.params.cityName
    );

    if (currentWeatherDetails?.temperatures) {
        sortChronological(currentWeatherDetails.temperatures);
    }

    // Construct a data object using our current weather details to be used by the LineChart component
    const lineData = currentWeatherDetails?.temperatures?.map(temperatureDetails => ({
        value: convertToCelcius(temperatureDetails.temperature, temperatureDetails.temperatureType),
        dataPointText: `${convertToCelcius(
            temperatureDetails.temperature,
            temperatureDetails.temperatureType
        ).toString()}\xB0`,
        label: `${new Date(temperatureDetails.date).toUTCString().split(" ")[4].slice(0, 5)}`,
        labelComponent: () => (
            <Text style={{ color: "white" }}>
                {new Date(temperatureDetails.date).toUTCString().split(" ")[4].slice(0, 5)}
            </Text>
        )
    }));

    return (
        <GradientBackground gradientData={gradients[currentWeatherDetails!.cityName]}>
            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons
                            style={{ marginLeft: 20, marginTop: 10 }}
                            name="arrow-back-circle-sharp"
                            size={40}
                            color="white"
                        />
                    </TouchableOpacity>

                    <Text weight="600" style={styles.headerText}>
                        {I18n.t(currentWeatherDetails!.cityName)}
                    </Text>

                    <View>
                        {currentWeatherDetails?.temperatures ? (
                            <LineChart
                                data={lineData}
                                maxValue={50}
                                spacing={(Dimensions.get("window").width * 0.8) / 6}
                                textColor1="white"
                                textShiftY={-8}
                                textShiftX={-10}
                                width={Dimensions.get("window").width * 0.8}
                                textFontSize={16}
                                dataPointsColor="white"
                                thickness={2}
                                xAxisThickness={2}
                                hideAxesAndRules
                                curved
                                color="white"
                                isAnimated
                                height={Dimensions.get("screen").height / 5.4}
                                xAxisColor="white"
                            />
                        ) : (
                            <View
                                style={{
                                    alignItems: "center",
                                    flex: 1,
                                    justifyContent: "center"
                                }}
                            >
                                <Text>{I18n.t("noTempData")}</Text>
                            </View>
                        )}
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <CacheImage
                        uri={currentWeatherDetails?.picture}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover"
                        }}
                    />
                </View>
            </SafeAreaView>
        </GradientBackground>
    );
};

export default Details;
