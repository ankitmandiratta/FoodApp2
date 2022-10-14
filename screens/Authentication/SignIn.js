import React,{useState} from 'react';

import {View,Text,Image,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import { COLORS,SIZES,FONTS,images,icons } from '../../constants';
import AuthLayout from './AuthLayout';
import {FormInput,CustomSwitch, TextButton} from '../../components';

const SignIn = ({navigation}) => {
    const [email,setEmail] =useState('')
    const [password,setPasssword]= useState('')
    const [emailError,setEmailError] = useState('')
    const [showPass,setShowPass] = useState(false)
    const [saveMe,setSaveMe] = useState(false)


    const isEnableSignedIn =()=>{
        return email != "" && password != "" 
    }

    return (
    <AuthLayout  title="Let's Sign You In " subtitle={"Welcome back, You have been  missed!"} >
        <View style={{flex:1,marginTop:SIZES.padding*2,marginHorizontal:5}}>
    

        <FormInput
    label="Email"
    placeholder="Enter the Email"
    secureTextEntry={showPass}
    onChange={(value)=>{setPasssword(value)}}
    errorMsg={emailError}
        
        appendComponent={
                <TouchableOpacity  style={{justifyContent:'center',alignItems:'flex-end'}} onPress={()=>{setShowPass(!showPass)}}>
                <Image source={showPass?icons.eye_close:icons.eye} style={{width:20,height:20}}/>                   
                </TouchableOpacity>
        }
    />

<FormInput
    label ="Password"
    placeholder={"Enter the Password"}
    email={email}
    onChange={(value)=>{setEmail(value)}}
        errorMsg={emailError}
        appendComponent={
            <View style={{justifyContent:'center'}}>
              <Image source={icons.correct} style={{height:20,width:20,tintColot:COLORS.green}}/>
                </View>
        }
    />


    {/* Save me and forgot password */}

    <View style={{flexDirection:'row',marginTop:SIZES.radius,justifyContent:'space-between',marginLeft:10}}>
    <CustomSwitch value={saveMe} onChange={(value)=>setSaveMe(value)} />
    <TextButton  label="Forgot Password" onPress={()=>navigation.navigate('ForgotPassword')} 
    buttonContainerStyle={{backgroundColor:COLORS.primary}}
    />

    </View>
<View style={{marginTop:30,marginHorizontal:10,borderRadius:15}}>
<TextButton label="Sign In"
    disabled={isEnableSignedIn()?false:true}
    buttonContainerStyle={{backgroundColor:COLORS.primary,borderRadius:15,height:55}}/>
</View>

<View style={{marginTop:20,marginHorizontal:10,borderRadius:15}}>

<TextButton label="Facebok Login" onPress={()=>navigation.navigate('Otp')}
 disabled={false}
    buttonContainerStyle={{backgroundColor:COLORS.blue,borderRadius:15,height:55}}/>
</View>

<View style={{marginTop:10,marginHorizontal:10,borderRadius:15}}>
<TextButton label="SignIn with Google"
    disabled={isEnableSignedIn()?false:true}
    buttonContainerStyle={{backgroundColor:COLORS.lightGray1,borderRadius:15,height:55}}/>
</View>

    {/* SignIn */}
    {/* SignUp */}
</View>
        </AuthLayout>

    )
}

export default SignIn;