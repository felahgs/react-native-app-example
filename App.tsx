import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

import AppRoutes from "routes/AppRoutes";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <AppRoutes />
    </SafeAreaView>
  );
};

export default App;
