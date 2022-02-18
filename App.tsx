import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Field } from "./src/Field";
import { Keyboard } from "./src/Keyboard";
import useDictionary from "./src/hooks/useDictionary";

export default function App()
{
  const dictionary = useDictionary("en");
  const [word, setWord] = useState("");
  const [current, setCurrent] = useState("a");

  useEffect(() => {
    if (!dictionary?.length)
      return;
    setWord(dictionary[~~(Math.random() * dictionary.length)]);
  }, [dictionary]);
  
  return (
    <View style={styles.container}>
      <Field word={word} current={word} />
      <TextInput autoFocus style={{display: "none"}} />
      <Keyboard onPress={(key) => console.log(key)} />
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
