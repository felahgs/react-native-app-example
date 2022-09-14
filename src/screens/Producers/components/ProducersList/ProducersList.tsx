import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { useRoute } from "@react-navigation/native";

import useProducers from "hooks/useProducers";
import useTexts from "hooks/useTexts";

import { ProducerCard } from "./ProducerCard";

import styles from "./styles";

interface ProducersProps {
  header: ({ topProducers }: { topProducers?: boolean }) => JSX.Element;
  topProducers?: boolean;
}

const ProducersList = ({
  header: Header,
  topProducers = false,
}: ProducersProps) => {
  const { list } = useProducers(topProducers);
  const { titleProducers, purchaseMessage } = useTexts();
  const [showMessage, setShowMessage] = useState(true);

  const routeParams = useRoute().params as {
    purchase: { name: string; timestamp: number };
  };
  const purchase = routeParams?.purchase.name;
  const purchaseTimestamp = routeParams?.purchase.timestamp;

  const message = purchaseMessage?.replace("$NOME", purchase);

  useEffect(() => {
    setShowMessage(!!purchase);

    if (purchase) {
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }, [purchase, purchaseTimestamp]);

  const ListHeader = () => (
    <>
      <Header topProducers={topProducers} />
      {showMessage && <Text style={styles.purchase}>{message}</Text>}
      <Text style={styles.title}>{titleProducers}</Text>
    </>
  );

  if (!list) {
    return <View />;
  }

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <ProducerCard {...item} />}
      keyExtractor={({ name }) => name}
      ListHeaderComponent={() => <ListHeader />}
    />
  );
};

export { ProducersList };
