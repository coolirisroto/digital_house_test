import React, { memo } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import styles from './styles'

type ButtonProps = {
    text: string,
    onPress: ()  => void
    style?: any
}

const ButtonComponent = ({ text, onPress, style }: ButtonProps) => {
    return (
        <TouchableOpacity testID="button" onPress={onPress} style={StyleSheet.flatten([styles.container, style])}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
export default memo(ButtonComponent)
