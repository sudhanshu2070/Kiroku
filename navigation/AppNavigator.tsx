import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons"; // Install react-native-vector-icons if not already installed

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

import ProfileScreen from "../screens/ProfileScreen"; // Add a ProfileScreen for navigation
import { globalStyles } from "../styles/globalStyles"; // Import global styles

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "#add8e6" }, // Light blue background
        headerTintColor: "#ffffff",
        headerTitleStyle: globalStyles.headerTitle, // Apply global header title style
        headerRight: () => (

          <TouchableOpacity
            style={{ marginRight: 15 }} // Add some margin to the icon
            onPress={() => navigation.navigate("Profile")} // Navigate to the Profile page
          >
            <Icon name="account-circle" size={28} color="#ffffff" />
          </TouchableOpacity>
        ),
      })}
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
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;