import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native";
import { AuthContext } from "../contexts/login";
import {
  Background,
  Button,
  Container,
  TextButton,
  TextIn,
} from "../styles/signUpStyles";
import { TitleInput } from "../styles/signInStyles";

export default function SignUpScreen() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp() {
    if (name === "" || email === "" || password === "") {
      return;
    }
    signUp(email, password, name);
  }

  return (
    <Background>
      <Container>
        <TitleInput>NAME</TitleInput>
        <TextIn
          placeholder="Type your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TitleInput>E-MAIL</TitleInput>
        <TextIn
          placeholder="Type your e-mail address"
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

        <Button onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={25} color={"#fff"} />
          ) : (
            <TextButton>Sign-Up</TextButton>
          )}
        </Button>
      </Container>
    </Background>
  );
}
