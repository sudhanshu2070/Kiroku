import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface SideMenuProps {
  menuItems: string[]; // Array of menu item names
  slideAnim: Animated.Value; // Animation value
  onClose: () => void; // Function to close the menu
}

const SideMenu: React.FC<SideMenuProps> = ({ menuItems, slideAnim, onClose }) => {
  return (
    <Animated.View
      style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}
    >
      {/* Close Button */}
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>✕</Text>
      </TouchableOpacity>

      {/* Menu Options */}
      <View style={styles.menuOptions}>
        {menuItems.map((item, index) => (
          <Text key={index} style={styles.menuItem}>
            {item}
          </Text>
        ))}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sideMenu: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: width * 0.40,
    height: '100%',
    backgroundColor: '#1e1e1e',
    paddingTop: 40,
    paddingHorizontal: 20,
    elevation: 5,
    zIndex: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  menuOptions: {
    marginTop: 20,
  },
  menuItem: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
  },
});

export default SideMenu;