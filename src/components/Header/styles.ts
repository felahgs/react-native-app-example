import { StyleSheet } from "react-native";

const defaultSize = 270;

export default StyleSheet.create({
  header: {
    width: "100%",
    height: defaultSize,
  },
  gradient: {
    position: "absolute",
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  buttonBack: {
    position: "absolute",
    padding: 17,
  },
  back: {
    width: 24,
    height: 24,
  },
});
