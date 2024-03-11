import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, moderateScale, scale } from '../../utils'
import { MainText } from '../main-text'

interface CradTexProp {
    title: string,
    onPress?: () => void
}

export const CradTex = ({ title, onPress }: CradTexProp) => {

    return (
        <Pressable style={styles.card} onPress={() => onPress && onPress()}>
            <MainText title={title} style={styles.title} />
        </Pressable>
    )
}


const styles = StyleSheet.create({
    card: {
        width: moderateScale(80),
        height: moderateScale(75),
        borderRadius: moderateScale(8),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        marginHorizontal: scale(5),
        shadowColor: '#1B2B5D',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1,
    },
    title: {
        fontSize: moderateScale(14)
    }
})