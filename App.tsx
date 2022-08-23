import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, TopProducers } from 'screens';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Producers" component={Home} />
          <Tab.Screen name="TopProducers" component={TopProducers} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
