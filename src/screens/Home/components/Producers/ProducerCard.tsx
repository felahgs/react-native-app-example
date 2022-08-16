import {
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import { Stars } from '../../../../components/Stars';

import styles from './styles';

interface ProducerCardProps {
  name: string;
  image: ImageSourcePropType;
  distance?: string;
  stars: number;
}
const ProducerCard = ({ name, image, distance, stars }: ProducerCardProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelected(!selected)}>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel="logo da lojas"
      />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars value={stars} zoomed={selected} editable={selected} />
        </View>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { ProducerCard };
