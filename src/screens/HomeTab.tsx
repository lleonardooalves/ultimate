import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  ButtonAdd,
  ButtonCart,
  ButtonFavorites,
  ButtonFavoritesOne,
  Card,
  CardContainerTwo,
  CardOne,
  CardOneContainer,
  CardOneImage,
  Container,
  Header,
  HeaderText,
  ImageB,
  ProfileImage,
  TextButtonAdd,
  TextCardOne,
  TextContainer,
  TextOne,
} from "../styles/homeTabStyles";

const imageB = require("../images/image.png");
const cardOne = require("../images/imagee.jpeg");
const profile = require("../images/profile.png");

function HomeTab() {
  const navigation = useNavigation();

  function navigateTab() {
    navigation.navigate("Cart");
  }

  function navigateDetails() {
    navigation.navigate("Details");
  }

  return (
    <Container>
      <Header>
        <HeaderText>Hi,John</HeaderText>
        <ProfileImage source={profile} />
      </Header>
      <TextOne>Most popular</TextOne>
      <CardOneContainer onPress={navigateDetails}>
        <CardOne>
          <CardOneImage source={cardOne} />
          <ButtonFavoritesOne>
            <Icon name="favorite-border" size={16} />
          </ButtonFavoritesOne>
          <TextCardOne>
            <View>
              <Text>Green Vines</Text>
              <Text>$9.20</Text>
            </View>
            <View>
              <ButtonAdd onPress={navigateTab}>
                <TextButtonAdd>Add to Cart</TextButtonAdd>
              </ButtonAdd>
            </View>
          </TextCardOne>
        </CardOne>
      </CardOneContainer>
      <CardContainerTwo onPress={navigateDetails}>
        <Card>
          <ImageB source={imageB} />
          <ButtonFavorites>
            <Icon name="favorite-border" size={16} />
          </ButtonFavorites>
          <TextContainer>
            <View>
              <Text>Green Vines</Text>
              <Text>$9.20</Text>
            </View>
            <ButtonCart>
              <Icon name="shopping-bag" size={16} color={"#fff"} />
            </ButtonCart>
          </TextContainer>
        </Card>
      </CardContainerTwo>
    </Container>
  );
}

export default HomeTab;
