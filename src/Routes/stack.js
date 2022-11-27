import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Message from "../screens/Message";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Message" component={Message} />
    </Navigator>
  );
}
