import React from "react";
import { View, Text, StyleSheet } from "react-native";

function FavoritesTab() {
  return (
    <View style={Styles.background}>
      <Text>Home</Text>
    </View>
  );
}

export default FavoritesTab;

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
  },
});
