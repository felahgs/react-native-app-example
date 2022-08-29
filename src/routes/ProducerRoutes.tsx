import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Producer } from "screens";
import routes from "constants/routes";

const Stack = createNativeStackNavigator();

interface ProducerRoutesProps {
  RootComponent?: () => JSX.Element;
  rootPath?: string;
}

export default function ProducerRoutes({
  RootComponent = Home,
  rootPath = routes.HOME,
}: ProducerRoutesProps) {
  const { PRODUCER } = routes;
  return (
    <Stack.Navigator>
      <Stack.Screen name={rootPath} component={RootComponent} />
      <Stack.Screen name={PRODUCER} component={Producer} />
    </Stack.Navigator>
  );
}
