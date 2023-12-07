import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { fetchExercisesByBodypart } from "../api/exerciseDB";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);

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
    <View className="mt-20">
      <Text>exercises</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>go back</Text>
      </TouchableOpacity>
    </View>
  );
}
