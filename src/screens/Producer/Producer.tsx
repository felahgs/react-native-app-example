import { FlatList, Text, ImageSourcePropType, View, Image } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";

import { Header } from "components/Header";
import { BasketItemProps } from "models/api/fetchProducers";
import useTexts from "hooks/useTexts";
import topo from "assets/produtores/topo.png";

import { Basket } from "./components/Basket";

import styles from "./styles";

interface ProducerProps {
  name: string;
  image: ImageSourcePropType;
  Baskets: BasketItemProps[];
}

const Producer = () => {
  const route = useRoute();
  const { titleProducer, titleBasket } = useTexts();
  const { name, image, Baskets } = route.params as ProducerProps;

  const ListHeader = () => {
    return (
      <>
        <Header title={titleProducer} image={topo} height={150} />
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image source={image} style={styles.producerImage} />
            <Text style={styles.producer}>{name}</Text>
          </View>

          <Text style={styles.Baskets}>{titleBasket}</Text>
        </View>
      </>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={ListHeader}
      data={Baskets}
      renderItem={({ item }) => <Basket {...item} producer={{ name, image }} />}
      style={styles.list}
    />
  );
};

export { Producer };
