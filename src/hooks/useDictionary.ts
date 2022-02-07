import { useEffect, useState } from "react";
import { useAssets } from "expo-asset";
import { readAsStringAsync } from "expo-file-system"

const files = [
    require(`./../../assets/dictionaries/en.txt`),
    require(`./../../assets/dictionaries/es.txt`),
    require(`./../../assets/dictionaries/fr.txt`),
    require(`./../../assets/dictionaries/it.txt`),
];
const langs = ["en", "es", "fr", "it"];

export default function useDictionary(lang = "en")
{
    const [assets, error] = useAssets(files);
    const [dictionary, setDictionary] = useState(new Array<string>());

    useEffect(() => {
        if (error) {
            console.error(error.message);
        }
    }, [error]);
    useEffect(() => {
        const uri = assets?.[langs.indexOf(lang)].localUri;
        
        if (!uri)
            return;
        readAsStringAsync(uri)
        .then((data) => setDictionary(data.split("\n")))
        .catch((reason) => console.error(reason));
    }, [assets]);
    return (dictionary);
}