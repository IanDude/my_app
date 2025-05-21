import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomHeader() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/sovereign_logo.png')} style={styles.logo} />
      <View style={styles.center}>
        <Text style={styles.label}>ANNOUNCEMENTS</Text>
      </View>
      <TouchableOpacity style={styles.menu}>
        <Image source={require('@/assets/images/menu.png')} style={styles.menuIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7B1113',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 14,
  },
  menu: {
    padding: 8,
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFD700',
  },
});
