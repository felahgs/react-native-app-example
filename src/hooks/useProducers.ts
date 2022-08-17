import { useState, useEffect } from 'react';

import { ProducerType } from 'models/api/fetchProducers';

import { fetchProducers } from 'services/loadData';

export default function useProducers() {
  const [title, setTitle] = useState<string>('');
  const [list, setList] = useState<ProducerType[]>([]);

  useEffect(() => {
    const request = fetchProducers();
    setTitle(request.title);
    setList(request.list);
  }, []);

  return { title, list };
}
