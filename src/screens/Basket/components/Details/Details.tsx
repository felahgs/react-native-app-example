import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

import useTexts from "hooks/useTexts";

import styles from "./styles";

interface DetailsProps {
  name: string;
  producer: {
    name: string;
    image: ImageSourcePropType;
  };
  description: string;
  price: string;
}

export function Details({ name, producer, description, price }: DetailsProps) {
  const { buyButton } = useTexts();

  return (
    <>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.farm}>
        <Image source={producer.image} style={styles.imageFarm} />
        <Text style={styles.farmName}>{producer.name}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.textButton}>{buyButton}</Text>
      </TouchableOpacity>
    </>
  );
}
