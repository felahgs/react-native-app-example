import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Producer } from "screens";
import routes from "constants/routes";

const Stack = createNativeStackNavigator();

export default function ProducerRoutes() {
  const { PRODUCER, PRODUCERS } = routes;
  return (
    <Stack.Navigator>
      <Stack.Screen name={PRODUCERS} component={Home} />
      <Stack.Screen name={PRODUCER} component={Producer} />
    </Stack.Navigator>
  );
}
