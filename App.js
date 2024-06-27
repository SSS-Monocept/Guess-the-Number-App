import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import React, { useState } from "react";

//rnfs: for boilerplate component
export default function App() {
  const [isValidNum, setIsValidNum] = useState(false);
  const [userNum, setUserNum] = useState(null);
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      {isValidNum ? (
        <GameScreen userNum={userNum} />
      ) : (
        <StartGameScreen
          setIsValidNum={setIsValidNum}
          setUserNum={setUserNum}
        />
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
