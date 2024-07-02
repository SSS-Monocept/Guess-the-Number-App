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

  function setUserNumHandler(num) {
    setUserNum(num);
  }

  function isValidNumHandler() {
    console.log("Inside isValidHandler function in App.js");
    setIsValidNum(true);
    setGameIsOver(false);
  }

  function runIsGameOver() {
    console.log("Inside runIsGameOver in App.js");
    setGameIsOver(true);
  }

  let screen = (
    <StartGameScreen
      isValidNumHandler={isValidNumHandler}
      setUserNumHandler={setUserNumHandler}
    />
  );

  if (isValidNum && !gameIsOver) {
    screen = <GameScreen userNum={userNum} runIsGameOver={runIsGameOver} />;
  }

  if (gameIsOver && isValidNum) {
    screen = <GameOverScreen />;
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
