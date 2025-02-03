import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useStore } from "./store/store";

export default function App() {
  const { count, increment, decrement } = useStore();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={decrement} style={[styles.modifier]}>
          <Text style={{ fontWeight: 600, fontSize: 40, color: "white" }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increment} style={[styles.modifier, {backgroundColor: "red"}]}>
          <Text style={{ fontWeight: 600, fontSize: 40, color: "white" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  text: {
    fontSize: 98,
    fontWeight: 600,
  },
  row: {
    flexDirection: "row",
    gap: 32,
  },
  modifier: {
    backgroundColor: "#093EFC",
    width: 120,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
