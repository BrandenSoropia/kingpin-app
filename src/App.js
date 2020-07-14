import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import StorybookUI from "./storybook";
import { ThemeProvider } from "styled-components";
import { registerRootComponent } from "expo";
// TODO: Figure out how to absolute import with module-resolver!
import { theme, Text } from "./ui-kit";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text color="yellow">Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <StorybookUI />
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);

export default App;
