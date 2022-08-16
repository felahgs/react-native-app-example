import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
// import React from "react";

import { fetchHeader } from '../../../../services/loadData';

import logo from '../../../../../assets/logo.png';

import styles from './styles';

interface HeaderProps {
  welcoming: string;
  caption: string;
}

const Header = () => {
  const [headerContent, setHeaderContent] = useState<HeaderProps>(
    {} as HeaderProps,
  );

  useEffect(() => {
    setHeaderContent(fetchHeader());
  }, []);

  useEffect(() => {
    console.log('headerContent', headerContent);
  }, [headerContent]);

  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcome}>{headerContent.welcoming}</Text>
      <Text style={styles.caption}>Encontre os melhores produtores!</Text>
    </View>
  );
};

export { Header };
