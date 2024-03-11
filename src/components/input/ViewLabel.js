import React from "react";
import { StyleSheet, View, Animated } from "react-native";
import {
  margin,
  padding,
  borderRadius,
  sizes,
  lineHeights,
  MIN_HEIGHT,
  moderateScale,
  IS_IOS,
  colors,
  Fonts,
} from "../../utils";

const TOP = moderateScale(9);
const BOTTOM = moderateScale(margin.base - 8);

class ViewLabel extends React.Component {
  UNSAFE_componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.isHeading ? 1 : 0);
  }
  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.props.defaultValue ? 1 : this.props.isHeading ? 1 : 0,
      duration: 130,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const {
      label,
      error,
      children,
      labelStart,
      containerStyle,
      contentContainerStyle,
    } = this.props;
    const paddingHorizontal = moderateScale(padding.large - margin.small);
    const topCenter =
      (moderateScale(60) -
        moderateScale(IS_IOS ? lineHeights?.base : sizes.base)) /
      3;
    const container = {
      borderColor: this.props.isHeading ? colors.blue : colors.gray,
    };
    const labelStyle = {
      position: "absolute",
      left: labelStart || 10,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [topCenter, moderateScale(5)],
      }),

      fontFamily: Fonts.Medium,
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [moderateScale(sizes.base), moderateScale(14)],
      }),
      lineHeight: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [moderateScale(lineHeights.base), moderateScale(21)],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.grayDark, colors.black],
      }),
      zIndex: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 9999],
      }),
    };
    return (
      <View style={[styles.content, containerStyle]}>
        <View style={[styles.container, container, contentContainerStyle]}>
          {typeof label === "string" ? (
            <Animated.Text
              style={[{ borderRadius: moderateScale(3) }, labelStyle]}
              numberOfLines={1}
            >
              {label}
            </Animated.Text>
          ) : null}
          {children}
        </View>
        {typeof error === "string" ? (
          <Animated.Text style={[styles.textError]} numberOfLines={1}>
            {error}
          </Animated.Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: moderateScale(10),
    width: "100%",
  },
  container: {
    minHeight: moderateScale(60),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(borderRadius.base),
    marginTop: TOP,
    marginBottom: BOTTOM,
    // borderColor: colors.grayLight,
    backgroundColor: colors.grayLight,

  },
  textError: {
    fontSize: moderateScale(12),
    marginBottom: BOTTOM,
    color: colors.error,
    fontFamily: Fonts.Medium,
  },
});

ViewLabel.defaultProps = {
  isHeading: false,
};

export default ViewLabel;
