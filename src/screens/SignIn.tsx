import React, { useState, useContext } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";

import { AuthContext } from "../contexts/login";
import {
  Background,
  Button,
  ButtonText,
  Container,
  NewAccount,
  TextIn,
  TitleInput,
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
        <TitleInput>E-MAIL</TitleInput>
        <TextIn
          placeholder="Type your e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TitleInput>PASSWORD</TitleInput>
        <TextIn
          placeholder="Type your password"
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
