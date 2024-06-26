import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

function PrimaryButton({ children, onPress }) {
  let textStyles = styles.text;

  if (children === "+") {
    textStyles = [styles.text, styles.specialText1];
  } else if (children === "-") {
    textStyles = [styles.text, styles.specialText2];
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={textStyles}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 170,
    backgroundColor: "#940e4c",
    borderRadius: 40,
    margin: 2,
  },
  text: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
  },
  specialText1: {
    fontSize: 30,
    fontWeight: "450",
  },
  specialText2: {
    fontSize: 34,
    fontWeight: "800",
  },
});
