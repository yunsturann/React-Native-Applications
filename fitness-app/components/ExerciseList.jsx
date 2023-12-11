import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ExerciseList({ data }) {
  const router = useRouter();
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <ExerciseCard item={item} router={router} index={index} />
        )}
      />
    </View>
  );
}

const ExerciseCard = ({ item, index, router }) => {
  return (
    <View className="flex py-2 space-y-2">
      <TouchableOpacity className=" bg-neutral-200 shadow rounded-[25px]">
        <Image
          source={{ uri: item.gifUrl }}
          style={{ width: wp(44), height: wp(44) }}
          contentFit="cover"
          className="rounded-[25px]"
        />
      </TouchableOpacity>
      <Text className=" text-neutral-700 tracking-wide font-semibold text-center">
        {item?.name?.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
      </Text>
    </View>
  );
};
