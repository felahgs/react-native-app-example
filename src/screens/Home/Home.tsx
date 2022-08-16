import { View } from 'react-native';
import React from 'react';

import { Header } from './components/Header';
import { Producers } from './components/Producers';

const Home = () => {
  return (
    <View>
      <Producers header={Header} />
    </View>
  );
};

export { Home };
