import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useStore } from "./store/store";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { useEffect } from "react";
import { usePrevious } from "@uidotdev/usehooks";

export default function App() {
  const { count, increment, decrement } = useStore();
  const previousCount = usePrevious(count)

  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);

  useEffect(() => {
    if(previousCount < count){
      translateY.value = -50
      opacity.value = withTiming(1, { duration: 300 });
      translateY.value = withTiming(0, { duration: 300 });
    }
    if(previousCount > count){
      translateY.value = 50
      opacity.value = withTiming(1, { duration: 300 });
      translateY.value = withTiming(0, { duration: 300 });
    }
  }, [count]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.text,
          { opacity: opacity, transform: [{ translateY: translateY }] },
        ]}
      >
        {count}
      </Animated.Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            opacity.value = withTiming(0, { duration: 300 });
            translateY.value = withTiming(-50, { duration: 300 });
            setTimeout(() => {
              decrement();
            }, 300);
          }}
          style={[styles.modifier]}
        >
          <Text style={{ fontWeight: 600, fontSize: 40, color: "white" }}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            opacity.value = withTiming(0, { duration: 300 });
            translateY.value = withTiming(50, { duration: 300 });
            setTimeout(() => {
              increment();
            }, 300);
          }}
          style={[styles.modifier, { backgroundColor: "red" }]}
        >
          <Text style={{ fontWeight: 600, fontSize: 40, color: "white" }}>
            +
          </Text>
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
