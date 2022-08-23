import React from "react";
import { View, Text, FlatList } from "react-native";

import useProducers from "hooks/useProducers";

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
  const { title, list } = useProducers(topProducers);

  const ListHeader = () => (
    <>
      <Header topProducers={topProducers} />
      <Text style={styles.title}>{title}</Text>
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
