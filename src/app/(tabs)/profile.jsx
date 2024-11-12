import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#ecebf5]">
      <ScrollView>
        <View className="flex-1 bg-[#ecebf5] rounded-2xl w-full mt-10 justify-center items-center h-full">

          <Text className=" text-center text-[#333] text-[22px] font-semibold">Profile</Text>
          {/* Profile Header */}
          <View className=" items-center mt-14 mb-4 space-y-3">
            <Image className="w-[126px] h-[126px] rounded-full mb-4" resizeMode="cover" source={require("../../assets/icons/Ellipse 11.png")} />
            <Text className="text-[#333] text-[20px] font-semibold text-center">Suyash Tambe</Text>
          </View>


          {/* Profile Options */}
          <View className=" flex flex-col justify-center items-stretch mt-8 w-[350px] space-y-16">
            {/* Personal Details */}
            <Pressable className="flex-row items-center justify-between my-10  px-2" onPress={() => { router.push("/home") }}>
              <View className="flex-row items-center space-x-2">
                <Image className="w-[24px] h-[24px] mr-4" resizeMode="cover" source={require("../../assets/icons/solar_user-outline.png")} />
                <Text className="text-[#333] text-[16px] font-medium">Personal Details</Text>
              </View>
              <Image className="w-[8px] h-[15px]" resizeMode="cover" source={require("../../assets/icons/Vector-arrow.png")} />
            </Pressable>

            {/* Settings */}
            <View className="flex-row items-center justify-between px-2">
              <View className="flex-row items-center space-x-2">
                <Image className="w-[24px] h-[24px] mr-4" resizeMode="cover" source={require("../../assets/icons/fluent_settings-28-regular.png")} />
                <Text className="text-[#333] text-[16px] font-medium">Settings</Text>
              </View>
              <Image className="w-[8px] h-[15px]" resizeMode="cover" source={require("../../assets/icons/Vector-arrow.png")} />
            </View>

            {/* Help Centre */}
            <View className="flex-row items-center justify-between my-10 px-2">
              <View className="flex-row items-center space-x-2">
                <Image className="w-[24px] h-[24px] mr-4" resizeMode="cover" source={require("../../assets/icons/iconoir_headset-help.png")} />
                <Text className="text-[#333] text-[16px] font-medium">Help Centre</Text>
              </View>
              <Image className="w-[8px] h-[15px]" resizeMode="cover" source={require("../../assets/icons/Vector-arrow.png")} />
            </View>

            {/* Privacy Policy */}
            <View className="flex-row items-center justify-between px-2">
              <View className="flex-row items-center space-x-2">
                <Image className="w-[24px] h-[24px] mr-4" resizeMode="cover" source={require("../../assets/icons/ic_outline-privacy-tip.png")} />
                <Text className="text-[#333] text-[16px] font-medium">Privacy Policy</Text>
              </View>
              <Image className="w-[8px] h-[15px]" resizeMode="cover" source={require("../../assets/icons/Vector-arrow.png")} />
            </View>

            {/* FAQ */}
            <View className="flex-row items-center justify-between my-10 px-2">
              <View className="flex-row items-center space-x-2">
                <Image className="w-[24px] h-[24px] mr-4" resizeMode="cover" source={require("../../assets/icons/clarity_help-line.png")} />
                <Text className="text-[#333] text-[16px] font-medium">FAQ</Text>
              </View>
              <Image className="w-[8px] h-[15px]" resizeMode="cover" source={require("../../assets/icons/Vector-arrow.png")} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile