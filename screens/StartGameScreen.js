import { StyleSheet, View } from "react-native";
import React from "react";
import HeadingBox from "../components/HeadingBox";
import PlayBox from "../components/PlayBox";

export default function StartGameScreen() {
  return (
    <View style={styles.container}>
      <HeadingBox>Guess My Number</HeadingBox>
      <PlayBox />
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
