import { useState, useEffect } from "react";

import { ProducerType } from "models/api/fetchProducers";
import { fetchProducers } from "services/loadData";

export default function useProducers(topProducers?: boolean) {
  const [title, setTitle] = useState<string>("");
  const [list, setList] = useState<ProducerType[]>([]);

  useEffect(() => {
    const request = fetchProducers();
    const producers = topProducers
      ? request.list.filter(producer => producer.stars > 3)
      : request.list;

    setTitle(request.title);
    setList(producers);
  }, [topProducers]);

  return { title, list };
}
