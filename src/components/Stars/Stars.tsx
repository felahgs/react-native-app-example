import { View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import star from "../../../assets/estrela.png";
import grayStar from "../../../assets/estrelaCinza.png";

import styles from "./styles";

interface StarsProps {
  value: number;
  editable?: boolean;
  zoomed: boolean;
}

const Stars = ({
  value: oldValue,
  editable = false,
  zoomed = false,
}: StarsProps) => {
  const [value, setValue] = useState(oldValue);

  const starStyle = zoomed ? styles.bigStar : styles.star;
  const getImage = (index: number) => (index < value ? star : grayStar);

  const RenderStars = () => {
    const starsList = [];
    for (let i = 0; i < 5; i++) {
      starsList.push(
        <TouchableOpacity
          key={i}
          onPress={() => setValue(i + 1)}
          disabled={!editable}>
          <Image source={getImage(i)} style={starStyle} />
        </TouchableOpacity>,
      );
    }

    return <View style={styles.stars}>{starsList.map(item => item)}</View>;
  };

  return <RenderStars />;
};

export { Stars };
