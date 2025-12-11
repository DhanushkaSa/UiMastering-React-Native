import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import {
  CashIcon,
  MasterCardIcon,
  PayPalIcon,
  VisaIcon,
} from "../assets/PayIcon";
import PayMethod from "./PayMethod";

const paymentMethods = [
  {
    title: "Cash",
    icon: <CashIcon />,
  },
  {
    title: "Visa",
    icon: <VisaIcon />,
  },
  {
    title: "MasterCard",
    icon: <MasterCardIcon />,
  },
  {
    title: "PayPal",
    icon: <PayPalIcon />,
  },
];

const PaymentList = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  return (
    <View>
      <FlatList
        data={paymentMethods}
        renderItem={({ item }) => (
          <PayMethod
            title={item.title}
            icon={item.icon}
            onPress={() => setSelectedMethod(item.title)}
            isSelected={selectedMethod === item.title}
          />
        )}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PaymentList;
