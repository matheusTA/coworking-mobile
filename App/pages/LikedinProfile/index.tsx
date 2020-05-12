import React from "react";
import { WebView } from "react-native-webview";
import { useRoute, RouteProp } from "@react-navigation/native";

type RouteParamList = {
  linkedinProfile: string;
};

const LikedinProfile: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParamList>, string>>();
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: route.params.linkedinProfile }}
    />
  );
};

export default LikedinProfile;
