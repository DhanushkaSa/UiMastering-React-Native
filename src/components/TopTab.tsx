import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";

const TopTab = () => {
  const [activeTab, setActiveTab] = useState("Live"); // default selected tab

  return (
    <View style={styles.container}>
      {/* Live Button */}
      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === "Live" && styles.activeTab, // apply active style
        ]}
        onPress={() => setActiveTab("Live")}
      >
        <Text
          style={[styles.tabText, activeTab === "Live" && styles.activeText]}
        >
          Live
        </Text>
      </TouchableOpacity>

      {/* Recorded Button */}
      <TouchableOpacity
        style={[styles.tab, activeTab === "Recorded" && styles.activeTab]}
        onPress={() => setActiveTab("Recorded")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "Recorded" && styles.activeText,
          ]}
        >
          Recorded
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  container: {
    marginVertical: vs(12),
    marginHorizontal: s(20),
    borderRadius: s(20),
    backgroundColor: "#cececeff",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: s(4),
  },

  tab: {
    flex: 1,
    paddingVertical: vs(10),
    borderRadius: s(15),
    justifyContent: "center",
    alignItems: "center",
  },

  activeTab: {
    backgroundColor: "#75563B",
  },

  tabText: {
    color: "black",
    fontWeight: "semibold",
    fontSize: s(16),
  },

  activeText: {
    color: "white",
  },
});
