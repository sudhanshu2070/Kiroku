import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  TouchableOpacity, 
  Animated, 
  Dimensions 
} from 'react-native';
import SideMenu from './SideMenu';
const { width } = Dimensions.get('window');

const Home = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(width))[0]; // Off-screen initially

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

  // Configuration for Home page menu
  const homeMenuItems = ['Profile', 'Settings', 'About', 'More', 'Logout'];

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />

      {/* Title Bar */}
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>Home</Text>
        <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text>Welcome to the Home Page!</Text>
      </View>

      {/* Side Menu */}
      {menuVisible && (
        <SideMenu menuItems={homeMenuItems} slideAnim={slideAnim} onClose={closeMenu} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  titleBar: {
    backgroundColor: '#1e1e1e',
    height: 50,
    paddingTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    elevation: 4,
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 7,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;