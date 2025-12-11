import { View, Text, FlatList } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTab from "../components/TopTab";
import Card from "../components/Card";
import { dummyData } from "../data/data";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          marginVertical: vs(50),
          marginHorizontal: s(20),
          fontSize: s(30),
          fontWeight: "semibold",
          marginBottom: vs(10),
        }}
      >
        Meditation
      </Text>
      <Text
        style={{
          marginHorizontal: s(20),
          fontSize: s(16),
          color: "#2C2016",
        }}
      >
        Lorem Ipsum is simply dummy text
      </Text>

      <TopTab />

      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <Card image={item.image} title={item.title} date={item.date} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginHorizontal: s(20),
        }}
        contentContainerStyle={{
          paddingBottom: vs(100),
          paddingTop: vs(20),
        }}
      />
    </View>
  );
};

export default HomeScreen;
