// Error.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sorry, no result found!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});

export default Error;