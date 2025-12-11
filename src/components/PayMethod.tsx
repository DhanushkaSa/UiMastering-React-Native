import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode, useState } from "react";

import { s, vs } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

interface PayMethodProps {
  isSelected?: boolean;
  title: string;
  icon: ReactNode;
  onPress: () => void;
}

const PayMethod = ({ isSelected, title, icon, onPress }: PayMethodProps) => {
  return (
    <TouchableOpacity
      style={{ marginHorizontal: s(10), width: s(85), marginBottom: vs(20)}}
      onPress={onPress}
    >
      {isSelected && (
        <View style={styles.checked}>
          <Entypo name="check" size={21} color="white" />
        </View>
      )}
      <View style={[styles.payicon, isSelected && styles.selectedPayIcon]}>
        {icon}
      </View>

      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PayMethod;

const styles = StyleSheet.create({
  payicon: {
    width: s(85),
    height: vs(72),
    borderRadius: s(10),
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    fontSize: s(14),
    color: "#464E57",
    textAlign: "center",
  },

  selectedPayIcon: {
    backgroundColor: "white",
    borderWidth: s(2),
    borderColor: "#FF7622",
  },
  checked: {
    width: s(24),
    height: s(24),
    borderRadius: s(12),
    backgroundColor: "#FF7622",
    borderWidth: s(2),
    borderColor: "white",
    position: "absolute",
    top: s(-8),
    right: s(-8),
    zIndex: 1,
    marginVertical:vs(6)
  },
});
