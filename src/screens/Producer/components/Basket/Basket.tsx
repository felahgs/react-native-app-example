import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

// import { useNavigation } from "@react-navigation/core";

import styles from "./styles";

interface BasketProps {
  details: {
    name: string;
    image: ImageSourcePropType;
    description: string;
    price: string;
  };
  producer: {
    name: string;
    image: ImageSourcePropType;
  };
}

export function Basket({ details }: BasketProps) {
  // const navigation = useNavigation();
  const { name, image, description, price } = details;

  return (
    <TouchableOpacity style={styles.basket} onPress={() => {}}>
      <View style={styles.content}>
        <Image source={image} style={styles.image} />

        <View style={styles.texts}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
