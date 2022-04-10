import { ReactNode, ReactElement } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

type TextProps = {
    weight: "300" | "400" | "500" | "600" | "700";
    children: ReactNode;
} & NativeTextProps;

const defaultProps = {
    weight: "400"
};

export default function Text({ children, style, weight, ...props }: TextProps): ReactElement {
    let fontFamily;
    if (weight === "300") {
        fontFamily = "Montserrat_300Light";
    }
    if (weight === "400") {
        fontFamily = "Montserrat_400Regular";
    }
    if (weight === "500") {
        fontFamily = "Montserrat_500Medium";
    }
    if (weight === "600") {
        fontFamily = "Montserrat_600SemiBold";
    }
    if (weight === "700") {
        fontFamily = "Montserrat_700Bold";
    }

    return (
        <NativeText {...props} style={[{ fontFamily }, style]}>
            {children}
        </NativeText>
    );
}

Text.defaultProps = defaultProps;
