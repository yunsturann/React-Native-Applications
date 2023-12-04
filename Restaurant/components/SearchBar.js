import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.searchBarStyle}>
      <AntDesign
        style={styles.iconStyle}
        name="search1"
        size={30}
        color="black"
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Ara"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarStyle: {
    backgroundColor: "lightgray",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderRadius: 20,
  },
  iconStyle: {
    paddingHorizontal: 10,
  },
  inputStyle: { flex: 1, fontSize: 18 },
});
