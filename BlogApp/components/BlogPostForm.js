import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function BlogPostForm({ onSubmit, initialValues, typeIsEdit }) {
  const [title, setTitle] = useState(initialValues ? initialValues.title : "");
  const [content, setContent] = useState(
    initialValues ? initialValues.content : ""
  );
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter title: </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="Title"
      />
      <Text style={styles.label}>Enter content: </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
        placeholder="Content"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => onSubmit(title, content)}
      >
        {typeIsEdit ? (
          <Text style={styles.btnText}>Edit</Text>
        ) : (
          <Text style={styles.btnText}>Save</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "gray",
    fontSize: 18,
    marginBottom: 20,
    padding: 10,
    borderRadius: 6,
    maxWidth: "100%",
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "#14A44D",
    borderRadius: 10,
    padding: 14,
    marginHorizontal: 50,
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
