import React from "react";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";

const { sub, interpolateNode, Extrapolate } = Animated;
const { width } = Dimensions.get("window");
const size = 50;

export default ({ progress, y }) => {
  const translateX = interpolateNode(progress, {
    inputRange: [0, 0.4],
    outputRange: [width - size - 8, 0],
  });
  const translateY = sub(y, size / 2);
  const opacity = interpolateNode(progress, {
    inputRange: [0, 0.1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
        transform: [{ translateX }, { translateY }],
        opacity,
      }}
    >
      {/* <Icon name="chevron-left" color="black" size={40} /> */}
    </Animated.View>
  );
};
