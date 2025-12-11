import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";

const PayConfirm = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text1}>TOTAL:</Text>
        <Text style={styles.text2}>$96</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>PAY & CONFIRM</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PayConfirm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: s(12),
    alignItems: "center",
  },
  text1: {
    fontSize: s(14),
    color: "#A0A5BA",
  },
  text2: {
    fontSize: s(30),
    color: "#181C2E",
    marginStart: s(12),
  },
  button: {
    width: s(327),
    height: vs(50),
    borderRadius: s(10),
    backgroundColor: "#FF7622",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: s(12),
    marginTop: vs(15),
  },
  buttonText: {
    fontSize: s(14),
    fontWeight: "bold",
    color: "white",
  },
});
