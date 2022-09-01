import React from "react";
import { Text as NativeText } from "react-native";

import style from "./style";

interface TextProps {
  children: JSX.Element[] | JSX.Element | string;
  style: { [key: string]: string | number };
}

export function Text({ children, style: customStyle }: TextProps) {
  let textStyle = style.texto;

  if (customStyle?.fontWeight === "bold") {
    customStyle = style.textoNegrito;
  }

  return <NativeText style={[customStyle, textStyle]}>{children}</NativeText>;
}
