import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
export default function CustomHeader() {
  return (
    <LinearGradient
      colors={['#0C0101', '#A40F0F']}
      style={styles.container}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      >  
      
      <Image source={require('@/assets/images/sovereign_logo.png')} style={styles.logo} />

      <View style={styles.center}>
        <View style={styles.labelContainer}>
          <Image 
            source = {require('@/assets/images/header.png')}
            style={styles.header}
            resizeMode='contain'
            />
            <Text style={styles.label}>ANNOUNCEMENT</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.menu}>
        <Image source={require('@/assets/images/menu.png')} style={styles.menuIcon} />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7B1113',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 25,
  },
  logo: {
    width: 60,
    height: 50,
    resizeMode: 'contain',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  labelContainer: {
    position: 'relative',
    width: 170,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 1
  },
  label: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 20,
  },
  menu: {
    width: 50,
    height: 30,
    padding: 8,
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFD700',
  },
});
