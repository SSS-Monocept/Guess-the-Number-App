import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

function PrimaryButton({ children, onPress, userInput }) {
  const isEnabled = userInput === "Enable";

  let textStyles = [
    commonStyles.text,
    isEnabled ? stylesUI1.text : stylesUI2.text,
  ];

  if (!isEnabled) {
    if (children === "+") {
      textStyles.push(stylesUI2.specialText1);
    } else if (children === "-") {
      textStyles.push(stylesUI2.specialText2);
    }
  }

  const containerStyles = [
    commonStyles.container,
    isEnabled ? stylesUI1.container : stylesUI2.container,
  ];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={containerStyles}>
        <Text style={textStyles}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default PrimaryButton;

const commonStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 170,
    borderRadius: 40,
    margin: 2,
    backgroundColor: "#940e4c",
  },
  text: {
    color: "white",
  },
});

const stylesUI1 = StyleSheet.create({
  text: {
    fontWeight: "500",
    fontSize: 20,
  },
});

const stylesUI2 = StyleSheet.create({
  container: {
    height: 50,
    width: 110,
  },
  specialText1: {
    fontSize: 30,
    fontWeight: "450",
  },
  specialText2: {
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 40,
  },
});
