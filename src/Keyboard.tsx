import { StyleSheet, View } from "react-native";
import { KEY_WIDTH, QWERTY_PATTERN } from "./constants";
import { Key } from "./Key";

interface KeyboardProps
{
  onPress: (key: string) => void;
}

export const Keyboard = (props: KeyboardProps) => {
  const generateRow = (row: string) => Array.from(row).map((key) => {
    return (<Key id={key} onPress={props.onPress} key={key} />);
  });
  const generateKeyboard = () => QWERTY_PATTERN.map((row, index) => {
    return (<View style={styles.row} key={row}>{generateRow(row)}</View>);
  });

  return (
    <View style={styles.container}>{generateKeyboard()}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
});