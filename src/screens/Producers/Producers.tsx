import { View } from 'react-native';
import React from 'react';

import { Header } from './components/Header';
import { ProducersList } from './components/ProducersList';

interface ProducersProps {
  topProducers?: boolean;
}

const Producers = ({topProducers}: ProducersProps) => {
  return (
    <View>
      <ProducersList topProducers={topProducers} header={Header} />
    </View>
  );
};

export { Producers };
