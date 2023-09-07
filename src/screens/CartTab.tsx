import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ButtonRadius from "../components/buttonRadius";

const logoCard = require("../images/image.png");

function CartTab() {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>Cart</Text>
      </View>
      <View style={Styles.cardAlign}>
        <View style={Styles.cardContainer}>
          <ImageBackground source={logoCard} style={Styles.imageB} />
          <View style={Styles.buttonFav}>
            <View>
              <Text>Green Vines</Text>
              <Text>$9.20</Text>
            </View>
            <View style={Styles.buttonContainer}>
              <ButtonRadius style={Styles.button} />
              <ButtonRadius style={Styles.button} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CartTab;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    marginTop: 50,
    marginLeft: 18,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
  },
  cardAlign: {
    alignItems: "center",
    marginTop: 30,
  },
  cardContainer: {
    borderRadius: 8,
    backgroundColor: "#ECF8F3",
    width: 327,
    height: 73,
    overflow: "hidden",
    flexDirection: "row",
  },
  imageB: {
    width: 91,
    height: 73,
  },
  buttonFav: {
    padding: 7,
    flexDirection: "row",
  },
  button: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#000",
    marginTop: 23,
    margin: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    marginLeft: 80,
  },
});
