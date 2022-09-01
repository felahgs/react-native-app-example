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
  baskets: BasketItemProps[];
}

const Producer = () => {
  const route = useRoute();
  const { titleProducer, titleCart } = useTexts() as {
    titleProducer: string;
    titleCart: string;
  };
  const { name, image, baskets } = route.params as ProducerProps;

  const ListHeader = () => {
    return (
      <>
        {/* <View>Header</View> */}
        <Header title={titleProducer} image={topo} height={150} />
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image source={image} style={styles.producerImage} />
            <Text style={styles.producer}>{name}</Text>
          </View>

          <Text style={styles.baskets}>{titleCart}</Text>
        </View>
      </>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={ListHeader}
      data={baskets}
      renderItem={({ item }) => <Basket {...item} producer={{ name, image }} />}
      style={styles.list}
    />
  );
};

export { Producer };
