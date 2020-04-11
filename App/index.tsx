import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import SignIn from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SignIn />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
