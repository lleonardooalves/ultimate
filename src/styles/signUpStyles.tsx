import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background: #fff;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextIn = styled.TextInput`
  background-color: #fff;
  width: 90%;
  height: 48px;
  font-size: 18px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 15;
  border: 1px solid #418b64;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 48px;
  border-radius: 8px;
  background-color: #418b64;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const Header = styled.Text`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 40px;
`;
