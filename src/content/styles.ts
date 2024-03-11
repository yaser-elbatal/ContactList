import { StyleSheet } from "react-native";
import { Fonts, moderateScale, scale } from "../utils";


export const styles = StyleSheet.create({


    card: {
        paddingVertical: moderateScale(14),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardWrapper: {
        borderBottomWidth: 1,
        borderColor: '#d6d6d6',
    },
    cardImg: {
        width: scale(55),
        height: scale(55),
        borderRadius: scale(12),
        alignSelf: 'center'
    },
    cardAvatar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9ca1ac',
    },
    cardAvatarText: {
        fontSize: scale(20),
        color: '#fff',
        fontFamily: Fonts.bold
    },
    content: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    cardBody: {
        marginStart: scale(10),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    cardTitle: {
        fontSize: moderateScale(18),
        fontFamily: Fonts.bold,
        color: '#000',
        marginTop: moderateScale(10),

    },
    cardPhone: {
        fontSize: moderateScale(15),
        color: '#616d79',
        fontFamily: Fonts.Medium,
        bottom: moderateScale(5)

    },
    emailAddresses: {
        fontSize: moderateScale(15),
        color: '#616d79',
        fontFamily: Fonts.Medium,
        bottom: moderateScale(10)

    },
    cardAction: {
        marginHorizontal: scale(10)
    },
})