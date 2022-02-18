import { Dimensions } from "react-native";

export const WORD_SIZE = 5;
export const NB_TRIES = 6;
export const QWERTY_PATTERN = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVNM"];
export const KEY_WIDTH = (Dimensions.get("window").width - 5 * 10) / 10;
export const KEY_HEIGHT = KEY_WIDTH * 1.5;