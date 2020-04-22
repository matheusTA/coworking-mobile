import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import DashboardRoutes from "./dashboard.routes";

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn" headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="DashboardRoutes" component={DashboardRoutes} />
    </Stack.Navigator>
  );
};

export default Routes;
