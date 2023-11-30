import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../util/auth";
import Loading from "../components/Loading";

export default function SignupScreen({ navigation }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signUpHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert("Registered", email);
    }
    setIsAuthenticating(false);
    Alert.alert("Registered", email);
  };
  if (isAuthenticating) {
    return <Loading message="Signing up..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
