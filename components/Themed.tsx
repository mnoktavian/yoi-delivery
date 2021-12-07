import React from "react";
import {
  Text as DefaultText,
  View as DefaultView,
  TouchableOpacity as CardView,
} from "react-native";
import { spacing } from "../constants/Layout";

export type TextProps = DefaultText["props"];
export type ViewProps = DefaultView["props"];
export type CardProps = CardView["props"];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;

  return <DefaultText style={[style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;

  return <DefaultView style={[style]} {...otherProps} />;
}

export function ScreenView(props: ViewProps) {
  const { style, ...otherProps } = props;

  return (
    <DefaultView
      style={[{ paddingHorizontal: spacing }, style]}
      {...otherProps}
    />
  );
}

export function Screen(props: ViewProps) {
  const { style, ...otherProps } = props;

  return (
    <View
      style={[
        {
          backgroundColor: "#fff",
          minHeight: "100%",
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function Card(props: DefaultView["props"]) {
  const { style, ...otherProps } = props;

  return (
    <DefaultView
      style={[
        {
          borderRadius: 10,
          shadowColor: "#000",
          elevation: 2,
          backgroundColor: "white",
          marginVertical: 5,
        },
        style,
      ]}
      {...otherProps}
    ></DefaultView>
  );
}

export function Cards(props: CardProps) {
  const { style, ...otherProps } = props;
  return (
    <CardView
      style={[
        {
          borderRadius: 10,
          shadowColor: "#000",
          elevation: 2,
          backgroundColor: "white",
          marginVertical: 5,
        },
        style,
      ]}
      {...otherProps}
    ></CardView>
  );
}
