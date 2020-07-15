import { StatusBar } from "expo-status-bar";
import React from "react";
import StorybookUI from "./storybook";
import { ThemeProvider } from "styled-components";
import { registerRootComponent } from "expo";
import { theme, Flex } from "ui-kit";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex flex={1}>
        <StatusBar style="auto" />
        <StorybookUI />
      </Flex>
    </ThemeProvider>
  );
};

registerRootComponent(App);

export default App;
