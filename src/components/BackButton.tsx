import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

const BackButton = () => {
  return (
    <TouchableOpacity
      style={{
        width: s(40),
        height: s(40),
        borderRadius: s(20),
        backgroundColor: "#ECF0F4",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Entypo name="chevron-left" size={s(30)} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
