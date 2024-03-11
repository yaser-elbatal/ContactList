import { Image, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { memo } from 'react'
import { MainText } from '../components'
import { ArrowRightSVG } from '../assets/SVG'
import { styles } from './styles'
import { toContactInfo } from '../navigation'

type itemsType = {
    givenName: string,
    familyName: string,
    phoneNumbers: any,
    thumbnailPath: string
}

interface ContactsListItems {
    item: Array<itemsType>;
    cardStyle?: StyleProp<ViewStyle>,
    isIcon?: boolean
}

export const ContactCard = memo(({ item, cardStyle, isIcon = true }: ContactsListItems) => {


    return item.map((item: any, index: any) => {
        const name = `${item?.givenName} ${item?.familyName}`;
        const phone = item?.phoneNumbers?.length
            ? item?.phoneNumbers[0]?.number
            : '-';
        const img = item?.thumbnailPath;
        const emailAddresses = item?.emailAddresses[0]?.email

        return (
            <View style={styles.cardWrapper} key={index}>
                <TouchableOpacity
                    onPress={() => toContactInfo({ item })}>
                    <View style={[styles.card, cardStyle]}>
                        <View style={styles.content}>
                            {img ? (
                                <Image
                                    resizeMode="cover"
                                    source={{ uri: img }}
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

                            <View style={styles.cardBody}>
                                <MainText
                                    title={name}
                                    style={styles.cardTitle}
                                />
                                <MainText
                                    title={phone}
                                    style={styles.cardPhone}
                                />
                                <MainText
                                    title={emailAddresses}
                                    style={styles.emailAddresses}
                                />

                            </View>
                        </View>

                        {isIcon &&
                            (<View style={styles.cardAction}>
                                <ArrowRightSVG />
                            </View>)
                        }
                    </View>
                </TouchableOpacity>
            </View>
        )
    },
    )
}
)


