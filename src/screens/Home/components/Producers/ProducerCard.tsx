import { Text, View, Image, ImageSourcePropType } from "react-native";
import React from "react";

import styles from "./styles";

interface ProducerCardProps {
  name: string;
  image: ImageSourcePropType;
  distance?: string;
  stars?: number;
}
const ProducerCard = ({ name, image, distance }: ProducerCardProps) => {
  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel="logo da lojas"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </View>
  );
};

export { ProducerCard };
