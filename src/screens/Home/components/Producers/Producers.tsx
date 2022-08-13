import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import { fetchProducers } from "../../../../services/loadData";

import styles from "./styles";

interface ProducersContentProps {
  titulo: string;
  lista: Array<{
    nome: string;
    imagem: string;
    distancia: string;
    estrelas: number;
  }>;
}

interface ProducersProps {
  header: () => JSX.Element;
}

const Producers = ({ header: Header }: ProducersProps) => {
  const [producers, setProducersContent] = useState<ProducersContentProps>(
    {} as ProducersContentProps,
  );

  useEffect(() => {
    setProducersContent(fetchProducers());
  }, []);

  const ListHeader = () => (
    <>
      <Header />
      <Text style={styles.title}>{producers.titulo}</Text>
    </>
  );

  if (!producers.lista) {
    return <View />;
  }

  return (
    <FlatList
      data={producers.lista}
      renderItem={({ item: { nome } }) => <Text>{nome}</Text>}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => <ListHeader />}
    />
  );
};

export { Producers };
