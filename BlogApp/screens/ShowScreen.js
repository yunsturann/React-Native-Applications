import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/blogContext";

export default function ShowScreen({ route }) {
  const { state } = useContext(Context);

  const blogPost = state.find((blog) => blog.id === route.params.id);

  return (
    <View style={styles.main}>
      <View style={styles.article}>
        <Text style={styles.label}>Title</Text>
        <Text style={styles.text}>{blogPost.title}</Text>
      </View>
      <View style={styles.article}>
        <Text style={styles.label}>Content</Text>
        <Text style={styles.text}>{blogPost.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { paddingVertical: 30, paddingHorizontal: 10, gap: 30 },
  article: {
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingVertical: 4,
  },
  label: { marginBottom: 4, fontStyle: "italic" },
  text: { fontSize: 18, marginLeft: 4 },
});
