import React from "react";

import { Pressable, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: any;
  style: any;
}

function Button({ title, onPress, style }: ButtonProps) {
  <Pressable style={style} onPress={onPress}>
    <Text>{title}</Text>
  </Pressable>;
}

export default Button;
