import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screens/ProfileScreen";
import Finance from "../components/Finance";
import AppNavigator from "./AppNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Home1">
      <Drawer.Screen
        name="Home1"
        component={AppNavigator}
        options={{
          headerShown:false
        }}
      />

      {/* Profile Screen */}
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
        }}
      />

      <Drawer.Screen
        name="Finance"
        component={Finance}
        options={{
          title: "Finance",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;