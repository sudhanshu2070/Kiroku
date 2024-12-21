import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppNavigator from "./AppNavigator"; // Your existing stack navigator

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="App"
        component={AppNavigator}
        options={{ headerShown: false }} // Hide default drawer header
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;