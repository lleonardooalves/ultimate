import styled from "styled-components/native";

export const BackgroundColor = styled.View`
  flex: 1;
  background: #fff;
  padding: 16px;
`;

export const Header = styled.View`
  margin-top: 50px;
  margin-left: 18px;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

export const CardAlign = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const CardContainer = styled.View`
  border-radius: 8px;
  background: #ecf8f3;
  width: 327px;
  height: 73px;
  overflow: hidden;
  flex-direction: row;
`;

export const ImageB = styled.ImageBackground`
  width: 91px;
  height: 73px;
`;

export const ButtonFav = styled.View`
  padding: 7px;
  flex-direction: row;
`;

export const ButtonFavorites = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #fff;
  margin-left: 110px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;
