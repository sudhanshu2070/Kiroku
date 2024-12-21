import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProfileScreen from "../screens/ProfileScreen"; // Add a ProfileScreen for navigation
import { globalStyles } from "../styles/globalStyles"; // Import global styles

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  // Type the navigation object to avoid TypeScript errors
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  // Function to open the Drawer
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: "#add8e6" }, // Light blue background
        headerTintColor: "#ffffff",
        headerTitleStyle: globalStyles.headerTitle, // Apply global header title style
      }}
    >
      {/* Login Screen */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }} // Hide header for Login
      />

      {/* SignUp Screen */}
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
          // headerLeft: () => (
          //   <TouchableOpacity onPress={openDrawer} style={{ marginLeft: 15 }}>
          //     <Icon name="menu" size={28} color="#ffffff" />
          //   </TouchableOpacity>
          // ),
        }}
      />

      {/* Home Screen */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerLeft: () => (
            <TouchableOpacity onPress={openDrawer} style={{ marginLeft: 15 }}>
              <Icon name="menu" size={28} color="#ffffff" />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Profile Screen */}
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerLeft: () => (
            <TouchableOpacity onPress={openDrawer} style={{ marginLeft: 15 }}>
              <Icon name="menu" size={28} color="#ffffff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;