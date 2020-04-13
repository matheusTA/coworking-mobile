import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import normalize from "react-native-normalize";

import SearchPage from "../pages/Search";
import CompanyProfilePage from "../pages/CompanyProfile";

const Stack = createStackNavigator();

const SearchRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SearchPage">
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
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

export default SearchRoutes;
