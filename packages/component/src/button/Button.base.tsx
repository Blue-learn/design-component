import React, { memo } from "react";
import {
  ButtonBaseProps,
  ButtonSize,
  ButtonThemeProps,
  ButtonType,
  ColorTokens,
  ColorTokensMap,
} from "@design-component/schema";
import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import ThemeProvider from "@design-component/theme";
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
});

const ButtonBase: React.FunctionComponent<ButtonBaseProps> = ({
  onPress,
  label = "Button",
  type = ButtonType.Filled,
  size = ButtonSize.Big,
  loading = false,
  bgColor = ColorTokens.Blue_60,
  labelColor = ColorTokens.Black,
}) => {
  const theme = ThemeProvider.getTheme();
  const buttonThemeProps: ButtonThemeProps = theme.button[ButtonType.Filled];
  const colorMapping: ColorTokensMap = theme.colors;

  return (
    <Pressable
      style={[styles.container, { backgroundColor: colorMapping[bgColor] }]}
      onPress={onPress}
    >
      <Text style={{ color: colorMapping[labelColor] }}>{label}</Text>
      {loading && (
        <ActivityIndicator style={styles.indicator} animating color={bgColor} />
      )}
    </Pressable>
  );
};
export default memo(ButtonBase);
export { ButtonBase };
