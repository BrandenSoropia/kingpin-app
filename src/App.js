import "react-native-gesture-handler";
import React from "react";
import StorybookUI from "./storybook";
import { ThemeProvider } from "styled-components";
import { registerRootComponent } from "expo";
import { theme, StorybookButton } from "ui-kit";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileContainer } from "./Profile";
import { EditContainer } from "./Profile/Edit";
import store from "./store";
import { Provider } from "react-redux";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

const Stack = createStackNavigator();

const App = () => {
  return (
    <ActionSheetProvider>
      <NavigationContainer initialRouteName="Storybook">
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Stack.Navigator>
              <Stack.Screen
                name="Profile"
                component={ProfileContainer}
                options={{
                  title: "Profile",
                  headerRight: () => <StorybookButton />,
                }}
              />
              <Stack.Screen
                name="Edit Profile"
                component={EditContainer}
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
    </ActionSheetProvider>
  );
};

registerRootComponent(App);

export default App;
