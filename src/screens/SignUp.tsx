import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native";
import { AuthContext } from "../contexts/login";
import {
  Background,
  Button,
  Container,
  Header,
  TextButton,
  TextIn,
} from "../styles/signUpStyles";

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
        <Header>Register Now</Header>
        <TextIn
          placeholder="Your Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

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
