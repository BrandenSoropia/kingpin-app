import "react-native-gesture-handler";
import React from "react";
import { ThemeProvider } from "styled-components";
import { registerRootComponent } from "expo";
import { theme } from "ui-kit";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./store";
import { Provider } from "react-redux";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import StorybookUIRoot from "./storybook";

// Features
import ProfileConnectedNavigator from "./Profile";
import SkateparkFinderConnectedNavigator from "./SkateparkFinder";
import TrickerTrackerConnectedNavigator from "./TrickTracker";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ActionSheetProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <StatusBar />
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: theme.colors.black,
                inactiveTintColor: theme.colors.grey,
              }}
            >
              <Tab.Screen
                name="Skatepark Finder"
                component={SkateparkFinderConnectedNavigator}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="md-map" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={ProfileConnectedNavigator}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="md-person" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Trick Tracker"
                component={TrickerTrackerConnectedNavigator}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-list-box" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Storybook"
                component={StorybookUIRoot}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="md-book" size={size} color={color} />
                  ),
                }}
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
