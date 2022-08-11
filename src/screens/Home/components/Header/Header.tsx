import { View, Text, Image } from "react-native";
import React from "react";

import logo from "../../../../../assets/logo.png";

import styles from "./styles";

function Header() {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcome}>Olá Felipe</Text>
      <Text style={styles.caption}>Encontre os melhores produtores!</Text>
    </View>
  );
}

export { Header };
