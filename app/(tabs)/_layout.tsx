import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import CustomHeader from '@/components/CustomHeader';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
    <CustomHeader/>  
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#cc1e1e',
        tabBarActiveBackgroundColor: '#cc1e1e',
        tabBarInactiveBackgroundColor: '',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor: '#ffffff',
            borderTopWidth: 0,
            elevation: 0,
          },
        }),
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Recognition"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="ranking-star" color={color} />,
        }}
      />
    </Tabs>
    </>
    
  );
}