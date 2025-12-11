import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import ZoomLogo from "../assets/ZoomLogo";

const PHONE_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = (PHONE_WIDTH - s(20) * 3) / 2;

interface CardProps {
  image: string;
  title: string;
  date: string;
}

export default function Card({ image, title, date }: CardProps) {
  return (
    <ImageBackground
      source={{
        uri: image,
      }}
      style={styles.card}
      imageStyle={{
        resizeMode: "cover",
      }}
    >
      <View style={styles.overlay} />
      <View style={styles.live}>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            textAlign: "center",
            fontWeight: "semibold",
          }}
        >
          Live
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: s(5),
          }}
        >
          <ZoomLogo />
          <Text style={styles.datetime}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: vs(140),
    borderRadius: s(20),
    overflow: "hidden",
    // left: s(20),
    marginTop: s(20),
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
    marginEnd: 20,
    marginStart: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "semibold",
    color: "#fff",
  },
  datetime: {
    color: "white",
    marginHorizontal: s(5),
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: s(20),
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  live: {
    backgroundColor: "#E41111",
    paddingHorizontal: s(5),
    paddingVertical: s(2),
    width: s(39),
    height: vs(22),
    borderRadius: s(10),
    marginTop: vs(5),
    justifyContent: "center",
    position: "absolute",
    top: vs(10),
    right: s(10),
  },
});
