import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define navigation parameters for each screen
export type RootParamList = {
  Home: undefined;
};

interface SideMenuProps {
  menuItems: string[]; // Array of menu item names to display
  slideAnim: Animated.Value; // Animation value to handle slide
  onClose: () => void; // Function to close the menu
  navigation: NativeStackNavigationProp<RootParamList>; // Navigation prop
}

const SideMenu: React.FC<SideMenuProps> = ({ menuItems, slideAnim, onClose, navigation }) => {

  const handleMenuItemPress = (item: string) => {
    // Check if the item is a valid screen name, then navigate
    const validPages: (keyof RootParamList)[] = ['Home'];

    if (validPages.includes(item as keyof RootParamList)) {
      navigation.navigate(item as keyof RootParamList); // Navigate to the selected screen
    } else {
      navigation.navigate('Home'); // Default to 'Home' if the item is invalid
    }
    onClose(); // Close the menu after navigation
  };

  return (
    <Animated.View
      style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}>
      
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>✕</Text>
      </TouchableOpacity>

      <View style={styles.menuOptions}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleMenuItemPress(item)}>
            <Text style={styles.menuItem}>{item}</Text>
          </TouchableOpacity>
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
    width: '60%',
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