import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ButtonRadius from "../components/buttonRadius";
import Button from "../components/button";

const imageB = require("../images/image.png");
const cardOne = require("../images/imagee.jpeg");
const profile = require("../images/profile.png");

function HomeTab() {
  const navigation = useNavigation();

  function navigateTab() {
    navigation.navigate("Cart");
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.textHeader}>Hi,John</Text>
        <ImageBackground source={profile} style={Styles.profile} />
      </View>
      <Text style={Styles.textPopular}>Most popular</Text>
      <View style={Styles.cardOne}>
        <View style={Styles.cardOneContainer}>
          <ImageBackground source={cardOne} style={Styles.imageOne} />
          <ButtonRadius style={Styles.buttonFavoritesOne} />
          <View style={Styles.textCardOne}>
            <View>
              <Text>Green Vines</Text>
              <Text>$9.20</Text>
            </View>
            <View>
              <Button
                title="Add to cart"
                textStyle={Styles.textAddCart}
                style={Styles.buttonAddCart}
                onPress={navigateTab}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={Styles.cardContainer}>
        <View style={Styles.card}>
          <ImageBackground source={imageB} style={Styles.imageB} />
          <ButtonRadius style={Styles.buttonFavorites} />
          <View style={Styles.textContainer}>
            <View>
              <Text style={Styles.text}>Green Vines</Text>
              <Text style={Styles.text}>$9.20</Text>
            </View>
            <ButtonRadius style={Styles.buttonRadius} />
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
    backgroundColor: "#fff",
    flex: 1,
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
    elevation: 2,
  },
  cardContainer: {
    marginTop: 100,
    marginLeft: 18,
  },
  textContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
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
    elevation: 2,
    marginLeft: 18,
  },
  cardOneContainer: {
    flexDirection: "row",
  },
  textCardOne: {
    padding: 8,
    justifyContent: "space-between",
  },
  header: {
    marginTop: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 18,
  },
  buttonRadius: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#418B64",
  },
  buttonAddCart: {
    width: 121,
    height: 20,
    backgroundColor: "#418B64",
    borderRadius: 8,
  },
  textAddCart: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  buttonFavorites: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 12,
    marginLeft: 12,
    elevation: 4,
  },
  buttonFavoritesOne: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 4,
    marginLeft: 4,
    elevation: 4,
  },
  textPopular: {
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    marginLeft: 18,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "600",
  },
  profile: {
    width: 30,
    height: 30,
  },
});
