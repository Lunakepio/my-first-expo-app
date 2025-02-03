import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useStore } from './store/store';

export default function App() {
  const { count, increment } = useStore();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={increment}><Text style={styles.text}>{count}</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 98,
    fontWeight: 600,
    
  }
});
