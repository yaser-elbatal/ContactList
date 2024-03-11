import { StyleSheet } from "react-native";
import { moderateScale, scale } from "../../utils";

export const styles = StyleSheet.create({
    containers: {
        backgroundColor: '#f2f2f2',
        flex: 1
    },
    header: {
        paddingHorizontal: 24,
    },
    section: {
        marginTop: 12,
        paddingLeft: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        alignSelf: 'flex-start'
    },
    sectionItems: {
        marginTop: 8,
    },
    container: {
        paddingVertical: 24,
        paddingHorizontal: 0,
    },
    title: {
        fontSize: moderateScale(30),
    },
    fav: { marginTop: moderateScale(10), marginHorizontal: scale(10) }

});