import { View, Text, FlatList, ImageSourcePropType } from 'react-native';
import React, { useEffect, useState } from 'react';

import { fetchProducers } from '../../../../services/loadData';

import { ProducerCard } from './ProducerCard';
import styles from './styles';

interface ProducersContentProps {
  title: string;
  list: Array<{
    name: string;
    image: ImageSourcePropType;
    distance: string;
    stars: number;
  }>;
}

interface ProducersProps {
  header: () => JSX.Element;
}

const Producers = ({ header: Header }: ProducersProps) => {
  const [producers, setProducersContent] = useState<ProducersContentProps>(
    {} as ProducersContentProps,
  );

  useEffect(() => {
    setProducersContent(fetchProducers());
  }, []);

  const ListHeader = () => (
    <>
      <Header />
      <Text style={styles.title}>{producers.title}</Text>
    </>
  );

  if (!producers.list) {
    return <View />;
  }

  return (
    <FlatList
      data={producers.list}
      renderItem={({ item }) => <ProducerCard {...item} />}
      keyExtractor={({ name }) => name}
      ListHeaderComponent={() => <ListHeader />}
    />
  );
};

export { Producers };
