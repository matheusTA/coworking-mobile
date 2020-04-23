import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { useAuth } from "../contexts/auth";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import DashboardRoutes from "./dashboard.routes";

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Stack.Navigator initialRouteName="DashboardRoutes" headerMode="none">
    <Stack.Screen name="DashboardRoutes" component={DashboardRoutes} />
  </Stack.Navigator>
);

const AppRoutes: React.FC = () => (
  <Stack.Navigator initialRouteName="SignIn" headerMode="none">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  return signed ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
