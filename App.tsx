import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AppNavigator from "./navigation/AppNavigator"; // Import your navigator
import DrawerNavigator from "./navigation/DrawerNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    Playwrite: require("./assets/fonts/Playwrite.ttf"),
    Christmas: require("./assets/fonts/Christmas.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null; // Return null while fonts are loading
  }

//   return (
//     <View style={{ flex: 1 }} onLayout={handleOnLayout}>
//       <NavigationContainer>
//         <AppNavigator />
//       </NavigationContainer>
//     </View>
//   );
// }

  return (
  <View style={{ flex: 1 }} onLayout={handleOnLayout}>

    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
    </View>
  );
};