import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Alert } from "react-native";
import HeadingBox from "../components/HeadingBox";
import PlayBoxUI from "../components/PlayBoxUI";
import ListItemBox from "../components/ListItemBox";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBound = 1;
let maxBound = 100;

export default function GameScreen({ userNum, runIsGameOver }) {
  // console.log("Game starts with userNum:", userNum);
  const initialGuess = generateRandomBetween(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([currentGuess]);

  useEffect(() => {
    // console.log("useEffect triggered:", currentGuess, userNum);
    if (currentGuess == userNum) {
      // console.log("Correct guess!");
      runIsGameOver();
    }
  }, [currentGuess, userNum, runIsGameOver]);

  function nextGuessHandler(direction) {
    // console.log("nextGuessHandler triggered with direction:", direction);
    if (
      (direction === "-" && currentGuess < userNum) ||
      (direction === "+" && currentGuess > userNum)
    ) {
      Alert.alert("Invalid Guess", "You know that this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "-") {
      maxBound = currentGuess;
    } else if (direction === "+") {
      minBound = currentGuess + 1;
    }

    const nextRandGuess = generateRandomBetween(
      minBound,
      maxBound,
      currentGuess
    );
    setCurrentGuess(nextRandGuess);
    setGuessRounds((prevRounds) => [nextRandGuess, ...prevRounds]);
  }

  return (
    <View style={styles.parentContainer}>
      <HeadingBox>Opponent's Guess</HeadingBox>
      <View style={styles.container}>
        <Text style={styles.text}>{currentGuess}</Text>
      </View>
      <PlayBoxUI
        title="Higher or Lower"
        userInput="Disable"
        leftButtonText="-"
        rightButtonText="+"
        leftButtonUse={nextGuessHandler.bind(this, "-")}
        rightButtonUse={nextGuessHandler.bind(this, "+")}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <ListItemBox id={itemData.index + 1} guessedNum={itemData.item} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    alignItems: "center",
    marginTop: 70,
    gap: 30,
    height: "90%",
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
