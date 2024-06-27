import { StyleSheet, View } from "react-native";
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
    <View style={styles.container}>
      <HeadingBox>Opponent's Guess</HeadingBox>
      <HeadingBox>{userNum}</HeadingBox>
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
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    marginTop: 120,
  },
});
