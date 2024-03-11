import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { CradTex, Headers, InfoCard, MainText, } from '../../components'
import { ContatcInfoData, Fonts, SharedStyles, moderateScale, scale, } from '../../utils'
import { useRoute } from '@react-navigation/native'
import { useAppDispatch } from '../../store/hooks'
import { toggleFavAction } from '../../store/action'

export const ContactInfo = () => {

    const { params: { item } }: any = useRoute()
    const name = `${item?.givenName} ${item?.familyName}`;

    let InfoData = [
        {
            title: "Mobile",
            label: item?.phoneNumbers[0]?.number,
        },
        {
            title: "Email",
            label: item?.emailAddresses[0]?.email,
        },
        {
            title: "Address",
            label: item?.postalAddresses[0]?.country,
        }
    ]

    const dispatch = useAppDispatch()

    const makeFav = () => dispatch(toggleFavAction({ item }))


    return (
        <SafeAreaView style={styles.continer}>
            <Headers
                onPress={makeFav}
            />
            <ScrollView
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.wrapAvatar}>
                    {item?.img ? (
                        <Image
                            resizeMode="cover"
                            source={{ uri: item?.img }}
                            style={styles.cardImg}
                        />
                    ) : (
                        <View style={[styles.cardImg, styles.cardAvatar]}>
                            <MainText
                                title={name[0]}
                                style={styles.cardAvatarText}
                            />
                        </View>
                    )}
                    <MainText
                        title={name}
                        style={styles.cardTitle}
                    />
                </View>
                <View style={styles.wrap}>
                    {ContatcInfoData.map((item, index) =>
                        <CradTex
                            title={item.name}
                            key={item.id}
                        />)
                    }
                </View>
                {InfoData.map((item, index) =>
                    <InfoCard
                        key={index.toString()}
                        title={item?.title}
                        label={item?.label}
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    scroll: {
        flex: 1
    },
    cardImg: {
        width: scale(120),
        height: scale(120),
        borderRadius: scale(120),
        alignSelf: 'center'
    },
    cardAvatar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9ca1ac',
    },
    cardAvatarText: {
        fontSize: moderateScale(35),
        color: '#fff',
        fontFamily: Fonts.Medium
    },
    wrapAvatar: {
        marginTop: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardTitle: {
        fontSize: moderateScale(22),
        fontFamily: Fonts.bold,
        color: '#000',
        marginTop: moderateScale(10),

    },
    wrap: {
        ...SharedStyles.rowSpace,
        marginTop: moderateScale(20),
        alignSelf: 'center',
    }
})