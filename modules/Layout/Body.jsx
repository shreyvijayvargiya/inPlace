import React from 'react';
import { StyleSheet, View } from 'react-native';

const Body = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

export default Body;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});