import "react-native-gesture-handler";
import React from "react";
import StorybookUI from "./storybook";
import { ThemeProvider } from "styled-components";
import { registerRootComponent } from "expo";
import { theme, StorybookButton, View } from "ui-kit";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./store";
import { Provider } from "react-redux";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Features
import ProfileConnectedNavigator from "./Profile";
import SkateparkFinderConnectedNavigator from "./SkateparkFinder";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ActionSheetProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <StatusBar />
            <Tab.Navigator>
              <Tab.Screen
                name="Skatepark"
                component={SkateparkFinderConnectedNavigator}
              />
              <Tab.Screen
                name="Profile"
                component={ProfileConnectedNavigator}
              />
            </Tab.Navigator>
          </Provider>
        </ThemeProvider>
      </NavigationContainer>
    </ActionSheetProvider>
  );
};

registerRootComponent(App);

export default App;
