import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MapPage from "../pages/Map";
import CompanyProfilePage from "../pages/CompanyProfile";

const Stack = createStackNavigator();

const MapRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="MapPage">
      <Stack.Screen name="MapPage" component={MapPage} />
      <Stack.Screen name="CompanyProfilePage" component={CompanyProfilePage} />
    </Stack.Navigator>
  );
};

export default MapRoutes;
