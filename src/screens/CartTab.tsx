import React, { useContext, useEffect, useState } from "react";
import { View, Text, Alert, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Button,
  ButtonAdd,
  ButtonContainer,
  Buttons,
  CardAlign,
  CardContainer,
  CartButton,
  Container,
  HeaderContainer,
  HeaderText,
  Logo,
  SumCard,
  TextButtons,
} from "../styles/cartTabStyles";
import CartContext, { CartContextType } from "../contexts/cartContext";

interface CartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

function CartTab() {
  const context = useContext<CartContextType | undefined>(CartContext);
  if (!context) {
    return null;
  }
  const { cartItems, removeItem, increaseQuantity } = context;
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateSubtotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total.toFixed(2);
  };

  function handleRemoveItem(item: CartItem) {
    removeItem(item.id);
  }

  function handleAddQuantity(item: CartItem) {
    increaseQuantity(item.id);
  }

  useEffect(() => {
    const newTotalPrice = calculateSubtotal();
    setTotalPrice(parseFloat(newTotalPrice));
  }, [cartItems]);

  return (
    <Container>
      <HeaderContainer>
        <HeaderText>Cart</HeaderText>
      </HeaderContainer>
      <ScrollView>
        {cartItems.length === 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Your cart is empty</Text>
          </View>
        ) : (
          cartItems.map((item: any) => (
            <CardAlign key={item.id}>
              <CardContainer>
                <Logo source={{ uri: item.image }} />
                <View style={{ padding: 6, flex: 1 }}>
                  <Text>{item.title}</Text>
                  <Text>{`$${item.price}`}</Text>
                </View>
                <ButtonContainer>
                  <Buttons>
                    <Button>
                      <Icon
                        name="remove"
                        size={12}
                        color={"#418B64"}
                        onPress={() => handleRemoveItem(item)}
                      />
                    </Button>
                    <Text>{item.quantity}</Text>
                    <ButtonAdd>
                      <Icon
                        name="add"
                        size={12}
                        color={"#ffffff"}
                        onPress={() => handleAddQuantity(item)}
                      />
                    </ButtonAdd>
                  </Buttons>
                </ButtonContainer>
              </CardContainer>
            </CardAlign>
          ))
        )}
      </ScrollView>

      <SumCard>
        <Text>Subtotal</Text>
        <Text>{`$${totalPrice}`}</Text>
      </SumCard>
      <CartButton onPress={() => Alert.alert("Purchase Completed")}>
        <TextButtons>Go To Checkout</TextButtons>
      </CartButton>
    </Container>
  );
}

export default CartTab;
