import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ isLogin, onsubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  const updateInput = (inputType, enteredValue) => {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmEmail":
        setConfirmEmail(enteredValue);
        break;
      case "confirmPassword":
        setConfirmPassword(enteredValue);
        break;
    }
  };
  const handleSubmit = () => {
    onsubmit({
      email: enteredEmail,
      confirmEmail: confirmEmail,
      password: enteredPassword,
      confirmPassword: confirmPassword,
    });
  };
  return (
    <View style={styles.container}>
      <Input
        label="Email"
        keyboardType="email-address"
        onUpdateValue={updateInput.bind(this, "email")}
        value={enteredEmail}
        isInvalid={emailIsInvalid}
      />
      {!isLogin && (
        <Input
          label="Confirm Email"
          keyboardType="email-address"
          onUpdateValue={updateInput.bind(this, "confirmEmail")}
          value={confirmEmail}
          isInvalid={emailsDontMatch}
        />
      )}
      <Input
        label="Password"
        secure
        onUpdateValue={updateInput.bind(this, "password")}
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
      />
      {!isLogin && (
        <Input
          label="Confirm Password"
          secure
          onUpdateValue={updateInput.bind(this, "confirmPassword")}
          value={confirmPassword}
          isInvalid={passwordsDontMatch}
        />
      )}
      <Button onPress={handleSubmit}>{isLogin ? "SIGN IN" : "SIGN UP"}</Button>
    </View>
  );
}

const styles = StyleSheet.create({});
