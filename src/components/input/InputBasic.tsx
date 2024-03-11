import React from "react";
import { StyleSheet, TextInput, Platform, View, I18nManager, TextInputProps, StyleProp, ViewProps } from "react-native";
import { Fonts, IS_IOS, colors, moderateScale } from "../../utils";


interface InputBasicProps extends TextInputProps {
  style?: StyleProp<ViewProps>;
  inputRef: any;
}

const InputBasic = ({
  placeholderTextColor,
  style,
  multiline = false,
  numberOfLines,
  inputRef,
  ...rest
}: InputBasicProps) => {
  return (
    <TextInput
      {...rest}
      ref={inputRef}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : colors.lightGray
      }
      multiline={multiline}
      numberOfLines={multiline ? numberOfLines : 1}
      style={[
        styles.input,
        multiline && styles.inputMultiline,
        multiline && {
          height: moderateScale(numberOfLines! * 20 + 2 * 12),
        },
        style && style,
      ]}
      selectionColor={colors.lightGray}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: moderateScale(14),
    // lineHeight: moderateScale(lineHeights.base),
    textAlignVertical: "center",
    ...Platform.select({
      android: {
        textAlign: I18nManager.isRTL ? "right" : "left",
      },
      ios: {
        // writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
        textAlign: I18nManager.isRTL ? "right" : "left",

      },
    }),
    fontFamily: Fonts.Medium,
    color: colors.blue,
    flex: 1,
  },
  inputMultiline: {
    textAlignVertical: "top",
    paddingVertical: moderateScale(12 + 3),

  },
});

InputBasic.defaultProps = {
  autoCapitalize: "none",
  underlineColorAndroid: "transparent",
  numberOfLines: 1,
  multiline: IS_IOS ? false : true,
  textAlignVertical: "center",
  autoCorrect: false,
  autoFocus: false,
};

export default InputBasic;
