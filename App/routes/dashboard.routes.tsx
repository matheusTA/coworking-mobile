import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MapRoutes from "./map.routes";
import SearchRoutes from "./search.routes";

const Tab = createBottomTabNavigator();

const DashboardRoutes: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="MapRoutes">
      <Tab.Screen name="MapRoutes" component={MapRoutes} />
      <Tab.Screen name="SearchRoutes" component={SearchRoutes} />
    </Tab.Navigator>
  );
};

export default DashboardRoutes;
