import { ImageSourcePropType } from "react-native";

import { BasketItemProps } from "models/api/fetchProducers";

export interface PageStackProps {
  [key: string]: {
    name: string;
    image: ImageSourcePropType;
    Baskets: BasketItemProps[];
  };
}
