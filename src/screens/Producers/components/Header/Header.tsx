import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";

import { fetchHeader } from "services/loadData";
import logo from "assets/logo.png";

import styles from "./styles";

interface HeaderProps {
  topProducers?: boolean;
}

interface ContentProps {
  welcoming: string;
  caption: string;
  captionTopProducers: string;
}

const Header = ({ topProducers }: HeaderProps) => {
  const [headerContent, setHeaderContent] = useState<ContentProps>(
    {} as ContentProps,
  );

  const { welcoming, caption, captionTopProducers } = headerContent;

  useEffect(() => {
    setHeaderContent(fetchHeader());
  }, []);

  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcome}>{topProducers ? "" : welcoming}</Text>
      <Text style={styles.caption}>
        {topProducers ? captionTopProducers : caption}
      </Text>
    </View>
  );
};

export { Header };
