import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import StorybookUI from "./storybook";
import { ThemeProvider } from "styled-components";
import { registerRootComponent } from "expo";
import { theme, Flex, StorybookButton } from "ui-kit";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "./Profile";
import { ConnectedEdit } from "./Profile/Edit";
import store from "./store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer initialRouteName="Storybook">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                title: "Profile",
                headerRight: () => <StorybookButton />,
              }}
            />
            <Stack.Screen
              name="Edit Profile"
              component={ConnectedEdit}
              options={{
                title: "Edit Profile",
                headerRight: () => <StorybookButton />,
              }}
            />
            <Stack.Screen
              name="Storybook"
              component={StorybookUI}
              options={{
                title: "Storybook",
              }}
            />
          </Stack.Navigator>
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

registerRootComponent(App);

export default App;
