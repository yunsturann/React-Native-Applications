import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthForm from "./AuthForm";
import ButtonWhite from "./ButtonWhite";
import { useNavigation } from "@react-navigation/native";

export default function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    confirmEmail: false,
    password: false,
    confirmPassword: false,
  });

  const switchScreen = () => {
    isLogin ? navigation.navigate("Signup") : navigation.navigate("Login");
  };

  const submitHandler = (credentials) => {
    let { confirmEmail, confirmPassword, email, password } = credentials;
    email = email.trim();
    password = password.trim();
    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail.trim();
    const passwordsAreEqual = password === confirmPassword.trim();
    console.log(passwordIsValid);

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Ops", "Check entered values!");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
    } else {
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordsAreEqual,
      });
      onAuthenticate({ email, password });
    }
  };
  return (
    <View style={styles.container}>
      <AuthForm
        isLogin={isLogin}
        onsubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <ButtonWhite onPress={switchScreen}>
        {isLogin ? "Create new user" : "Sign in"}
      </ButtonWhite>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232D3F",
    marginHorizontal: 15,
    marginVertical: 40,
    padding: 10,
    paddingVertical: 20,
    borderRadius: 10,
  },
});
