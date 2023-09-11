import React from "react";
import { View, Text } from "react-native";
import {
  BackgroundColor,
  ButtonFav,
  ButtonFavorites,
  CardAlign,
  CardContainer,
  Header,
  HeaderText,
  ImageB,
} from "../styles/favoritesStyles";
import Icon from "react-native-vector-icons/MaterialIcons";

const logoCard = require("../images/image.png");

function FavoritesTab() {
  return (
    <BackgroundColor>
      <Header>
        <HeaderText>Favorites</HeaderText>
      </Header>
      <CardAlign>
        <CardContainer>
          <ImageB source={logoCard} />
          <ButtonFav>
            <View>
              <Text>Green Vines</Text>
              <Text>$9.20</Text>
            </View>
            <ButtonFavorites>
              <Icon name="favorite" size={20} color={"#418B64"} />
            </ButtonFavorites>
          </ButtonFav>
        </CardContainer>
      </CardAlign>
    </BackgroundColor>
  );
}

export default FavoritesTab;
