import { ReactElement, useEffect, useState } from "react";
import { Image, ImageResizeMode } from "react-native";
import * as Crypto from "expo-crypto";
import * as FileSystem from "expo-file-system";

type CacheImageProps = {
    uri: string | undefined;
    style: {
        width: string | number;
        height: string | number;
        resizeMode: ImageResizeMode | undefined;
    };
};

const CacheImage = ({ uri, style }: CacheImageProps): ReactElement => {
    const [source, setSource] = useState({});

    /**
     * * Check if the image already exists in cache. If so then the image source will be set from cache, otherwise
     * * the new image will be downloaded to the cache directory.
     * ! If an error occurs or no uri is available, the source will be set to an empty string.
     * @returns void
     */
    const cacheImageAsync = async (): Promise<void> => {
        if (uri) {
            try {
                const name = await Crypto.digestStringAsync(
                    Crypto.CryptoDigestAlgorithm.SHA256,
                    uri
                );
                const path = `${FileSystem.cacheDirectory}${name}`;
                const image = await FileSystem.getInfoAsync(path);

                if (image.exists) {
                    setSource({
                        uri: image.uri
                    });
                    return;
                }

                const newImage = await FileSystem.downloadAsync(uri, path);
                setSource({
                    uri: newImage.uri
                });
            } catch (error) {
                setSource({
                    uri: ""
                });
            }
        } else {
            setSource({
                uri: ""
            });
        }
    };

    useEffect(() => {
        cacheImageAsync();
    }, []);

    return (
        <Image
            style={{
                width: style.width,
                height: style.height,
                resizeMode: style.resizeMode
            }}
            source={source}
        />
    );
};

export default CacheImage;
