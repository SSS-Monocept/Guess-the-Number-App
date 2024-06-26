import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React, { Children, useState } from "react";
import PrimaryButton from "./PrimaryButton";

const PlayBox = () => {
  const [num, setNum] = useState(null); //Not showing default value

  const validNum = () => {
    num < 0 && num > 99
      ? Alert.alert("Warning !!", "Number can't be negative !", [
          {
            text: "OK",
            onPress: () => setNum(null),
          },
        ])
      : num;
  };
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.subHeadingText}>Enter a Number</Text>
      <TextInput
        style={styles.textInput}
        value={num}
        onChangeText={setNum}
        keyboardType="numeric"
      />
      <View style={styles.childContainer}>
        <PrimaryButton onPress={() => setNum(null)}>Reset</PrimaryButton>
        <PrimaryButton onPress={validNum}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default PlayBox;

const styles = StyleSheet.create({
  parentContainer: {
    height: 225,
    width: 400,
    borderRadius: 15,
    backgroundColor: "#3f061c",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  childContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 8,
  },
  textInput: {
    color: "#f8a406",
    fontSize: 48,
    borderBottomWidth: 3,
    borderColor: "#f8a406",
    minWidth: 70,
    textAlign: "center",
    marginBottom: 5,
  },
  subHeadingText: {
    color: "#f8a406",
    fontSize: 30,
    textAlign: "center",
  },
});
