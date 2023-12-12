import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { fetchExercisesByBodypart } from "../api/exerciseDB";
import { demoExercises } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ExerciseList from "../components/ExerciseList";
import { ScrollView } from "react-native-virtualized-view";

export default function Exercises() {
  const [exercises, setExercises] = useState();

  const router = useRouter();
  const item = useLocalSearchParams();

  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bodypart) => {
    let data = await fetchExercisesByBodypart(bodypart);
    setExercises(data);
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <View className="relative">
        <Image source={item.image} style={{ width: wp(100), height: hp(45) }} />
        <TouchableOpacity
          style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
          className="bg-rose-500 flex justify-center items-center pr-1 ml-4 absolute rounded-full"
          onPress={() => router.back()}
        >
          <Ionicons name="caret-back-outline" size={hp(4)} color="#fff" />
        </TouchableOpacity>
      </View>

      {/*Exercises*/}
      <View className="space-y-3 p-4 ">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700 first-letter:capitalize"
        >
          {item.name} exercises
        </Text>
        <View>
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
