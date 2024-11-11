// import React from 'react';
// import { View } from 'react-native';
// import Svg, { Circle, Line } from 'react-native-svg';

// const Getstarted = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
//       {/* <Svg height="200" width="200" viewBox="0 0 200 200">
        
//         <Circle cx="100" cy="100" r="90" stroke="cyan" strokeWidth="2" fill="none" />
        
        
//         <Circle cx="100" cy="60" r="3" fill="cyan" />  
//         <Circle cx="85" cy="90" r="3" fill="cyan" />    
//         <Circle cx="115" cy="90" r="3" fill="cyan" />   
//         <Circle cx="100" cy="120" r="3" fill="cyan" />  
//         <Circle cx="90" cy="140" r="3" fill="cyan" />   
//         <Circle cx="110" cy="140" r="3" fill="cyan" />  
        
        
//         <Line x1="85" y1="90" x2="115" y2="90" stroke="cyan" strokeWidth="1" />  
//         <Line x1="100" y1="60" x2="100" y2="120" stroke="cyan" strokeWidth="1" /> 
//       </Svg> */}

      
//     </View>
    
//   )
// }

// export default Getstarted

import { Link } from "expo-router";
import * as React from "react";
import { useEffect } from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import apiService from "../services/apiService";
import { useGlobalContext } from "../context/GlobalContext";


export default function Home () {
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