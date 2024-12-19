import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'T' && password === '1') {
      Alert.alert('Login Successful', 'Welcome to the Home Page!');
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#FFF8DC"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#FFF8DC"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c2c2c', // Dark gray background
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#ffffff', // White text
      marginBottom: 40,
    },
    input: {
      width: '100%',
      backgroundColor: '#4c4c4c', // Medium gray background for inputs
      borderRadius: 10,
      padding: 15,
      color: '#ffffff', // White text for inputs
      marginBottom: 20,
    },
    button: {
      width: '100%',
      backgroundColor: '#616161', // Glossy gray button
      borderRadius: 10,
      padding: 15,
      alignItems: 'center',
    },
    buttonText: {
      color: '#ffffff', // White text for button
      fontWeight: 'bold',
    },
    link: {
      color: '#b3b3b3', // Light gray text
      marginTop: 20,
    },
    linkText: {
        marginTop: 15,
        color: '#FFF8DC',
        fontSize: 16,
        textDecorationLine: 'underline',
      },
  });