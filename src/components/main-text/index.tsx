import React, { FC } from 'react';
import { Text, TextStyle, StyleProp } from "react-native";
import { styles } from './styles';

type TextPropss = React.ComponentProps<typeof Text>;

interface mainTextProps extends TextPropss {
    style?: StyleProp<TextStyle>;
    title: string | number;
}

export const MainText: FC<mainTextProps> = ({ title, style, ...props }) => (
    <Text style={[styles.text, style]} {...props} allowFontScaling={false}>
        {title}
    </Text>
);
