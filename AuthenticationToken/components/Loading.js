import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

export default function Loading({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "white", fontSize: 20, marginBottom: 30 },
});
