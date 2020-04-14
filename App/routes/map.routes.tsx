import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import normalize from "react-native-normalize";

import MapPage from "../pages/Map";
import CompanyProfilePage from "../pages/CompanyProfile";
import SignOut from "../components/SignOut";

const Stack = createStackNavigator();

const MapRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="MapPage">
      <Stack.Screen
        name="MapPage"
        component={MapPage}
        options={{
          headerTitle: "Coworking",
          headerTitleStyle: {
            color: "#F95F62",
            fontWeight: "bold",
            fontSize: normalize(30),
          },
          headerTitleAlign: "center",
          headerRight: () => <SignOut />,
          headerRightContainerStyle: {
            marginRight: normalize(15),
            marginTop: normalize(7),
          },
        }}
      />
      <Stack.Screen
        name="CompanyProfilePage"
        component={CompanyProfilePage}
        options={{
          headerTitle: "Coworking",
          headerTitleStyle: {
            color: "#F95F62",
            fontWeight: "bold",
            fontSize: normalize(30),
          },
          headerTitleAlign: "center",
          headerBackTitle: "Voltar",
          headerBackTitleVisible: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MapRoutes;
