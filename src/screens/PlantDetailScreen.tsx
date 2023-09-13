import React, { useEffect, useState } from "react";
import {
  ButtonTotal,
  ButtonsDetails,
  Container,
  Description,
  ImageDetails,
  Price,
  PriceButton,
  TextTotal,
  TitleDetails,
  TotalContainer,
} from "../styles/detailsScreenStyle";

import { Button, ButtonAdd, Buttons } from "../styles/cartTabStyles";
import Icon from "react-native-vector-icons/MaterialIcons";

import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { useCart } from "../contexts/cartContext";

interface CartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

function PlantDetailScreen() {
  const route = useRoute();
  const itemRoute = route.params?.item;

  const { cartItems, removeItem, increaseQuantity, addToCart } = useCart();

  const [itemCart, setItemCart] = useState<CartItem | undefined>(
    cartItems.find((cartItem) => cartItem.id === itemRoute.id)
  );

  useEffect(() => {
    setItemCart(cartItems.find((cartItem) => cartItem.id === itemRoute.id));
  }, [cartItems, itemRoute]);

  function handleRemoveItem() {
    if (itemCart) {
      removeItem(itemCart.id);
    }
  }

  function handleAddQuantity() {
    if (itemCart) {
      increaseQuantity(itemCart.id);
    }
  }

  function handleAddToCart() {
    addToCart(itemRoute);
  }

  return (
    <Container>
      <View>
        <ImageDetails source={{ uri: itemRoute.image }} />
        <Text style={{ padding: 24, color: "#969595" }}>
          {itemRoute.category}
        </Text>
        <TitleDetails>{itemRoute.title}</TitleDetails>
        <PriceButton>
          <Price>{`$${itemRoute.price}`}</Price>
          <ButtonsDetails>
            <Buttons>
              {itemCart && itemCart.quantity > 0 && (
                <Button onPress={handleRemoveItem}>
                  <Icon name="remove" size={12} color={"#418B64"} />
                </Button>
              )}
              <Text>{itemCart?.quantity}</Text>
              <ButtonAdd onPress={handleAddQuantity}>
                <Icon name="add" size={12} color={"#ffffff"} />
              </ButtonAdd>
            </Buttons>
          </ButtonsDetails>
        </PriceButton>
        <Description>{itemRoute.description}</Description>
      </View>
      <TotalContainer>
        <View>
          <Text>Total Price</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>{`$${
            (itemCart?.quantity || 0) * itemRoute.price
          }`}</Text>
        </View>
        <ButtonTotal onPress={() => handleAddToCart(itemRoute)}>
          <TextTotal>Add to cart</TextTotal>
        </ButtonTotal>
      </TotalContainer>
    </Container>
  );
}

export default PlantDetailScreen;
