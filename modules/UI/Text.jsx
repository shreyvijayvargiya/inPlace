import React from 'react';
import { useTheme, Text } from 'react-native-elements';

export const Heading = ({ customStyles, data }) => {
    const { theme } = useTheme();
    return (
        <Text
            h1Style={{ color: theme?.colors?.grey5 }}
            h1
            style={customStyles}
        >
            {data}
        </Text>
    )
};


export const SubHeading = ({ customStyles, data }) => {
    const { theme } = useTheme();
    return (
        <Text
            h2Style={{ color: theme?.colors?.grey5 }}
            h2
            style={customStyles}
        >
            {data}
        </Text>
    )
};

export const Paragraph = ({ customStyles, data }) => {
    const { theme } = useTheme();
    return (
        <Text
            h4Style={{ color: '#666666', fontSize: 18, marginVertical: 10, textAlign: 'center' }}
            h4
        >
            {data}
        </Text>
    )
};
export const Message = ({ customStyles, data }) => {
    const { theme } = useTheme();
    return (
        <Text
            h4Style={{ color: '#666666', fontSize: 16, marginVertical: 10, textAlign: 'center' }}
            h4
        >
            {data}
        </Text>
    )
};
