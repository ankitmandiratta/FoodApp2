import React,{useRef,useState,useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme'
import { constants, images } from '../../constants'
 import {View,Text,Image,Animated, ImageBackground, TouchableOpacity} from 'react-native';
import TextButton from '../../components/TextButton';



const OnBoarding = ({navigation}) => {

    useEffect(()=>{
        console.log(constants.onboarding_screens.length)
    })
       const scrollX= useRef(new Animated.Value(0)).current;
        const flatListRef =useRef(0)
        const [currentIndex,setCurrentIndex] = useState(0)
        const Dots =()=>{
            const dotPosition =Animated.divide(scrollX,SIZES.width)
        return(
                 <View style={{flexDirection:'row',alignContent:'center',alignItems:'center'}}>
        
                    {constants.onboarding_screens.map((item,index)=>{
                        
                        const dotColor = dotPosition.interpolate({
                        inputRange:[index-1,index,index+1],
                        outputRange:[COLORS.lightOrange,COLORS.primary,COLORS.lightOrange2],
                        extrapolate:'clamp'
                    })

                    const dotWidth= dotPosition.interpolate({
                        inputRange:[index-1,index,index+1],
                        outputRange:[10,30,10],
                        extrapolate:'clamp'
                    })
				

        return(
                         <Animated.View 
                        key={index}
                        style={{borderRadius:5, marginHorizontal:6,width:dotWidth,height:10,backgroundColor:dotColor}}
                        />
                        )}
                        )}                   
    </View>
 )}


    const renderHeaderlogo =()=>{
        return(
            <View style={{position:'absolute',top:SIZES.height>800?50:25,left:0,right:0,alignItems:'center',justifyContent:'center'}}>
                <Image source={images.logo_02} resizeMode="contain" style={{width:SIZES.width*0.5,height:100}} />
            </View>
        )}
    //renderHeaderLogo ends
   const renderFooter =()=>{
        return(
        <View style={{height:160}}>
            {/* pagination dots */}
            <View style={{flex:1,justifyContent:'center'}}>
            
                <Dots />
          </View>
                {/* Button */}

{/* {currentIndex<constants.onboarding_screens.length-1 && */}
{1==2 &&
  <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between',marginHorizontal:30}}>
               
                <TextButton label="Skip"  onPress={()=>navigation.replace("SignIn")}
                 buttonContainerStyle={{backgroundColor:null}}
                 
                 />
                <TextButton label="Next"
                buttonContainerStyle={{backgroundColor:COLORS.primary,height:60,width:200,borderRadius:SIZES.radius }}
                onPress={()=>{
                    let index= Math.ceil(Number(scrollX._value/SIZES.width))
                    if(index<constants.onboarding_screens.length-1){
                        //scroll to next item 
                       flatListRef?.current?.scrollToIndex({
                        index:index+1,
                        animated:true

                    })
                    }
                    else{
                        navigation.replace("SignIn")
                    }
}}
                                />


            </View>
   }

{1==1 && 
    <View style={{marginVertical:SIZES.padding,paddingHorizontal:SIZES.padding,height:60}}>
    <TextButton label="Let's get Started" buttonContainerStyle={{width:700,backgroundColor:COLORS.primary,borderRadius:SIZES.radius}} onPress={()=>navigation.navigate('SignIn')} />    
    </View>

}


            {/* buttons ends */}
        </View> 
            )}

        return (
            <View
                style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            {renderHeaderlogo()}
        <Animated.FlatList
        ref={flatListRef}
          horizontal
          pagingEnabled
          data={constants.onboarding_screens}
          scrollEventThrottle={16}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent:{contentOffset:{x:scrollX}
            }}],
            {useNativeDriver:false}
          )}

          keyExtractor={(item)=>`${item.id}`}
          renderItem={({item,index})=>{
            return(
                <View style={{width:SIZES.width}}>
                   {/* {header} */}
                <View style={{flex:1}}>
                    <ImageBackground source={item.backgroundImage}
                    style={{flex:1,alignItems:'center',justifyContent:'flex-end',height:index==1?'86%':'100%',width:'100%'}}>
                        <Image   source={item.bannerImage} resizeMode="contain" style={{width:SIZES.width*0.8,height:SIZES.width*0.8,marginBottom:-SIZES.padding}}/>

                    </ImageBackground>
                    </View>

                    {/* {Details} */}

                    <View style={{flex:1,marginTop:30,alignItems:'center',justifyContent:'center',paddingHorizontal:SIZES.radius}}>
                            <Text style={{...FONTS.h3,fontSize:25}}>{item.title}</Text>
                           <Text style={{marginTop:SIZES.radius,textAlign:'center',color:COLORS.darkGray,paddingHorizontal:SIZES.padding,...FONTS.body3}}>{item.description}</Text>
                    </View>
                    </View>
            )
          }}
          />             

            {renderFooter()}

        </View>
    )
}

export default OnBoarding;