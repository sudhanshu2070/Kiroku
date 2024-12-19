    import React, { useState } from 'react';
    import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

    export default function SignUpScreen({ navigation }: any) {    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Navigate to Home on successful signup
        navigation.navigate('Home');
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Create an Account</Text>
        <TextInput 
            style={styles.input} 
            placeholder="Name" 
            placeholderTextColor="#999" 
            onChangeText={setName} 
            value={name} 
        />
        <TextInput 
            style={styles.input} 
            placeholder="Email" 
            placeholderTextColor="#999" 
            onChangeText={setEmail} 
            value={email} 
        />
        <TextInput 
            style={styles.input} 
            placeholder="Password" 
            placeholderTextColor="#999" 
            secureTextEntry 
            onChangeText={setPassword} 
            value={password} 
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c2c2c',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 40,
    },
    input: {
        width: '100%',
        backgroundColor: '#4c4c4c',
        borderRadius: 10,
        padding: 15,
        color: '#ffffff',
        marginBottom: 20,
    },
    button: {
        width: '100%',
        backgroundColor: '#616161',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    link: {
        color: '#b3b3b3',
        marginTop: 20,
    },
    });