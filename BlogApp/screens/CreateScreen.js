import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/blogContext";

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      typeIsEdit={false}
      onSubmit={(title, content) => {
        addBlogPost(title, content);
        navigation.navigate("Index");
      }}
    />
  );
}

const styles = StyleSheet.create({});
