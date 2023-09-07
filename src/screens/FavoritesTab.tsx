import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ButtonRadius from "../components/buttonRadius";

const logoCard = require("../images/image.png");

function FavoritesTab() {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>Favorites</Text>
      </View>
      <View style={Styles.cardAlign}>
        <View style={Styles.cardContainer}>
          <ImageBackground source={logoCard} style={Styles.imageB} />
          <View style={Styles.buttonFav}>
            <View>
              <Text>Green Vines</Text>
              <Text>$9.20</Text>
            </View>
            <ButtonRadius style={Styles.button} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default FavoritesTab;

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
  cardContainer: {
    borderRadius: 8,
    backgroundColor: "#ECF8F3",
    width: 327,
    height: 73,
    overflow: "hidden",
    flexDirection: "row",
  },
  cardAlign: {
    alignItems: "center",
    marginTop: 30,
  },
  imageB: {
    width: 91,
    height: 73,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginLeft: 110,
    marginTop: 8,
    elevation: 4,
  },
  buttonFav: {
    padding: 7,
    flexDirection: "row",
  },
});
