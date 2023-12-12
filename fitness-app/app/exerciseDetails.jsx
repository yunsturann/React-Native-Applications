import { StyleSheet, Text, View } from "react-native";

import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native-virtualized-view";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function exerciseDetails() {
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log(item);

  return (
    <View
      className="flex flex-1 relative"
      style={{ paddingTop: Platform.OS === "android" ? 60 : "0" }}
    >
      <View className="bg-neutral-200 shadow-md rounded-b-[40px] ">
        <Image
          source={{ uri: item.gifUrl }}
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px] "
        />
        <View className="absolute top-3 right-3">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="closecircle" size={hp(4.5)} color="#f43f5e" />
          </TouchableOpacity>
        </View>
      </View>

      {/*ScrollView */}
      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          style={{ fontSize: hp(3.5) }}
          className="tracking-wider font-semibold text-neutral-800 first-letter:capitalize"
        >
          {item.name}
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="tracking-wide  text-neutral-700 "
        >
          Equipment
          <Text className="font-bold text-neutral-800"> {item?.equipment}</Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="tracking-wide  text-neutral-700 "
        >
          Secondary Muscles
          <Text className="font-bold text-neutral-800">
            {" "}
            {item?.secondaryMuscles}
          </Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="tracking-wide  text-neutral-700 "
        >
          Target
          <Text className="font-bold text-neutral-800"> {item?.target}</Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(500).duration(300).springify()}
          style={{ fontSize: hp(3.5) }}
          className="tracking-wider font-semibold text-neutral-800 first-letter:capitalize"
        >
          Instructions
        </Animated.Text>

        {item.instructions.split(".").map(
          (instruction, index) =>
            instruction.length != 0 ? ( // if an instruction has no characters, dont return
              <Animated.Text
                entering={FadeInDown.delay(600 + index * 100)
                  .duration(300)
                  .springify()}
                key={instruction}
                style={{ fontSize: hp(1.7) }}
                className="text-neutral-800"
              >
                {instruction[0] === ","
                  ? instruction.slice(1) + "."
                  : instruction + "."}
              </Animated.Text>
            ) : null // last index has no character so that it must return nothing
        )}
      </ScrollView>
    </View>
  );
}
