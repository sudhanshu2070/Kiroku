import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: '#2c2c2c' },
        headerTintColor: '#ffffff', 
        headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        // options={{ title: 'Login' }} // Title for the Login screen
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
        // options={{ title: 'Sign Up' }} // Title for the Sign-Up screen
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Home' }} // Title for the Home screen
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;