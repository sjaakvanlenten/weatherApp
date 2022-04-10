import { ReactElement } from "react";

import Navigator from "@config/navigator";
import { AppBootstrap } from "@components";
import { AsyncStorageProvider } from "@contexts/asyncStorage";

export default function App(): ReactElement {
    return (
        <AppBootstrap>
            <AsyncStorageProvider>
                <Navigator />
            </AsyncStorageProvider>
        </AppBootstrap>
    );
}
