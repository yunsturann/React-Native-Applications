import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function Input({
  label,
  keyboardType,
  onUpdateValue,
  value,
  secure,
  isInvalid,
}) {
  return (
    <View style={styles.form}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        keyboardType={keyboardType}
        value={value}
        onChangeText={onUpdateValue}
        secureTextEntry={secure}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { gap: 5, marginBottom: 8 },
  label: {
    color: "#fff",
    fontSize: 20,
  },
  labelInvalid: {
    color: "red",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 4,
    padding: 7,
    fontSize: 18,
  },
});
