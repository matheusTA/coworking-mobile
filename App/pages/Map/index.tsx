import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

export default function Map() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate("CompanyProfilePage")}
      />
    </View>
  );
}
