import React from "react";
import {
  Image,
  Dimensions,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

import { Text } from "components/Text";
import topo from "assets/topo.png";

import Gradiente from "../assets/gradiente.svg";
import VoltarSVG from "../assets/voltar.svg";

const largura = Dimensions.get("screen").width;

import styles from "./styles";

interface HeaderProps {
  title: string;
  image: ImageSourcePropType;
}

export default function Header({ title, image = topo }: HeaderProps) {
  return (
    <>
      <Image source={image} style={styles.header} />
      <Gradiente
        width={largura}
        height={(130 / 360) * largura}
        style={styles.gradient}
      />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => {}} style={styles.buttonBack}>
        <VoltarSVG color="white" style={styles.back} />
      </TouchableOpacity>
    </>
  );
}
