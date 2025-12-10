import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodLogo from "../assets/FoodLogo";
import SunLogo from "../assets/SunLogo";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo />
      <SunLogo
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          
        }}
      />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
