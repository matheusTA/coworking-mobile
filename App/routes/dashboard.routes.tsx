import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import MapRoutes from "./map.routes";
import SearchRoutes from "./search.routes";

const Tab = createBottomTabNavigator();

const DashboardRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="MapRoutes"
      tabBarOptions={{ activeTintColor: "#F95F62" }}
    >
      <Tab.Screen
        name="MapRoutes"
        component={MapRoutes}
        options={{
          tabBarLabel: "Mapa",
          tabBarIcon: ({ color, focused, size }) => {
            const iconName = `map-marked${focused ? "" : "-alt"}`;
            return <FontAwesome5 name={iconName} color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="SearchRoutes"
        component={SearchRoutes}
        options={{
          tabBarLabel: "Pesquisar",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search-location" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardRoutes;
