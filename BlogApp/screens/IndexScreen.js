import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/blogContext";
import { Feather } from "@expo/vector-icons";

export default function IndexScreen({ navigation }) {
  const { state, addBlogPost, deleteBlogPost, getBlogPosts } =
    useContext(Context);
  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener("focus", () => getBlogPosts());
    return () => listener.remove();
  }, []);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
            <View style={styles.blogItem}>
              <Text style={styles.blogTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash-2" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  blogItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  blogTitle: {
    fontSize: 18,
  },
});
