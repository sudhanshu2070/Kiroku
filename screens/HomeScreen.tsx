import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles"; // Import global styles

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.headerTitle}>Welcome to the Home Page!</Text>
      <Text style={globalStyles.bodyText}>Enjoy using custom fonts globally!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEB887",
    alignItems: "center",
    justifyContent: "center",
  },
});