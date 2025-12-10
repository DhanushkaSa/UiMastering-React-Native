import { View, Text } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

export default function SocialIcon({title}:{title:string}) {
  return (
    <>
      <View
        style={{
          width: s(50),
          height: s(50),
          borderRadius: s(25),
          backgroundColor: "white",
          borderWidth: s(2),
          borderColor: "#E4E6E8",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome name={title.toLowerCase()} size={s(30)} color="#178AD9" />
      </View>
    </>
  );
}
