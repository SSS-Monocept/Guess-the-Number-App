import { StyleSheet, View, Alert } from "react-native";
import React, { useState } from "react";
import HeadingBox from "../components/HeadingBox";
import PlayBoxUI from "../components/PlayBoxUI";

export default function StartGameScreen({ setIsValidNum, setUserNum }) {
  const [num, setNum] = useState(null);

  const validNum = () => {
    if (num < 0 || num > 99 || num === null) {
      Alert.alert(
        "Warning !!",
        "Number can't be null or negative or more than 99!",
        [
          {
            text: "OK",
            onPress: () => setNum(null),
          },
        ]
      );
    } else {
      Alert.alert("Valid Number", `The number is ${num}`, [
        {
          text: "OK",
          onPress: () => [setIsValidNum(true), setUserNum(num)],
        },
      ]);
    }
  };

  const reset = () => {
    setNum(null);
  };

  return (
    <View style={styles.container}>
      <HeadingBox>Guess My Number</HeadingBox>
      <PlayBoxUI
        title="Enter a Number"
        userInput="Enable"
        leftButtonText="Reset"
        rightButtonText="Confirm"
        leftButtonUse={reset}
        rightButtonUse={validNum}
        num={num}
        setNum={setNum}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    marginTop: 120,
  },
});
