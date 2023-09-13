import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background: #fff;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 30px;
`;

export const TextIn = styled.TextInput`
  background-color: #fff;
  width: 90%;
  height: 48px;
  font-size: 18px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 1px solid #418b64;
  padding-left: 10px;
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
