import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ResultDetail({ result }) {
  return (
    <View>
      <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Yıldızlı Restoran, {result.review_count} Değerlendirme
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { height: 120, width: 250, marginBottom: 2, borderRadius: 6 },
  name: {
    fontSize: 15,
    fontWeight: "500",
  },
});
