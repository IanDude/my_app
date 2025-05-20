import { View, Text, StyleSheet } from 'react-native';

export default function ClanScreen() {
  return (
    <View style={styles.container}>
      <Text>Clan Announcements</Text>
      {/* Your clan content here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20,backgroundColor: '#f0f0f0' },
});
