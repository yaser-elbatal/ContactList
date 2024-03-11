import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fonts, SharedStyles, colors, moderateScale, scale } from '../../utils'
import { MainText } from '../main-text'

interface InfoCardProps {
    title: string
    label: string
}
export const InfoCard = ({ title, label }: InfoCardProps) => {

    return (
        <View style={[styles.card, SharedStyles.shadow]}>
            <MainText
                title={title}
                style={styles.title}
            />
            <MainText
                title={label}
                style={styles.label}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        paddingVertical: moderateScale(10),
        paddingHorizontal: scale(10),
        marginHorizontal: scale(5),
        borderRadius: scale(8),
        marginBottom: moderateScale(2),
        marginTop: scale(20)

    },
    title: {
        fontFamily: Fonts.Medium,
    },
    label: {
        color: colors.blue,
        marginTop: moderateScale(10),
        fontFamily: Fonts.Medium

    }
})