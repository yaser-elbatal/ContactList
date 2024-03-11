import { I18nManager, StyleSheet } from "react-native";
import { Fonts, colors, moderateScale } from "../../utils";

export const styles = StyleSheet.create({
    text: {
        fontSize: moderateScale(18),
        color: colors.black,
        fontFamily: Fonts.bold,
        textAlign: I18nManager.isRTL ? "right" : "left",
    },
});
