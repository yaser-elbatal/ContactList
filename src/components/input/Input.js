import React from "react";
import {
  StyleSheet,
  View,

  I18nManager,
} from "react-native";
import InputBasic from "./InputBasic";
import ViewLabel from "./ViewLabel";
import { MIN_HEIGHT, colors, convertNumbersToEn, moderateScale, scale, verticalScale } from "../../utils";
import { MainText } from "../main-text";

// import { countryCodes } from "apis";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSecure: props.secureTextEntry,
      isHeading: props.value || props.defaultValue,
      value: undefined,
      codeModal: false,

    };
    this.input = React.createRef();
  }


  componentWillUnmount() {
    this.setState({
      mounted: false,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        isHeading: this.props.value,
      });
    }
  }

  handleFocus = (data) => {
    this.setState({ isHeading: true });
    if (this.props.onFocus) {
      this.props.onFocus(data);
    }
  };
  onChange = (value) => {
    this.setState(
      {
        value,
      },
      () => {
        if (this.props.onChangeText) {
          this.props.onChangeText(convertNumbersToEn(value));
        }
      }
    );
  };
  handleBlur = (data) => {
    const { value } = this.state;
    this.setState({
      isHeading:
        value || (this.input.current && this.input.current._lastNativeText),
    });
    if (this.props.onBlur) {
      this.props.onBlur(data);
    }
  };

  selectCode = (code) => {
    this.setState({ selectedCode: code, codeModal: false });
    this.props?.onChangeKey && this.props?.onChangeKey(code);
  };

  render() {
    const {
      label,
      error,
      secureTextEntry,
      style,
      multiline = false,
      icon,
      iconType,
      containerStyle,
      placeholder,
      ...rest
    } = this.props;


    const AR_LAYOUT = I18nManager.isRTL;





    const { isSecure, isHeading } = this.state;


    return (
      <View style={containerStyle}>
        <ViewLabel
          label={isHeading ? label : placeholder}
          labelStart={moderateScale(10)}
          error={error}
          isHeading={isHeading}
        >
          <View
            style={
              this.props.disabled ? styles.viewInputDisabled : styles.viewInput
            }
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {
                isHeading && label == "URL" &&
                (<MainText title={'https://'} style={{
                  marginStart: scale(10), color: colors.blackLight, marginTop: moderateScale(10)
                }} />)
              }

              <InputBasic
                {...rest}
                inputRef={this.input}
                testID="RN-text-input"
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
                multiline={multiline}
                // maxLength={9}
                secureTextEntry={isSecure}
                onChangeText={this.onChange}
                style={[
                  styles.input,
                  !multiline && {
                    height: MIN_HEIGHT,
                  },
                  style && style,
                ]}
                // keyboardType={"numeric"}
                editable={!this.props.disabled}
              />
            </View>

          </View>
        </ViewLabel>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  phoneCode: (AR_LAYOUT) => ({
    fontSize: moderateScale(14),
    color: colors.grayDark,
    marginEnd: moderateScale(13),
    marginStart: AR_LAYOUT ? 0 : moderateScale(13),
    fontFamily: fonts.Medium,
  }),
  input: {
    paddingHorizontal: moderateScale(10),
    fontSize: moderateScale(14),
    marginTop: moderateScale(10)


  },
  viewInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  viewInputDisabled: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grayLight,
    borderRadius: moderateScale(18),
  },

  viewIcon: (AR_LAYOUT) => ({
    marginStart: moderateScale(13),
    alignSelf: "center",

  }),
  icon: {
    // paddingVertical: moderateScale(13),
  },
  list: {
    paddingVertical: moderateScale(18),
    paddingHorizontal: moderateScale(28),
    // marginVertical: "4%",
    marginVertical: moderateScale(10),
    backgroundColor: colors.gray,
    alignSelf: "center",
    borderRadius: moderateScale(10),
    // overflow: "hidden",
    width: "40%",
    marginHorizontal: "4%",
    minHeight: verticalScale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  opacity: {
    borderRadius: moderateScale(10),
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  keyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  codeText: {
    fontSize: moderateScale(17),
    textAlign: "center",
  },
  img: {
    width: scale(43),
    height: scale(33),
    resizeMode: "contain",
    marginEnd: moderateScale(18),
  },
});

export { Input };
