import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Cook = () => {
    return (
        <View style={styles.container}>
                <Text>Cook</Text>
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
export default Cook;