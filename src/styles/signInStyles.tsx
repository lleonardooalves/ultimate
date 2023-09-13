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
  width: 90%;
  height: 48px;
  font-size: 18px;
  border-radius: 8px;
  border: 1px solid #418b64;
  margin-bottom: 15px;
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

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const NewAccount = styled.Text`
  font-size: 15px;
  color: #418b64;
  margin-top: 5px;
`;

export const TitleInput = styled.Text`
  font-size: 15px;
  color: #969595;
  margin-bottom: 5px;
  text-align: left;
`;
