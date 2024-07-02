import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import React, { useState, useEffect } from "react";

export default function App() {
  const [isValidNum, setIsValidNum] = useState(false);
  const [userNum, setUserNum] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  function setUserNumHandler(num) {
    setUserNum(num);
  }

  function isValidNumHandler() {
    setIsValidNum(true);
    setGameIsOver(false);
  }

  function runIsGameOver(receivedRoundNum) {
    setGuessRounds(receivedRoundNum);
    setGameIsOver(true);
  }

  function onStartNewGameHandler() {
    setUserNum(null);
    setIsValidNum(false);
    setGameIsOver(true);
    setGuessRounds(0);
  }

  let screen = (
    <StartGameScreen
      isValidNumHandler={isValidNumHandler}
      setUserNumHandler={setUserNumHandler}
    />
  );

  if (isValidNum && !gameIsOver) {
    screen = (
      <GameScreen
        userNum={userNum}
        runIsGameOver={runIsGameOver}
        numOfRounds={guessRounds}
      />
    );
  }

  if (gameIsOver && isValidNum) {
    screen = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNum}
        onStartNewGame={onStartNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      {screen}
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#1f1b1b",
    alignItems: "center",
  },
});
