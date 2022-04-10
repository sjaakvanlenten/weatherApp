import { ReactElement, ReactNode } from "react";
import {
    useFonts,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

import { ja, nl, en, es, zh } from "@utils";

i18n.fallbacks = true;
i18n.translations = { ja, nl, en, es, zh };
i18n.locale = Localization.locale;

type AppBootstrapProps = {
    children: ReactNode;
};

const AppBootstrap = ({ children }: AppBootstrapProps): ReactElement => {
    const [fontLoaded] = useFonts({
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    });

    return fontLoaded ? <>{children}</> : <AppLoading />;
};

export default AppBootstrap;
