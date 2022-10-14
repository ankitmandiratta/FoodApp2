import {Text, View,Image } from 'react-native'
import React from 'react'
import {images,FONTS,SIZES,COLORS} from '../../constants'

const AuthLayout = ({title,subtitle,titleContainerStyle,children}) => {
  return (
    <View style={{flex:1}}>
   <View style={{alignItems:'center'}}>
         <Image source={images.logo_02}
             style={{width:200,height:100}} 
             resizeMode="contain"/>
         </View>
         <View style={{alignItems:'center'}}>
         <Text style={{...FONTS.h2}}>{title}</Text>
        <Text style={{color:COLORS.gray,fontSize:14,padding:10}}>{subtitle}</Text>  
        </View>
    {children}
    </View>
  )}

export default AuthLayout


