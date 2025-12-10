import { View, Text } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";

import SocialSection from "../components/SocialSection";

const ProfileScreen = () => {
  return (
    <>
      <View
        style={{
          marginTop: vs(50),
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          paddingHorizontal: s(20),
        }}
      >
        <UserAvatar />
        <BackButton />
      </View>
      <Text
        style={{
          color: "black",
          fontWeight: "semibold",
          fontSize: s(30),
          marginTop: vs(19),
          marginStart: s(40),
          marginBottom: vs(10),
        }}
      >
        Contact Us
      </Text>
      <View
        style={{
          paddingVertical: vs(26),
          backgroundColor: "#f2f2f2ff",
          marginVertical: vs(26),
          marginHorizontal: s(20),
          borderRadius: s(20),
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "semibold",
            fontSize: s(16),
            marginHorizontal: s(20),
            marginBottom: vs(20),
          }}
        >
          Social Media Platforms
        </Text>
        <SocialSection title="WhatsApp" />
        <SocialSection title="Twitter" />
        <SocialSection title="Instagram" />
        <SocialSection title="SnapChat" />
        <SocialSection title="TikTok" />
      </View>
    </>
  );
};

export default ProfileScreen;
