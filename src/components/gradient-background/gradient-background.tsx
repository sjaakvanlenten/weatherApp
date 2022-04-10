import { ReactElement, ReactNode } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

type GradientBackgroundProps = {
    children: ReactNode;
    gradientData: {
        topColor: string;
        midColor: string;
        yInput: number;
    };
};

const defaultProps = {
    gradientData: {
        topColor: "#fda113",
        midColor: "#fdb813",
        yInput: 0.2
    }
};

export default function GradientBackground({
    gradientData,
    children
}: GradientBackgroundProps): ReactElement {
    return (
        <View style={{ flex: 1, width: "100%" }}>
            <StatusBar style="light" />
            <LinearGradient
                start={{ x: 0.5, y: gradientData.yInput }}
                end={{ x: 0.5, y: 0.8 }}
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }}
                colors={[gradientData.topColor, gradientData.midColor, "#cde9ee"]}
            />
            {children}
        </View>
    );
}

GradientBackground.defaultProps = defaultProps;
