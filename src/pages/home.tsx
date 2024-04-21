import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { ThemeContext, useTheme } from "../hooks/themeContext";

export const Home = () => {
  const { changeTheme } = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        width: "100%",
        height: "100%",
      }}
    >
      <Text style={{ color: theme.colors.text }}>Teste</Text>
      <Button onPress={changeTheme} title="Alterar" />
    </View>
  );
};
