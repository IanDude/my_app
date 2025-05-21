import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RankingScreen from '@/screens/RankingScreen';
import HOFScreen from '@/screens/HOFScreen';

const TopTabs = createMaterialTopTabNavigator();

export default function RecognitionTab() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: 'red' }, // customize as needed
        tabBarLabelStyle: { fontWeight: 'bold' },
      }}
    >
      <TopTabs.Screen name="Ranking" component={RankingScreen} />
      <TopTabs.Screen name="Hall Of Fame" component={HOFScreen} />
    </TopTabs.Navigator>
  );
}