import React from "react";
import { SafeAreaView } from "react-native";
import { ThemeProvider } from "./src/hooks/themeContext";
import { Home } from "./src/pages/home";

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
