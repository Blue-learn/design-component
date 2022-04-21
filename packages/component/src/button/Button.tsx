import React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import { ButtonProps, ButtonType } from "@design-component/schema";

/**
 * Primary UI component for user interaction
 */
const Button = ({
  label = "Button",
  type = ButtonType.Primary,
  loading = false,
  onPress = () => {},
}: ButtonProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        type === ButtonType.Primary
          ? styles.primaryButton
          : styles.secondaryButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={
          type === ButtonType.Primary
            ? styles.primaryLabel
            : styles.secondaryLabel
        }
      >
        {label}
      </Text>
      {loading && (
        <ActivityIndicator
          style={styles.indicator}
          animating
          color={type === ButtonType.Primary ? "white" : "#2096F3"}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    position: "absolute",
    right: 8,
  },
  primaryButton: { backgroundColor: "#2096F3" },
  secondaryButton: {},
  primaryLabel: { color: "white" },
  secondaryLabel: { color: "#2096F3" },
});

export default Button;
