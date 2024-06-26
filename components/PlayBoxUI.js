import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function PlayBoxUI({
  title,
  userInput,
  leftButtonText,
  rightButtonText,
  leftButtonUse,
  rightButtonUse,
  num,
  setNum,
}) {
  let parentContainerStyles = styles.parentContainer;

  if (userInput != "Enable") {
    parentContainerStyles = [
      styles.parentContainer,
      styles.modifiedParentContainer,
    ];
  }
  return (
    <View style={parentContainerStyles}>
      <Text style={styles.subHeadingText}>{title}</Text>
      {userInput === "Enable" && (
        <TextInput
          style={styles.textInput}
          value={num}
          onChangeText={setNum}
          keyboardType="numeric"
        />
      )}
      <View style={styles.childContainer}>
        <PrimaryButton onPress={leftButtonUse} userInput={userInput}>
          {leftButtonText}
        </PrimaryButton>
        <PrimaryButton onPress={rightButtonUse} userInput={userInput}>
          {rightButtonText}
        </PrimaryButton>
      </View>
    </View>
  );
}

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
  modifiedParentContainer: {
    height: 150,
    width: 350,
    padding: 10,
  },
});
