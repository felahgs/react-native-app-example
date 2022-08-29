import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, TopProducers } from "screens";

const Tab = createBottomTabNavigator();
const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Producers" component={Home} />
        <Tab.Screen name="TopProducers" component={TopProducers} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
