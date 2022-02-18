import { Pressable, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KEY_HEIGHT, KEY_WIDTH } from "./constants";

interface KeyProps
{
  id: string;
  onPress: (key: string) => void;
}

export const Key = (props: KeyProps) => {
  return (
    <LinearGradient style={styles.container} colors={["#2a292e", "#060606"]}>
      <Pressable onPress={() => props.onPress(props.id)} style={styles.button}>
        <Text style={styles.text}>{props.id}</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: KEY_WIDTH,
    height: KEY_HEIGHT,
    marginHorizontal: 2,
    justifyContent: "center",
  },
  button: {
    
  },
  text: {
    color: "white",
    fontSize: 25,
    textTransform: "uppercase",
    textAlign: "center",
    textAlignVertical: "bottom",
  },
});