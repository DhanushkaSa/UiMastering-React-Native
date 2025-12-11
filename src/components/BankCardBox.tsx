import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import CardBoxIcon from "../assets/CardBoxIcon";
import LottieView from "lottie-react-native";

const BankCardBox = () => {
  return (
    <View style={styles.container}>
      {/* <CardBoxIcon /> */}
      <LottieView
        autoPlay
        style={{
          width: s(150),
          height: vs(100),
        }}
        source={require("../assets/Payments.json")}
      />
      <Text style={styles.head}>No master card added</Text>
      <Text style={styles.subhead}>
        You can add a mastercard and {"\n"} save it for later
      </Text>
    </View>
  );
};

export default BankCardBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    borderRadius: s(12),
    marginHorizontal: s(12),
    marginVertical: vs(35),
    marginBottom: vs(24),
    width: s(320),
    height: vs(200),
    alignItems: "center",
  },
  head: {
    fontSize: s(16),
    fontWeight: "bold",
    color: "#32343E",
    marginVertical: vs(12),
    textAlign: "center",
  },
  subhead: {
    marginTop: vs(6),
    fontSize: s(14),
    color: "#2D2D2D",
    textAlign: "center",
  },
});
