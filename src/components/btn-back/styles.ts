import { Fonts, } from './../../utils';
import { StyleSheet } from "react-native";
import { moderateScale, scale } from "../../utils";

export const styles = StyleSheet.create({
    btn: {
        // paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(5),
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn2: {
        // paddingVertical: moderateScale(10),
    },
    // icon: { marginStart: 5 },
    text: {
        color: 'blue',
        marginHorizontal: scale(5),
        fontSize: moderateScale(18),
        fontFamily: Fonts.Medium,
        bottom: scale(3)

    },
});