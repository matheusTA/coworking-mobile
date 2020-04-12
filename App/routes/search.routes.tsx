import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchPage from "../pages/Search";
import CompanyProfilePage from "../pages/CompanyProfile";

const Stack = createStackNavigator();

const SearchRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SearchPage">
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="CompanyProfilePage" component={CompanyProfilePage} />
    </Stack.Navigator>
  );
};

export default MapRoutes;
