import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="exercises"
        options={{ presentation: "fullScreenModal" }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
