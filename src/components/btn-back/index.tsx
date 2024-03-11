import React from 'react'
import { I18nManager, StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import { MainText } from '../main-text';
import { styles } from "./styles";
import { toGoBack } from '../../navigation';
import { ArrowLeftSVG, ArrowRightSVG } from '../../assets/SVG';
import { SharedStyles } from '../../utils';

interface BtnBack {
    onPress?: () => void
    containerStyle?: StyleProp<ViewStyle>
    text?: string
}

export const BtnBack = ({ containerStyle, text, onPress }: BtnBack) => {



    return (
        <TouchableOpacity
            onPress={onPress ? onPress : () => toGoBack()}
            style={[text ? styles.btn : styles.btn2, containerStyle]}
            hitSlop={SharedStyles.hitSlop}
            activeOpacity={0.7}
        >

            {
                I18nManager.isRTL ? (
                    <ArrowRightSVG
                    />
                ) :
                    (
                        <ArrowLeftSVG
                        />
                    )
            }
            {text && (
                <MainText title={text} style={styles.text} />
            )}
        </TouchableOpacity>
    )
}


