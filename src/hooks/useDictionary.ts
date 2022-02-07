import { useEffect, useState } from "react";
import { useAssets } from "expo-asset";
import { readAsStringAsync } from "expo-file-system"


export default function useDictionary(lang = "en")
{
    const [assets, error] = useAssets([require(`./../../assets/dictionaries/en.txt`)]);
    const [dictionary, setDictionary] = useState(new Array<string>());

    useEffect(() => {
        if (!assets?.[0].localUri)
            return;
        readAsStringAsync(assets[0].localUri)
        .then((data) => setDictionary(data.split("\n")))
        .catch((reason) => console.error(reason));
    }, [assets]);
    return (dictionary);
}