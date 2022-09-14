import { useState, useEffect } from "react";

import { fetchHeader } from "services/loadData";

interface useTextProps {
  welcoming: string;
  caption: string;
  captionTopProducers?: string;
  titleProducers: string;
  titleProducer: string;
  titleBasket: string;
  headerBasket: string;
  buyButton: string;
  purchaseMessage: string;
  titleItems: string;
}

export default function useTexts(): useTextProps {
  const [texts, setTexts] = useState({} as useTextProps);

  useEffect(() => {
    const response = fetchHeader();
    setTexts(response);
  }, []);

  return texts;
}
