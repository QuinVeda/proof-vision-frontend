import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#ecebf5]">
      <ScrollView>
      <View className="flex-1 bg-[#ecebf5] rounded-2xl w-full h-[852px] overflow-hidden">
      
      {/* Profile Header */}
      <View className="absolute top-[107px] left-1/2 -translate-x-1/2 w-[137px] space-y-3">
        <Image className="w-[126px] h-[126px] rounded-full" resizeMode="cover" source={ require("../../assets/icons/Ellipse 11.png" )} />
        <Text className="text-[#333] text-[20px] font-semibold text-center">Suyash Tambe</Text>
      </View>

      <Text className="absolute top-[40px] left-[163px] text-[#333] text-[22px] font-semibold">Profile</Text>

      {/* Profile Options */}
      <View className="absolute top-[371px] left-1/2 -translate-x-1/2 w-[350px] space-y-8">
        {/* Personal Details */}
        <Pressable className="flex-row items-center justify-between px-2" onPress={() => {}}>
          <View className="flex-row items-center space-x-2">
            <Image className="w-[24px] h-[24px]" resizeMode="cover" source={require("../../assets/icons/solar_user-outline.png") } />
            <Text className="text-[#333] text-[16px] font-medium">Personal Details</Text>
          </View>
          <Image className="w-[8px] h-[15px]" resizeMode="cover" source={require("../../assets/icons/Vector-arrow.png" )} />
        </Pressable>

        {/* Settings */}
        <View className="flex-row items-center justify-between px-2">
          <View className="flex-row items-center space-x-2">
            <Image className="w-[24px] h-[24px]" resizeMode="cover" source={require("../../assets/icons/fluent_settings-28-regular.png")} />
            <Text className="text-[#333] text-[16px] font-medium">Settings</Text>
          </View>
          <Image className="w-[8px] h-[15px]" resizeMode="cover" source={require("../../assets/icons/Vector-arrow.png" )} />
        </View>

        {/* Help Centre */}
        <View className="flex-row items-center justify-between px-2">
          <View className="flex-row items-center space-x-2">
            <Image className="w-[24px] h-[24px]" resizeMode="cover" source={require("../../assets/icons/iconoir_headset-help.png" )} />
            <Text className="text-[#333] text-[16px] font-medium">Help Centre</Text>
          </View>
          <Image className="w-[8px] h-[15px]" resizeMode="cover" source={require("../../assets/icons/Vector-arrow.png" )} />
        </View>

        {/* Privacy Policy */}
        <View className="flex-row items-center justify-between px-2">
          <View className="flex-row items-center space-x-2">
            <Image className="w-[24px] h-[24px]" resizeMode="cover" source={require("../../assets/icons/ic_outline-privacy-tip.png")} />
            <Text className="text-[#333] text-[16px] font-medium">Privacy Policy</Text>
          </View>
          <Image className="w-[8px] h-[15px]" resizeMode="cover" source={require("../../assets/icons/Vector-arrow.png" )} />
        </View>

        {/* FAQ */}
        <View className="flex-row items-center justify-between px-2">
          <View className="flex-row items-center space-x-2">
            <Image className="w-[24px] h-[24px]" resizeMode="cover" source={require("../../assets/icons/clarity_help-line.png" )} />
            <Text className="text-[#333] text-[16px] font-medium">FAQ</Text>
          </View>
          <Image className="w-[8px] h-[15px]" resizeMode="cover" source={require("../../assets/icons/Vector-arrow.png" )} />
        </View>
      </View>
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile