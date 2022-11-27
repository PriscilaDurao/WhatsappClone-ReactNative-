import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.js";

export const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
