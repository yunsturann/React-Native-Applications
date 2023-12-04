import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";

export default function RestaurantScreen({ route }) {
  const [restaurant, setRestaurant] = useState(null);
  const id = route.params.id;

  const getRestaurantData = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  useEffect(() => {
    getRestaurantData(id);
  }, []);

  // Başlangıçta result olmadığı için bilgileri çekene kadar hata veriyor onu engeller
  if (!restaurant) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <View style={styles.ratingSection}>
            <Entypo name="star" size={24} color="purple" />
            <Text style={styles.rating}>{restaurant.rating}</Text>
            <Text
              style={styles.reviewCount}
            >{`(${restaurant.review_count}+)`}</Text>
            <FontAwesome name="info-circle" size={18} color="gray" />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.phone}>{restaurant.phone}</Text>
          <View style={styles.icon}>
            {restaurant.is_closed ? (
              <View style={styles.statusView}>
                <AntDesign name="closecircleo" size={28} color="red" />
                <Text style={styles.statusText}>Restoran Kapalı</Text>
              </View>
            ) : (
              <View style={styles.statusView}>
                <MaterialIcons name="delivery-dining" size={28} color="green" />
                <Text style={styles.statusText}>Restoran Açık</Text>
              </View>
            )}
          </View>
        </View>
      </View>

      <FlatList
        data={restaurant.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 15 },
  header: {
    paddingVertical: 20,
    gap: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    letterSpacing: 1,
  },
  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: { fontSize: 16, color: "purple", fontWeight: "600" },
  reviewCount: { marginLeft: 4 },
  phone: {
    fontStyle: "italic",
    fontSize: 16,
    color: "gray",
    letterSpacing: 0.5,
    fontWeight: "600",
  },
  statusView: { flexDirection: "row", alignItems: "center", gap: 5 },
  image: {
    height: 180,
    marginVertical: 10,
  },
  icon: {},
});
