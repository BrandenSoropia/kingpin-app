import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import StorybookUI from "./storybook";
import { ThemeProvider } from "styled-components";
import { registerRootComponent } from "expo";
import { theme, Flex } from "ui-kit";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Flex flex={1}>
          <StatusBar style="auto" />
          <StorybookUI />
        </Flex>
      </ThemeProvider>
    </NavigationContainer>
  );
};

registerRootComponent(App);

export default App;
