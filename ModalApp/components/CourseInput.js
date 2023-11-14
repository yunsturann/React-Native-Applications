import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function CourseInput({
  modalVisible,
  setModalVisible,
  addCourse,
}) {
  const [courseText, setCourseText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const addCourseHandler = () => {
    let id;
    if (courseText.length === 0) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } else {
      addCourse(courseText);
      setCourseText("");
      setModalVisible(false);
    }
    return id ? () => clearTimeout(id) : null;
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Image
          source={require("../assets/images/y.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Add new course"
          value={courseText}
          onChangeText={(text) => setCourseText(text)}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title="Cancel"
              color="red"
              onPress={() => setModalVisible(false)}
            />
          </View>
          <View style={styles.btn}>
            <Button title="Add" color="blue" onPress={addCourseHandler} />
          </View>
        </View>
        {showAlert && <Text style={styles.alert}>Alert! Enter Course!</Text>}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#939393",
    padding: 20,
  },
  image: {
    backgroundColor: "green",
    borderRadius: 20,
    height: 140,
    width: 140,
    marginBottom: 25,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#fff",
    backgroundColor: "#f5f5f5",
    elevation: 1,
    width: "100%",
    fontSize: 18,
    padding: 10,
    marginBottom: 20,
  },
  btnContainer: {
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: 20,
  },
  btn: {
    width: "40%",
  },
  alert: {
    backgroundColor: "#000",
    color: "white",
    padding: 20,
    width: "70%",
    borderRadius: 50,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
