import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import AppNavigator from './navigation/Navigation'; // Assuming AppNavigator is your navigator component

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;