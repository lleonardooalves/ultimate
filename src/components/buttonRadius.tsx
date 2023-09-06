import React from "react";

import { TouchableOpacity } from "react-native";

interface ButtonProps {
  style: any;
}

function ButtonRadius({ style }: ButtonProps) {
  return <TouchableOpacity style={style}></TouchableOpacity>;
}

export default ButtonRadius;
