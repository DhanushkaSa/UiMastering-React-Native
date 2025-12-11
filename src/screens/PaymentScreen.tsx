import { Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PaymentList from "../components/PaymentList";
import BankCardBox from "../components/BankCardBox";
import AddButton from "../components/AddButton";
import PayConfirm from "../components/PayConfirm";

export default function PaymentScreen() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: vs(40),
          paddingHorizontal: s(12),
          marginBottom: vs(24),
        }}
      >
        <BackButton />
        <Text
          style={{
            fontSize: s(20),
            marginStart: s(18),
            fontWeight: "semibold",
          }}
        >
          Payment
        </Text>
      </View>
      <PaymentList />
      <BankCardBox />
      <AddButton />
      <PayConfirm/>
    </View>
  );
}
