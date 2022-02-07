import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import useDictionary from "./src/hooks/useDictionary";

export default function App()
{
  const dictionary = useDictionary();
  const [word, setWord] = useState("");

  useEffect(() => {
    if (!dictionary)
      return;
    setWord(dictionary[~~(Math.random() * dictionary.length)]);
  }, [dictionary]);
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{word}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
