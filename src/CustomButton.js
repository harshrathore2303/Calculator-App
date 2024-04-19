import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({backgroundColor, value, onPress}) => {
  return (
    <Pressable style={[styles.button, backgroundColor={backgroundColor}]} onPress={onPress}>
        <Text style={styles.text}>{value}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
    }
});

export default CustomButton