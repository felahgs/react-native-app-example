import React from "react";
import { View, Image, Text, ImageSourcePropType } from "react-native";

import styles from "./styles";

export interface ItemProps {
  item: {
    name: string;
    image: ImageSourcePropType;
  };
}

export function Item({ item: { name, image } }: ItemProps) {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}
