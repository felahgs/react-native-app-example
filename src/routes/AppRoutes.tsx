import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TopProducers } from "screens";
import routes from "constants/routes";

import ProducerRoutes from "./ProducerRoutes";

const Tab = createBottomTabNavigator();
const AppRoutes = () => {
  const { HOME, TOP_PRODUCERS } = routes;

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={HOME} component={ProducerRoutes} />
        <Tab.Screen name={TOP_PRODUCERS} component={TopProducers} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
