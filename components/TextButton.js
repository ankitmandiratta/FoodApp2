import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from '../Styles'
import { COLORS, FONTS } from '../constants'

const TextButton = ({label,onPress,buttonContainerStyle,disabled}) => {
  return (
    <View style={{...Styles.jai,...buttonContainerStyle}} >
     <TouchableOpacity style={{padding:10}} onPress={onPress} disabled={disabled} >
        <Text style={{color:COLORS.lightGray2,...FONTS.h3}}>{label}</Text>
     </TouchableOpacity>
    </View>
  )
}

export default TextButton

