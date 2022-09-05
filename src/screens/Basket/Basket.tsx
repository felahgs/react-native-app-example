import React from "react";
import { FlatList, Text, View } from "react-native";

import { useRoute } from "@react-navigation/native";

import { Header } from "components/Header";
import useTexts from "hooks/useTexts";

import { Details } from "./components/Details";
import { Item } from "./components/Item";

import styles from "./styles";

export function Basket() {
  const route = useRoute();
  const { headerBasket, titleItems } = useTexts();

  const { details, items, producer } = route.params as any;

  return (
    <>
      <FlatList
        data={items}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Header title={headerBasket} />
              <View style={styles.basket}>
                <Details {...details} producer={producer} />
                <Text style={styles.title}>{titleItems}</Text>
              </View>
            </>
          );
        }}
        style={styles.list}
      />
    </>
  );
}
