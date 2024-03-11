import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Fonts, SharedStyles, colors, match, moderateScale, scale, verticalScale, width } from '../../utils';

interface IInput extends React.ComponentProps<typeof TextInput> {
  options?: TextInputProps & { ref?: (ref: any) => void };
  style?: StyleProp<ViewStyle>;
  styleRightCont?: StyleProp<ViewStyle>;
  styleTextInput?: StyleProp<TextStyle>;
  hasCode?: boolean;
  isPassword?: boolean;
  rightContent?: any;
  leftContent?: any;
  value: string;
  onChangeText?: (value: any) => void,
  onSubmitEditing?: () => void
  onPress?: () => void;
  disabled?: boolean,
  onPressleftIcon?: () => void;
}

const SearchInput: FC<IInput> = ({
  style,
  hasCode,
  rightContent,
  leftContent,
  styleTextInput,
  options,
  isPassword,
  styleRightCont,
  onChangeText,
  onSubmitEditing,
  onPress,
  disabled,
  onPressleftIcon,
  value

}) => {

  return (
    <View style={[styles.con, style]}>
      {rightContent && (
        <TouchableOpacity
          disabled={disabled}
          style={[styles.rightCont, styleRightCont]}
          onPress={onPress && onPress}>
          {rightContent}
        </TouchableOpacity>
      )}
      <TextInput
        style={[styles.textInput, styleTextInput]}
        placeholderTextColor={colors.lightGray}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        value={value}
        {...options}
      />
      {leftContent && (
        <Pressable
          onPress={() => {
            onPressleftIcon && onPressleftIcon()
          }}
          style={styles.leftCont}>
          {leftContent}
        </Pressable>
      )}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  con: {
    height: moderateScale(55),
    flexDirection: 'row',
    borderColor: '#EAEAEA',
    borderWidth: 0,
    backgroundColor: colors.gray50,
    borderRadius: moderateScale(8),
    elevation: 30,
    shadowColor: '#cccccc',
    marginTop: verticalScale(30),
    width: width * .92

  },
  textInput: {
    flex: 1,
    padding: 0,
    fontSize: moderateScale(16),
    fontFamily: Fonts.Medium,
    marginHorizontal: scale(10),
    width: '100%',

  },
  phoneText: {
    fontSize: moderateScale(16),
    color: colors.black,
    fontFamily: Fonts.Medium,
    marginHorizontal: moderateScale(3),
  },
  rightCont: {
    marginStart: scale(10),
    // flex: 1.5,
    height: '100%',
    ...SharedStyles.centred,
    borderRightColor: colors.bgLightGray,
  },
  leftCont: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: scale(5)
  },
});
