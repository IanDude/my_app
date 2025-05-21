import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ClanScreen from '@/screens/ClanScreen';
import KingdomScreen from '@/screens/KingdomScreen';

const TopTabs = createMaterialTopTabNavigator();

export default function HomeTab() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: 'red' }, // customize as needed
        tabBarLabelStyle: { fontWeight: 'bold'}, // customize as needed
        tabBarStyle: { backgroundColor: '#FFFFFF'}, // customize as needed
        tabBarActiveTintColor: '#000000', // customize as needed
      }}
    >
      <TopTabs.Screen name="Clan" component={ClanScreen} />
      <TopTabs.Screen name="Kingdom" component={KingdomScreen} />
    </TopTabs.Navigator>
  );
}