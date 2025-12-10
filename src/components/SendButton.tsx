import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";

export default function SendButton() {
  return (
    <TouchableOpacity
      style={{
        width: s(45),
        height: s(45),
        borderRadius: s(23),
        backgroundColor: "#1077AF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Feather name="send" size={24} color="white" />
    </TouchableOpacity>
  );
}
