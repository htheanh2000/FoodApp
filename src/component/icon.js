

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import logo from '../assets/logo.png'
const Icon = ({ src, size, color }) => {
    return (
        <View >
            <Image source={src || logo} style={styles(size, color).icon} />
        </View>
    );


};

export const styles = (size, color) => StyleSheet.create({
    icon: {
        tintColor: color || '#fff',
        width: size || 16,
        height: size || 16,
    }
})

export default Icon;
