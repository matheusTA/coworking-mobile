import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import normalize from "react-native-normalize";

import SearchPage from "../pages/Search";
import CompanyProfilePage from "../pages/CompanyProfile";
import SignOut from "../components/SignOut";

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

export default SearchRoutes;
