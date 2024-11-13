import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";

export default function Result() {
  const { newProject } = useGlobalContext();

  return (
    <SafeAreaView className="flex-1 bg-[#ecebf5] w-full h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className=" w-full h-full justify-center ">
          {/* <ImageBackground source={require("../assets/images/bg-start.png")} resizeMode="cover" className="  w-full h-full" /> */}
          {
            newProject ? (<View className=" w-full h-[200px] rounded-2xl justify-center items-center">
              {/* Detection Interval Section */}
              <View className="w-[90%] h-[168px]  bg-white rounded-2xl p-4 space-y-4">
                <Text className="text-[#333] text-[20px] mb-6 font-semibold">Results: {newProject.name}</Text>
                <View className="flex-row justify-between w-full">
                  {/* Confidence Level */}
                  <View className="w-[45%] items-center">
                    <Text className="text-[28px] text-[#333] font-semibold">{(newProject.results.authenticity * 100).toFixed(2)}%</Text>
                    <Text className="text-[14px] text-[#747474] text-center font-semibold">Authenticity</Text>
                  </View>
                  {/* Manipulation Likelihood */}
                  <View className="w-[45%] items-center">
                    <Text className="text-[28px] text-[#333] font-semibold">{(newProject.results.fakeness * 100).toFixed(2)}%</Text>
                    <Text className="text-[14px] text-[#747474] text-center font-semibold">Fakeness</Text>
                  </View>
                </View>
              </View>
              <Text className={`${newProject.results.is_real ? "text-[#2ae620]" : "text-red-500"} text-[20px] m-6 font-semibold`}> The {newProject.type} is {newProject.results.is_real ? "real" : "fake"}</Text>
            </View>) : (
              <View className="flex flex-col w-full h-[200px] justify-center items-center">
                <Text className="text-[#333] text-[20px] mb-6 font-semibold">No Results</Text>
              </View>
            )
          }

        </View>
      </ScrollView>
    </SafeAreaView>

  );
};