import { StyleSheet, View, Text } from "react-native";
import { WORD_SIZE } from "./constants";

interface FieldProps
{
  word: string;
  current: string;
}

export const Field = (props: FieldProps) => {
  const generateTiles = () => Array.from({length: WORD_SIZE}).map((_, i) => {
    return (<Text key={i} style={styles.tile}>{props.current.charAt(i)}</Text>);
  });

  return (
    <View style={styles.container}>
      {generateTiles()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
  tile: {
    width: "18%",
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    fontSize: 35,
  }
});