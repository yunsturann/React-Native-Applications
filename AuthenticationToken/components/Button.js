import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#005B41",
    padding: 8,
    borderRadius: 10,
    width: "60%",
    alignSelf: "center",
    marginVertical: 10,
  },
  pressed: { opacity: 0.5 },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1.5,
  },
});
