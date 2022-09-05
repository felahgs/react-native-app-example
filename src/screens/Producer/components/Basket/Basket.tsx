import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
  items: Array<any>;
}

export function Basket({ details, items, producer }: BasketProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { name, image, description, price } = details;

  const handleNavigation = () =>
    navigation.navigate("Basket", {
      details,
      items,
      producer,
    });

  return (
    <TouchableOpacity style={styles.Basket} onPress={handleNavigation}>
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
