import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const FormField = ({title,value,handleChangeText,keyboardType,style, ...props}) => {
    const [showPass, setShowPass] = useState(false)

    if (style == undefined){
        style="bg-[#1a1422]"

    }
    
    useEffect(()=>{
        if (props.showPass !== undefined){
        setShowPass(props.showPass)
        }
    }, [])

    return (
        <View className={`flex flex-row w-full  items-center rounded-[39px] h-[52px] px-5 py-1 focus:border-white justify-between ${ style } ` } >
            <TextInput className={`text-lg text-[#ffffff99] grow ${props.textstyle}`} 
            value={value}
                onChangeText={handleChangeText} 
                placeholderTextColor={props.placeholderTextColor} 
                placeholder={title}
                secureTextEntry={showPass}
             />

             {props.showPass && (
                <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                    <Image source={showPass ? require('../assets/icons/eye.png') : require('../assets/icons/eye-hide.png')} resizeMode='contain' className="w-6 h-6 items-end justify-end" />
                </TouchableOpacity>
             )}
        </View>
    )
}

export default FormField