import { ImageSourcePropType } from "react-native";

export interface ProducersResponse {
  title: string;
  list: Array<ProducerType>;
}

export interface ProducerType {
  name: string;
  image: ImageSourcePropType;
  distance: string;
  stars: number;
  baskets: BasketItemProps[];
}

export interface BasketItemProps {
  details: {
    name: string;
    description: string;
    price: string;
    image: ImageSourcePropType;
  };
  items: Array<{
    name: string;
    image: ImageSourcePropType;
  }>;
}
