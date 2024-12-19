import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { globalStyles } from "../styles/globalStyles"; // Import global styles

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: "#add8e6" }, // Light blue background
        headerTintColor: "#ffffff",
        headerTitleStyle: globalStyles.headerTitle, // Apply global header title style
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }} // Hide header for Login
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }} // Hide header for SignUp
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;