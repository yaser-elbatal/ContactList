import { Linking, PermissionsAndroid, Platform } from "react-native";
import { moderateScale } from "./Scalling";
import Contacts from 'react-native-contacts';

export enum Fonts {
    regular = "ArbFONTS-DINNEXTLTARABIC-LIGHT-1",
    Medium = "ArbFONTS-DINNextLTArabic-Medium-2",
    bold = 'ArbFONTS-DINNextLTArabic-Bold-2',
    extraBold = 'ArbFONTS-DINNextLTArabic-Heavy-1',
    black = 'ArbFONTS-DINNextLTArabic-Black-2',

}

export const IS_IOS = Platform.OS === "ios";
export const convertNumbersToEn = (number: any) =>
    number
        .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d: string) {
            return d.charCodeAt(0) - 1632;
        })
        .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d: string) {
            return d.charCodeAt(0) - 1776;
        });

export function isObjectEmpty(object: Record<string, unknown>): boolean {
    for (const property in object) {
        // if any enumerable property is found object is not empty
        return false;
    }

    return true;
}

export const match = (android: number, ios: number) =>
    Platform.OS == 'android' ? moderateScale(android) : moderateScale(ios);


export let ShippexData = [
    {
        id: 1,
        name: "AWB",
        code: "41785691423",
        from: "cairo",
        to: "alex",
        statues: 0

    },
    {
        id: 2,
        name: "AWB",
        code: "41785691423",
        from: "cairo",
        to: "alex",
        statues: 1

    },
    {
        id: 3,
        name: "AWB",
        code: "41785691423",
        from: "cairo",
        to: "alex",
        statues: 2

    },
    {
        id: 4,
        name: "AWB",
        code: "41785691423",
        from: "cairo",
        to: "alex",
        statues: 3

    },
    {
        id: 5,
        name: "AWB",
        code: "41785691423",
        from: "cairo",
        to: "alex",
        statues: 4

    },


]

export let ContatcInfoData = [
    {
        id: 1,
        name: "Message"
    },
    {
        id: 2,
        name: "Call"
    },
    {
        id: 3,
        name: "Video"
    },
    {
        id: 4,
        name: "Mail"
    },
    {
        id: 5,
        name: "Pay"
    },


]

export const PermissionsContact = () => {
    return new Promise((res, rej) => {
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                title: 'Contacts',
                message: 'ContactsList app would like to access your contacts.',
                buttonPositive: 'Accept',
            }).then(value => {
                if (value == 'granted') {
                    res(true)
                }
            }).catch(err => { rej(false) });
        }
        else {
            res(true)
        }
    })
}

export const openMapLocation = ({ latitude, longitude }: any) => {
    Platform.OS === "ios"
        ? Linking.openURL(
            `http://maps.apple.com/maps?daddr=${latitude},${longitude}`
        )
        : Linking.openURL(
            `http://maps.google.com/maps?daddr=${latitude},${longitude}`
        );
};