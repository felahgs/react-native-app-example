import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProducerRoutes from "./ProducerRoutes";
import TopProducersRoutes from "./TopProducersRoutes";

const Tab = createBottomTabNavigator();
const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name={"Home Tab"} component={ProducerRoutes} />
        <Tab.Screen name={"Top Producers Tab"} component={TopProducersRoutes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
