import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function ButtonWhite({ children, onPress }) {
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
    padding: 8,
    borderRadius: 10,
    width: "60%",
    alignSelf: "center",
  },
  pressed: { opacity: 0.5 },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 0.5,
  },
});
