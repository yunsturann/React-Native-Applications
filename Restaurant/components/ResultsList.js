import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";
import { useNavigation } from "@react-navigation/native";

export default function ResultsList({ title, results }) {
  //console.log(results);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.restaurant}
              onPress={() =>
                navigation.navigate("RestaurantShow", { id: item.id })
              }
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  restaurant: {
    marginHorizontal: 10,
  },
});
