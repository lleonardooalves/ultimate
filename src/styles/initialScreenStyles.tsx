import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageB = styled.ImageBackground`
  width: 376px;
  height: 442px;
  flex: 1;
`;

export const TextContainer = styled.View`
  margin-right: 70px;
  margin-bottom: 20px;
`;

export const TextPrincipal = styled.Text`
  align-items: center;
  font-size: 50px;
  width: 225px;
  font-weight: 600;
`;

export const SubText = styled.Text`
  align-items: center;
  width: 249px;
  font-size: 16px;
  font-weight: 400;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  margin-bottom: 50px;
`;

export const Buttons = styled.TouchableOpacity`
  height: 48px;
  border-radius: 8px;
  margin-top: 10px;
  background-color: #418b64;
  justify-content: center;
  align-items: center;
  width: 325px;
  margin: 4px;
`;

export const TextButtons = styled.Text`
  font-size: 18px;
  color: #fff;
`;
