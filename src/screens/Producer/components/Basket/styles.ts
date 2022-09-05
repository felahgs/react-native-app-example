import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Basket: {
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 6,
  },
  texts: {
    flex: 1,
    marginLeft: 8,
  },
  name: {
    color: "#464646",
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "bold",
  },
  description: {
    color: "#A3A3A3",
    fontSize: 14,
    lineHeight: 22,
  },
  price: {
    color: "#2A9F85",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
    marginTop: 4,
  },
});
