import { Link } from "expo-router";
import * as React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TimeBar from "../../components/TimeBar";

export default function SignUp() {

  return (
    <SafeAreaView className="flex-1 bg-[#08032b]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>

        <View className=" w-full h-full justify-center ">
          {/* <ImageBackground source={require("../assets/images/bg-start.png")} resizeMode="cover" className="  w-full h-full" /> */}

          <Link href={"/signup"} className="absolute top-[60px] left-[50%] -ml-[146.5px] w-[273px] h-[77px] flex flex-row items-center text-white justify-between">signup </Link>
          <Link href={"/home"} className="absolute top-[100px] left-[50%] -ml-[146.5px] w-[273px] h-[97px] flex flex-row items-center text-white justify-between">signin </Link>

          <View className=" w-full h-[200px] rounded-2xl justify-center items-center">

            {/* Results Overview Section */}

            {/* Detection Interval Section */}
            <View className="w-[90%] mt-4 bg-[#326afd] h-[100px] space-y-2 flex-col justify-center items-center">
              <View className="w-[85%] h-[15px] pt-2 ">
                <View className="w-[100%] h-[15px] bg-[#e0e0e0] rounded-xl flex-row items-center ">
                  <View className="w-[20%] h-full bg-[#ff7d79] rounded-xl ml-[10%]" />
                </View>
              </View>
              <View className="flex-row  w-full pt-3 justify-between ">
                <Text className="text-white text-[16px] font-semibold">1:10</Text>
                <Text className="text-white text-[16px] font-semibold">3:20</Text>
              </View>

              <View className="flex-row justify-center items-center pt-2">
                <Image className="w-[18px] h-[18px]" resizeMode="cover" source={require("../../assets/icons/Group.png")} />
                <Text className="text-[12px] text-white font-semibold w-[90%] pl-3 ">
                  Deepfake detected in the above given time interval
                </Text>
              </View>

              {/* Timestamps */}

              {/* Deepfake Detection Text */}
            </View>
            <View className="w-[90%] h-[168px]  bg-white rounded-b-2xl p-4 space-y-4">
              <Text className="text-[#333] text-[20px] font-semibold">Results Overview</Text>

              <View className="flex-row justify-between w-full">
                {/* Confidence Level */}
                <View className="w-[30%] items-center">
                  <Text className="text-[28px] text-[#333] font-semibold">88%</Text>
                  <Text className="text-[14px] text-[#747474] text-center font-semibold">Confidence Level Percentage</Text>
                </View>
                {/* Manipulation Likelihood */}
                <View className="w-[30%] items-center">
                  <Text className="text-[28px] text-[#333] font-semibold">53%</Text>
                  <Text className="text-[14px] text-[#747474] text-center font-semibold">Manipulation Likelihood</Text>
                </View>
                {/* Authentic Content */}
                <View className="w-[30%] items-center">
                  <Text className="text-[28px] text-[#333] font-semibold">63%</Text>
                  <Text className="text-[14px] text-[#747474] text-center font-semibold">Authentic Content Percentage</Text>
                </View>
              </View>
            </View>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  );
}; 