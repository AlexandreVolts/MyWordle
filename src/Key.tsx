import { Pressable, StyleSheet, Text } from "react-native";

interface KeyProps
{
  id: string;
  onPress: (key: string) => void;
}

export const Key = (props: KeyProps) => {
  return (
    <Pressable onPress={() => props.onPress(props.id)} style={styles.button}>
      <Text style={styles.text}>{props.id}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {

  },
  text: {

  },
});