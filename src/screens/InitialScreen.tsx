import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/stack.routes";
import {
  ButtonContainer,
  Buttons,
  Container,
  ImageB,
  SubText,
  TextButtons,
  TextContainer,
  TextPrincipal,
} from "../styles/initialScreenStyles";

const imageB = require("../images/planta.png");

function InitialScreen() {
  const navigation = useNavigation<StackTypes>();

  return (
    <Container>
      <ImageB source={imageB} />
      <TextContainer>
        <TextPrincipal>Plant Paradise</TextPrincipal>
        <SubText>Find your favorite plants and help the environment</SubText>
      </TextContainer>
      <ButtonContainer>
        <Buttons onPress={() => navigation.navigate("Sign In")}>
          <TextButtons>Sign-In</TextButtons>
        </Buttons>
        <Buttons onPress={() => navigation.navigate("Sign Up")}>
          <TextButtons>Sign-Up</TextButtons>
        </Buttons>
      </ButtonContainer>
    </Container>
  );
}

export default InitialScreen;
