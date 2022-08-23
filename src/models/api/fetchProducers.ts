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
}
