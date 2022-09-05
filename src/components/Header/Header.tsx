import React from "react";
import {
  Image,
  Dimensions,
  TouchableOpacity,
  ImageSourcePropType,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import topo from "assets/topo.png";
import Gradient from "assets/gradiente.svg";
import BackIcon from "assets/voltar.svg";

import getStyles from "./styles";

interface HeaderProps {
  title?: string;
  image?: ImageSourcePropType;
  height?: string | number;
}

const DEFAULT_HEIGHT = 270;
const largura = Dimensions.get("screen").width;

export function Header({
  title = "",
  image = topo,
  height = DEFAULT_HEIGHT,
}: HeaderProps) {
  const navigation = useNavigation();
  const styles = getStyles(height);

  return (
    <>
      <Image source={image} style={styles.header} />
      <Gradient
        width={largura}
        height={(130 / 360) * largura}
        style={styles.gradient}
      />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.buttonBack}>
        <BackIcon color="white" style={styles.back} />
      </TouchableOpacity>
    </>
  );
}
