import React, { useEffect } from "react";
import {  ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import apiService from "../services/apiService";
import { useGlobalContext } from "../context/GlobalContext";
import AddGifImage from "../components/Gif"
import CustomButton from "../components/CustomButton"
import { Link, router } from "expo-router";

export default function Home() {
  const { setIsLogged, setUser } = useGlobalContext();
  const load = async () => {
    const res = await apiService.getCurrentUser();
    if (res.success) {
      setIsLogged(true);
      setUser(res.data);
    }
  }

  useEffect(() => {
    try {
      load();
    }
    catch (e) {
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#070420]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>

        <View className=" flex flex-col w-full h-full justify-center  ">

          <Text className="text-white text-[30px] font-semibold text-center mb-6 mt-8 ">
            Proof Visison.
          </Text>
          <View className=" flex grow justify-center  ">
            <AddGifImage />
          </View>
          <View className=" flex flex-col grow justify-center items-center mt-[-200px] ">
            <CustomButton title="Get Started" handlePress={() => { router.push("/home") }} containerStyles="bg-[#88A3EE]  rounded-[30px] w-[200px] h-[50px]" textStyles="text-[#4A10C5] text-xl" />
            {/* <CustomButton title="Get Started" handlePress={() => { router.push("/signup") }} containerStyles="bg-[#88A3EE]  rounded-[30px] w-[200px] h-[50px]" textStyles="text-[#4A10C5] text-xl" /> */}
            <View className="flex flex-row grow mt-[-60px] items-center " >
              <Text className="text-[16px] text-[#ffffff99]">Already have an account?</Text>
              <Link href={"/signin"} className="text-lg font-bold text-white"> Login </Link>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  );
}; 