import React, { useState, useContext } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

import { AuthContext } from "../contexts/login";
import {
  Background,
  Button,
  ButtonText,
  Container,
  Header,
  NewAccount,
  TextIn,
} from "../styles/signInStyles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/stack.routes";

export default function SignInScreen() {
  const { signIn, loadingAuth } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation<StackTypes>();

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container>
        <Header>Fill in the Fields</Header>
        <TextIn
          placeholder="Your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextIn
          placeholder="Your Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <Button onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={25} color="#FFF" />
          ) : (
            <ButtonText>Sign-In</ButtonText>
          )}
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <NewAccount>
            Or if you don't have an account, create it now
          </NewAccount>
        </TouchableOpacity>
      </Container>
    </Background>
  );
}
