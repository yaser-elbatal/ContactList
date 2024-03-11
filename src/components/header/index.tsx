import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import AvatarSVG from '../../assets/icons/avatar.svg'
import NotificationSVG from '../../assets/icons/notification.svg'
import LogoHome from '../../assets/icons/logoHome.svg'
import { Fonts, moderateScale, scale, verticalScale } from '../../utils'
import { MainText } from '../main-text'
import { BtnBack } from '../btn-back'


interface HeadersProps {
    onPress?: () => void;
}

export const Headers = ({ onPress }: HeadersProps) => {


    return (
        <View style={styles.header}>
            <BtnBack text='Contacts' />
            <Pressable onPress={() => onPress && onPress()}>
                <MainText
                    title={'Fav'}
                    style={styles.edit}
                />
            </Pressable>
        </View>

    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(10)
    },
    edit: {
        color: 'blue',
        fontFamily: Fonts.Medium
    }

})