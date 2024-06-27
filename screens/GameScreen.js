import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import HeadingBox from "../components/HeadingBox";
import PlayBoxUI from "../components/PlayBoxUI";

export default function GameScreen({ userNum }) {
  // const [randNum, setRandNum] = useState(null);

  // useEffect(() => {
  //   // Generate initial random number when component mounts
  //   setRandNum(randomNumberInRange(0, 100));
  // }, []);

  // function randomNumberInRange(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  // const handleClick = () => {
  //   setRandNum(randomNumberInRange(0, 100)); // Generates a number between 0 and 100 (inclusive)
  // };
  return (
    <View style={styles.parentContainer}>
      <HeadingBox>Opponent's Guess</HeadingBox>
      <View style={styles.container}>
        <Text style={styles.text}>{userNum}</Text>
      </View>
      <PlayBoxUI
        title="Higher or Lower"
        userInput="Disable"
        leftButtonText="-"
        rightButtonText="+"
        // leftButtonUse={decreaseRandNum}
        // rightButtonUse={increaseRandNum}
        leftButtonUse={() => alert("Clicked Left !")}
        rightButtonUse={() => alert("Clicked Right !")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    marginTop: 70,
  },
  container: {
    borderColor: "#f8a406",
    borderWidth: 4,
    padding: 15,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    color: "#f8a406",
    fontSize: 48,
    minWidth: 70,
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
  },
});
