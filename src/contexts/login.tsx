import React, { createContext, ReactNode, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { appAuth } from "../services/firebase";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/stack.routes";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  signUp: (email: string, password: string, name: string) => void;
  signIn: (email: string, password: string) => void;
  loadingAuth: boolean;
  signed: boolean;
  user: User | null;
}

export const AuthContext = createContext<AuthContextProps>({
  signUp: () => Promise.resolve(),
  signIn: () => Promise.resolve(),
  loadingAuth: false,
  signed: false,
  user: null,
});

interface Props {
  children: ReactNode;
}

function AuthLogin({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(false);
  const navigation = useNavigation<StackTypes>();
  async function signUp(email: string, password: string) {
    setLoadingAuth(true);
    try {
      await createUserWithEmailAndPassword(appAuth, email, password);
      setLoadingAuth(false);
      navigation.navigate("SignIn");
      console.log("Cadastro");
    } catch (error) {
      console.log("Error", error);
      setLoadingAuth(false);
    }
  }
  async function signIn(email: string, password: string) {
    setLoadingAuth(true);
    try {
      await signInWithEmailAndPassword(appAuth, email, password);
      navigation.navigate("Home");
      setLoadingAuth(false);
    } catch (error) {
      console.error("ERRO AO LOGAR", error);
      setLoadingAuth(false);
    }
  }
  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signUp, signIn, loadingAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthLogin;
