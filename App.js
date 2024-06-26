import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import React, { useState } from "react";

//rnfs: for boilerplate component
export default function App() {
  const [isValidNum, setIsValidNum] = useState(false);
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      {isValidNum ? (
        <GameScreen />
      ) : (
        <StartGameScreen setIsValidNum={setIsValidNum} />
      )}
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
