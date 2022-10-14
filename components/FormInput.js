import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState,useEffect} from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const FormInput = ({containerStyle,label,placeholder,inputStyle,prepedComponent,appendComponent,onChange,
                    keyboardType="default",errorMsg="",secureTextEntry}) => {
  return (
        <View >
        {/* Label and Error msg */}
        <View style={{flexDirection:'row',marginHorizontal:SIZES.padding,justifyContent:'space-between'}}> 
            <Text style={{color:COLORS.gray,...FONTS.body4}}>{label}</Text>
            <Text style={{color:COLORS.red,...FONTS.body4}}>{errorMsg=""}</Text>
        </View>

    {/* TextInput */}
    <View style={{flexDirection:'row',height:55,paddingHorizontal:SIZES.padding,marginTop:SIZES.base,backgroundColor:COLORS.lightGray2}}>
     {prepedComponent}
     <TextInput 
    style={{flex:1,borderColor:COLORS.black,marginHorizontal:SIZES.radius,borderColor:COLORS.gray}} 
    placeholder={placeholder}
    onChange={onChange}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    />
    {appendComponent}
   </View>    
    </View>
  )
}

export default FormInput

