import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const logo = require('../assets/Images/logo.png');
const IntroScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff5252',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        width: "100%",
    },
    imageContainer: {
        width: 100,
        height: 100,
        backgroundColor: 'inherit',
    },
    image: {
        width: 100,
        height: 100,
    }
});

export default IntroScreen