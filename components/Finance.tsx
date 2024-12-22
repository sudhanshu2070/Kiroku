import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import SideMenu from './SideMenu';

const { width } = Dimensions.get('window');

const Finance = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(width))[0];

  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setMenuVisible(false));
  };

  //const financeMenuItems = ['Dashboard', 'Reports', 'Budgets', 'Transactions'];

  return (
    <View style={styles.container}>
      {/* <View style={styles.titleBar}>
        <Text style={styles.titleText}>Finance</Text>
        <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>☰</Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.content}>
        <Text>Welcome to the Finance Page!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  titleBar: {
    backgroundColor: '#1e1e1e',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  titleText: { color: '#fff', fontSize: 20 },
  menuButton: { padding: 10 },
  menuButtonText: { color: '#fff', fontSize: 24 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default Finance;