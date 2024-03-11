import { Dimensions } from "react-native";


export let height = Dimensions.get('window').height
export let width = Dimensions.get('window').width
export let phoneDimenstions = height > width ? width : height;

export enum itemsSize {
    guidelineBaseWidth = 428,
    guidelineBaseHeight = 926,
    widthRatio = phoneDimenstions / guidelineBaseWidth,
    heightRatio = phoneDimenstions / guidelineBaseHeight,
    aspectRatio = phoneDimenstions / phoneDimenstions,


}


export const scale = (size: number) => itemsSize.widthRatio * size;

export const verticalScale = (size: number) => itemsSize.heightRatio * size;

const defaultModerateFactor = phoneDimenstions > itemsSize.guidelineBaseWidth ? 0.5 : 1.25;
//  0.1 : 1.25;

export const moderateScale = (size: number, factor = defaultModerateFactor) =>
    size + (scale(size) - size) * factor;
