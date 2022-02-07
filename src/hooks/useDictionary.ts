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

function filterDictionary(dictionary: string): string[]
{
    return (dictionary.split("\n").filter((word) => word.length === 5));
}

export default function useDictionary(lang = "en")
{
    const [assets, error] = useAssets(files);
    const [dictionary, setDictionary] = useState(new Array<string>());
    const langIndex = langs.indexOf(lang); 

    useEffect(() => {
        if (error) {
            console.error(error.message);
        }
    }, [error]);
    useEffect(() => {
        let uri;

        if (langIndex === -1 || !assets || assets.length !== files.length)
            return;
        uri = assets?.[langIndex].localUri!;
        readAsStringAsync(uri, { encoding: "utf8" })
        .then((data) => setDictionary(filterDictionary(data)))
        .catch((reason) => console.error(reason));
    }, [assets]);
    return (dictionary);
}