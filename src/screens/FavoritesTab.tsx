import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
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
import FavoritesContext, {
  FavoritesContextType,
} from "../contexts/favoritesContext";
import { Buttons } from "../styles/cartTabStyles";

interface FavItem {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

function FavoritesTab() {
  const context = useContext<FavoritesContextType | undefined>(
    FavoritesContext
  );
  if (!context) {
    return null;
  }
  const { favItems, removeItem } = context;

  function handleRemoveItem(item: FavItem) {
    removeItem(item.id);
  }

  return (
    <BackgroundColor>
      <Header>
        <HeaderText>Favorites</HeaderText>
      </Header>
      <ScrollView>
        {favItems.length === 0 ? (
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>No favorite items</Text>
          </View>
        ) : (
          favItems.map((item) => (
            <CardAlign key={item.id}>
              <CardContainer>
                <ImageB source={{ uri: item.image }} />
                <View style={{ padding: 6, flex: 1 }}>
                  <Text>{item.title}</Text>
                  <Text>{`$${item.price}`}</Text>
                </View>
                <Buttons>
                  <ButtonFavorites>
                    <Icon
                      name="favorite"
                      size={20}
                      color={"#418B64"}
                      onPress={() => handleRemoveItem(item)}
                    />
                  </ButtonFavorites>
                </Buttons>
              </CardContainer>
            </CardAlign>
          ))
        )}
      </ScrollView>
    </BackgroundColor>
  );
}

export default FavoritesTab;
