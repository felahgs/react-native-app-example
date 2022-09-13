import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useReducer } from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import routes from "constants/routes";
import { Stars } from "components/Stars";
import { ProducerType as ProducerCardProps } from "models/api/fetchProducers";
import { PageStackProps } from "models/routes/ProducerPage";

import styles from "./styles";

const { PRODUCER } = routes;

const ProducerCard = ({
  name,
  image,
  distance,
  stars,
  Baskets,
}: ProducerCardProps) => {
  const [selected] = useReducer(value => !value, false);
  const navigation = useNavigation<NativeStackNavigationProp<PageStackProps>>();

  const producerProps = { name, image, Baskets };

  const handleNavigation = () =>
    navigation.navigate(PRODUCER, { ...producerProps });

  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.card}>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel="logo da lojas"
      />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars value={stars} zoomed={selected} editable={selected} />
        </View>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { ProducerCard };
