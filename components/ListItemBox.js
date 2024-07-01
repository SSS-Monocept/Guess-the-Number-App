import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ListItemBox({ id, guessedNum }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{id}</Text>
      <Text style={styles.text}>Opponent's Guess: {guessedNum}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#f8a408",
    width: 350,
    flexDirection: "row",
    borderRadius: 30,
    elevation: 8,
    margin: 5,
  },
  text: {
    color: "White",
    // borderWidth: 5,
    // borderColor: "#24f024",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: "400",
  },
});
