import React from "react";

import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  textStyle?: any;
  style: any;
}

function Button({ title, onPress, textStyle, style }: ButtonProps) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
