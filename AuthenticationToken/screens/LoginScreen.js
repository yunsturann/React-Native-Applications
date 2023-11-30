import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../components/AuthContent";
import Loading from "../components/Loading";
import { login } from "../util/auth";

export default function LoginScreen({ navigation }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signInHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert("Could not login", "Please check your informations!");
    }
    setIsAuthenticating(false);
  };
  if (isAuthenticating) {
    return <Loading message="Signing in..." />;
  }

  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

const styles = StyleSheet.create({});
