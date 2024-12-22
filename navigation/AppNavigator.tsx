import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProfileScreen from "../screens/ProfileScreen"; 
import { globalStyles } from "../styles/globalStyles"; 
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  // Function to open the Drawer
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: "#add8e6" }, 
        headerTintColor: "#ffffff",
        headerTitleStyle: globalStyles.headerTitle, 
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
      {/* <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
        }}
      /> */}

      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;