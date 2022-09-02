import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Coracao from "assets/coracao.svg";
import Home from "assets/home.svg";

import ProducerRoutes from "./ProducerRoutes";
import TopProducersRoutes from "./TopProducersRoutes";

const Tab = createBottomTabNavigator();
const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            let Icon = Home;
            if (route.name === "Top Producers Tab") {
              Icon = Coracao;
            }

            return <Icon color={color} />;
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarActiveTintColor: "#2A9F85",
          tabBarInactiveTintColor: "#C7C7C7",
        })}>
        <Tab.Screen name={"Home Tab"} component={ProducerRoutes} />
        <Tab.Screen name={"Top Producers Tab"} component={TopProducersRoutes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
