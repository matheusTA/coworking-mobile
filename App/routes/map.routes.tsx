import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import normalize from "react-native-normalize";

import MapPage from "../pages/Map";
import CompanyProfilePage from "../pages/CompanyProfile";

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
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert("This is a button!")}
          //     title="Info"
          //     color="#000"
          //   />
          // ),
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
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert("This is a button!")}
          //     title="Info"
          //     color="#000"
          //   />
          // ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MapRoutes;
