import { View, Text } from 'react-native'
import React from 'react'

const ProjectCard = ({name,Description,...props}) => {
    return (
        <View className=" h-[271px] w-[183px] ">
            <View className={` h-[271px] w-[183px] rounded-[30px] ${props.style}`} />
            <Text className=" top-[63px] left-[15px] text-left font-[InstrumentSans-SemiBold] text-[14px] font-semibold text-white w-[153px]">
                {Description}
            </Text>
            <Text className=" top-[35px] left-[17px] text-left font-[InstrumentSans-SemiBold] text-[18px] font-semibold text-white">
                {name}
            </Text>
        </View>
    )
}

export default ProjectCard