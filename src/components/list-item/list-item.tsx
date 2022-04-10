import { ReactElement } from "react";
import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import I18n from "i18n-js";

import CacheImage from "../cache-image/cache-image";
import Text from "../text/text";
import { gradients, weatherDetails } from "@utils";
import styles from "./list-item.styles";

type StackParamList = {
    Details: { cityName: String } | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

const ListItem = ({ cityName, picture }: weatherDetails): ReactElement => {
    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={() => navigation.navigate("Details", { cityName })}
            >
                <View
                    style={[
                        styles.imageContainer,
                        { backgroundColor: gradients[cityName].topColor }
                    ]}
                >
                    <CacheImage
                        uri={picture}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover"
                        }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title} weight="500">
                        {I18n.t(cityName)}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
};

export default ListItem;
