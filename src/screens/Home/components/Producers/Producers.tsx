import { View, Text, FlatList } from 'react-native';
import React from 'react';

import useProducers from '../../../../hooks/useProducers';

import { ProducerCard } from './ProducerCard';
import styles from './styles';

interface ProducersProps {
  header: () => JSX.Element;
}

const Producers = ({ header: Header }: ProducersProps) => {
  const { title, list } = useProducers();

  const ListHeader = () => (
    <>
      <Header />
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

export { Producers };
