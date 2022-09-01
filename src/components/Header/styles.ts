import { StyleSheet } from "react-native";

const getStyles = (height?: string | number) =>
  StyleSheet.create({
    header: {
      width: "100%",
      height: height,
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

export default getStyles;
