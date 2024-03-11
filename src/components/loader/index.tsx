import { ActivityIndicator, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import React from 'react'


interface LoaderProps {
    continerStyle?: StyleProp<ViewStyle>
}

export const Loader = ({ continerStyle }: LoaderProps) => {

    return (
        <View style={[styles.continer, continerStyle]}>
            <ActivityIndicator />
        </View>
    )
}


const styles = StyleSheet.create({
    continer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    }
})