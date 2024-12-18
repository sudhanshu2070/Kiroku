import React, { useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/Home'; // Import your HomeScreen component
import SideMenu from '../components/SideMenu'; // Import your SideMenu component
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');

// Define navigation parameters for each screen
export type RootParamList = {
  Home: undefined;
};

// Create Stack Navigator
const Stack = createStackNavigator<RootParamList>();

const AppNavigator = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(width))[0]; // Off-screen initially

  // Use the correct type for navigation
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  // Open Menu
  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Close Menu
  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setMenuVisible(false));
  };

  // Menu items for the side menu
  const menuItems = ['Home', 'Profile', 'Settings'];

  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200EE', // Consistent background color
          },
          headerTintColor: '#ffffff', // Consistent text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerRight: () => (
              <TouchableOpacity onPress={() => openMenu()} style={styles.menuButton}>
                <Text style={styles.menuButtonText}>☰</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>

      {/* Conditional rendering of SideMenu */}
      {menuVisible && (
        <SideMenu
          menuItems={menuItems}
          slideAnim={slideAnim}
          onClose={closeMenu}
          navigation={navigation} // Pass the correctly typed navigation
        />
      )}
    </>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  menuButtonText: {
    fontSize: 24,
    color: '#ffffff',
    marginRight: 20, // Add some margin to the right for spacing
  },
  menuButton: {
    padding: 7,
  },
});