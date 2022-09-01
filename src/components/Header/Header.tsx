import React from "react";
import {
  Image,
  Dimensions,
  TouchableOpacity,
  ImageSourcePropType,
  Text,
} from "react-native";

import topo from "assets/topo.png";
import Gradient from "assets/gradiente.svg";
import BackIcon from "assets/voltar.svg";

const largura = Dimensions.get("screen").width;

import getStyles from "./styles";

interface HeaderProps {
  title: string;
  image?: ImageSourcePropType;
  height?: string | number;
}

const DEFAULT_HEIGHT = 270;

export function Header({
  title,
  image = topo,
  height = DEFAULT_HEIGHT,
}: HeaderProps) {
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
      <TouchableOpacity onPress={() => {}} style={styles.buttonBack}>
        <BackIcon color="white" style={styles.back} />
      </TouchableOpacity>
    </>
  );
}
