import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StorybookButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="🐞"
      onPress={() => {
        navigation.navigate("Storybook");
      }}
    />
  );
};

export default StorybookButton;
