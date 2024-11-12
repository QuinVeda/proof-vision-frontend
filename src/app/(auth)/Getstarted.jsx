import { Link } from "expo-router";
import * as React from "react";
import { useEffect } from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";


export default function Home () {
  const { setIsLogged, setUser } = useGlobalContext();
  return (
    <SafeAreaView className="flex-1 bg-[#08032b]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>

        <View className=" w-full h-full justify-center ">
          {/* <ImageBackground source={require("../assets/images/bg-start.png")} resizeMode="cover" className="  w-full h-full" /> */}

          <Link href={"/signup"} className="absolute top-[60px] left-[50%] -ml-[146.5px] w-[273px] h-[77px] flex flex-row items-center text-white justify-between">signup </Link>
          <Link href={"/home"} className="absolute top-[100px] left-[50%] -ml-[146.5px] w-[273px] h-[97px] flex flex-row items-center text-white justify-between">signin </Link>

        </View>
      </ScrollView>
    </SafeAreaView>

  );
};