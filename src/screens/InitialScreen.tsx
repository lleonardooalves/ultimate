import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

const imageB = require("../images/planta.png");

function InitialScreen() {
  const navigation = useNavigation();

  function navigateTab() {
    navigation.navigate("Home");
  }

  return (
    <View style={Styles.container}>
      <ImageBackground source={imageB} style={Styles.imageB} />
      <View style={Styles.textContainer}>
        <Text style={Styles.text}>Plant Paradise</Text>
        <Text style={Styles.subText}>
          Find your favorite plants and help the environment
        </Text>
      </View>
      <View style={Styles.buttonContainer}>
        <Pressable style={Styles.button} onPress={navigateTab}>
          <Text style={Styles.buttonText}>Sign-In</Text>
        </Pressable>
        <Pressable style={Styles.button} onPress={navigateTab}>
          <Text style={Styles.buttonText}>Sign-Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default InitialScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  button: {
    height: 48,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "#418B64",
    justifyContent: "center",
    alignItems: "center",
    width: 325,
    margin: 4,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  text: {
    alignItems: "center",
    fontSize: 50,
    width: 225,
  },
  subText: {
    alignItems: "center",
    width: 249,
    fontSize: 16,
  },
  textContainer: {
    marginRight: 70,
    marginBottom: 20,
  },
  imageB: {
    width: 376,
    height: 442,
    flex: 1,
  },
});
