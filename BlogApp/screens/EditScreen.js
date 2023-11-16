import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/blogContext";

export default function EditScreen({ navigation, route }) {
  const id = route.params.id;
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blog) => blog.id === id);

  return (
    <BlogPostForm
      typeIsEdit={true}
      initialValues={{
        title: blogPost.title,
        content: blogPost.content,
      }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content);
        navigation.pop();
      }}
    />
  );
}

const styles = StyleSheet.create({});
