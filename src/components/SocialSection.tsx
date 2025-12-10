import { View, Text } from "react-native";
import React from "react";
import SocialIcon from "./SocialIcon";
import SendButton from "./SendButton";
import { s, vs } from "react-native-size-matters";

export default function SocialSection({ title }: { title: string }) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: s(20),
          justifyContent: "space-between",
          marginHorizontal: s(30),
        }}
      >
        <SocialIcon title={title} />
        <Text
          style={{
            fontSize: s(12),
            fontWeight: "bold",
            color: "#8083A3",
            marginStart: s(12),
            flex: 1,
          }}
        >
          {title}
        </Text>
        <SendButton />
      </View>
      <View
        style={{
          height: s(2),
          backgroundColor: "#dad6d6ff",
          marginHorizontal: s(20),
          marginVertical: vs(10),
        }}
      />
    </>
  );
}
