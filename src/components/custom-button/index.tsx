import React, { FC } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  View,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { MainText } from "../main-text";
import { colors, moderateScale, verticalScale, width } from "../../utils";



interface BtnProps {
  text: string
  btnStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  loading?: boolean,
  loaderColor?: string,
  value?: string,
  image?: string,
  disable?: boolean,
  animation?: string,
  delay?: number,
  containerStyle?: StyleProp<ViewStyle>,
  SVG?: JSX.Element,
  onPress?: () => void
  disabled?: boolean,


}

export const Btn: FC<BtnProps> = ({
  text,
  btnStyle,
  textStyle,
  loading,
  loaderColor,
  value,
  image,
  disable = false,
  disabled = false,
  delay,
  containerStyle,
  onPress,

  SVG,
  ...props
}) => {
  return (
    <View style={containerStyle} >
      {disable ? (
        <View style={[styles.ownStyle, styles.disableBtn, btnStyle]}>
          <MainText style={[styles.btnS, textStyle]} title={text} />
        </View>
      ) : loading ? (
        <View style={[styles.ownStyle, btnStyle]}>
          <ActivityIndicator color={loaderColor || colors.white} />
        </View>
      ) : SVG ? (
        <TouchableOpacity
          style={[styles.ownStyle, btnStyle]}
          onPress={onPress}
          {...props}
          disabled={disabled}
          activeOpacity={0.85}
        >
          {SVG}
          <MainText style={[styles.btnS, textStyle]} title={text} />
        </TouchableOpacity>
      ) : value ? (
        <TouchableOpacity
          style={[styles.ownStyle, btnStyle]}
          {...props}
          disabled={disabled}
          activeOpacity={0.85}
        >
          <View style={styles.content}>
            <MainText style={[styles.btnS, textStyle]} title={text} />
            <MainText style={[styles.btnS, textStyle]} title={value} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.ownStyle, btnStyle]}
          disabled={disabled}
          {...props}
          onPress={onPress}
          activeOpacity={0.85}
        >
          <MainText style={[styles.btnS, textStyle]} title={text} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ownStyle: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 1,
      },
    }),
    paddingVertical: verticalScale(15),
    width: width * 0.9,
    alignSelf: "center",
    minHeight: verticalScale(110),
    margin: moderateScale(7),
    overflow: "hidden",
    marginTop: verticalScale(25)
  },
  btnS: {
    color: colors.blue,
    fontSize: moderateScale(18),
    marginHorizontal: moderateScale(5)
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  img: {
    height: verticalScale(33),
    width: "30%",
    resizeMode: "cover",
  },
  disableBtn: {
    opacity: 0.5,
  },
});
