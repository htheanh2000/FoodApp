import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import logo from '../../assets/logo.png'
const Splash = () => {
    return (
        <View style={styles.container}>
                <Image source={logo}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      justifyContent:"center",
      paddingBottom:"20%",
      backgroundColor:"rgba(126, 176, 225,.8)"

    }
  });
export default Splash;