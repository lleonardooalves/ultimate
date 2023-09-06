import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const imageB = require("../images/image.png");
const cardOne = require("../images/imagee.jpeg");

function HomeTab() {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text>Hi,John</Text>
        <Text>Icon</Text>
      </View>
      <Text>Most Popular</Text>
      <View style={Styles.cardOne}>
        <View style={Styles.cardOneContainer}>
          <ImageBackground source={cardOne} style={Styles.imageOne} />
          <View style={Styles.textCardOne}>
            <Text>Green Vines</Text>
            <Text>$9.20</Text>
          </View>
        </View>
      </View>
      <View style={Styles.cardContainer}>
        <View style={Styles.card}>
          <ImageBackground source={imageB} style={Styles.imageB} />
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Green Vines</Text>
            <Text style={Styles.text}>$9.20</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeTab;

const Styles = StyleSheet.create({
  container: {
    padding: 17,
  },
  imageB: {
    width: 327,
    height: 209,
  },
  card: {
    backgroundColor: "#fff",
    width: 327,
    height: 279,
    borderRadius: 8,
    overflow: "hidden",
  },
  cardContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  textContainer: {
    padding: 18,
  },
  text: {
    margin: 1,
  },
  imageOne: {
    width: 150,
    height: 140,
  },
  cardOne: {
    backgroundColor: "#fff",
    width: 287,
    height: 140,
    borderRadius: 8,
    overflow: "hidden",
  },
  cardOneContainer: {
    flexDirection: "row",
  },
  textCardOne: {
    padding: 8,
  },
  header: {
    marginTop: 32,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
