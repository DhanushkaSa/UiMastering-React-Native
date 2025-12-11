import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome6 name="add" size={24} color="#FF7622" />
      <Text style={styles.text}>ADD NEW</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    width: s(327),
    height: vs(50),
    borderRadius: s(10),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: s(12),
    borderWidth: s(2),
    borderColor: "#F0F5FA",
    flexDirection: "row",
    marginBottom: vs(10),
  },
  text: {
    fontSize: s(14),
    fontWeight: "bold",
    color: "#FF7622",
    paddingHorizontal: s(10),
  },
});
