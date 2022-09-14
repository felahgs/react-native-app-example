import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import routes from "constants/routes";
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

interface MainScreenProps {
  [key: string]: {
    purchase: {
      name: string;
      price: string;
      timestamp: number;
    };
  };
}

const { HOME } = routes;

export function Details({ name, producer, description, price }: DetailsProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainScreenProps>>();
  const { buyButton } = useTexts();

  const handleNavigation = () =>
    navigation.navigate(HOME, {
      purchase: { name, timestamp: new Date().valueOf(), price },
    });

  return (
    <>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.farm}>
        <Image source={producer.image} style={styles.imageFarm} />
        <Text style={styles.farmName}>{producer.name}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text style={styles.textButton}>{buyButton}</Text>
      </TouchableOpacity>
    </>
  );
}
