import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Page!</Text>
      <Text style={styles.text}>Welcome to the Home Page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Background color for the home screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  text: {
    fontSize: 18, // Font size for the text
    color: '#333', // Text color
  },
});

export default Home;