import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
} from "react-native";
import CourseInput from "./components/CourseInput";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [courses, setCourses] = useState([]);

  const addCourse = (courseText) => {
    setCourses((currentCourses) => [
      ...currentCourses,
      { text: courseText, id: (Math.random() * 1000000).toString() },
    ]);
    console.log(courses);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Kurs Ekle"
          color="red"
          onPress={() => setShowModal(true)}
        />
        <CourseInput
          modalVisible={showModal}
          setModalVisible={setShowModal}
          addCourse={addCourse}
        />
        <View>
          <FlatList
            data={courses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.courseItem}>
                  <Text style={styles.courseText}>{item.text}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  courseItem: {
    backgroundColor: "#a8a8a8",
    marginVertical: 6,
    padding: 10,
    borderRadius: 6,
  },
  courseText: {
    fontSize: 16,
  },
});
