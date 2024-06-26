import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeadingBox = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default HeadingBox;

const styles = StyleSheet.create({
  container: {
    borderColor: "white",
    borderWidth: 2,
    padding: 15,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
});
