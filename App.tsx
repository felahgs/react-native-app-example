import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { Home } from "./src/screens/Home";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
