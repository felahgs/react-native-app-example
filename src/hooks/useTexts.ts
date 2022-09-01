import { useState, useEffect } from "react";

import { fetchHeader } from "services/loadData";

export default function useTexts() {
  const [texts, setTexts] = useState({});

  useEffect(() => {
    const response = fetchHeader();
    setTexts(response);
  }, []);

  return texts;
}
