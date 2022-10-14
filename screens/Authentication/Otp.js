import React, { useEffect, useState } from 'react';
import {View,Text,Image} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { COLORS } from '../../constants';
const Otp = () => {
const [timer,setTimer]= useState(60)

useEffect(()=>{
    let interval = setInterval(()=>{
        
        setTimer(prevTimer=>{
            if(prevTimer>0){
            return prevTimer-1
        }

        else {
            return prevTimer
        }
        
    })
    
},1000)

    return ()=>clearInterval(interval)
},[])

    return (
        <View >
           <OTPInputView 
            pinCount={4}
            style={{width:'80%',height:200,borderBottomColor:COLORS.red}}
            codeInputFieldStyle={{borderColor:COLORS.red,backgroundColor:COLORS.gray}}
            codeInputHighlightStyle={{borderColor:COLORS.blue}}
            />
            <View>
                <Text>{timer}</Text>
            </View>
        </View>
    )}

export default Otp;