import { Pressable, StyleSheet, View, Text } from "react-native";
import { QWERTY_PATTERN } from "./constants";
import { Key } from "./Key";

interface KeyboardProps
{
  onPress: (key: string) => void;
}

export const Keyboard = (props: KeyboardProps) => {
  const generateRow = (row: string) => Array.from(row).map((key: string) => {
    return (<Key id={key} onPress={props.onPress} key={key} />);
  });
  const generateKeyboard = () => QWERTY_PATTERN.map((row: string) => {
    return (<View style={styles.row}>{generateRow(row)}</View>);
  });

  return (
    <View style={styles.container}>{generateKeyboard()}</View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  row: {

  },
});