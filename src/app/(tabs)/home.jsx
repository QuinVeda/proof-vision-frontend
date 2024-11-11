import { Text, Pressable, View, Image, ScrollView } from "react-native";
import React from 'react'
import ProjectCard from "../../components/ProjectCard";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const projectDetail = {
    name: "Project 2",
    type: "",
    Description: "Get a comprehensive summary of your media analysis results."
  }
  return (
    <SafeAreaView className="flex-1 bg-[#ecebf5] w-full h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>

        <View className="flex top-[528px] grow justify-between grid-cols-3 grid-flow-row">
          {/* <View className=" h-[271px] w-[183px] ">
            <View className="absolute h-[271px] w-[183px] rounded-[30px] bg-[#326afd]" />
            <Text className="absolute top-[63px] left-[15px] text-left font-[InstrumentSans-SemiBold] text-[14px] font-semibold text-white w-[153px]">
              Get a comprehensive summary of your media analysis results.
            </Text>
            <Text className="absolute top-[35px] left-[17px] text-left font-[InstrumentSans-SemiBold] text-[18px] font-semibold text-white">
              Project 2
            </Text>
          </View> */}
          <ProjectCard name={projectDetail.name} type={projectDetail.type} Description={projectDetail.Description} style={"bg-[#326afd]"} />
          <ProjectCard name={projectDetail.name} type={projectDetail.type} Description={projectDetail.Description} style={"bg-[#326afd]"} />
          <ProjectCard name={projectDetail.name} type={projectDetail.type} Description={projectDetail.Description} style={"bg-[#326afd]"} />
          <ProjectCard name={projectDetail.name} type={projectDetail.type} Description={projectDetail.Description} style={"bg-[#326afd]"} />
          
          {/* <View className="absolute left-[9px] h-[271px] w-[183px] ">
            <View className="absolute h-[271px] w-[183px] rounded-[30px] bg-white" />
            <Text className="absolute top-[63px] left-[16px] text-left font-[InstrumentSans-SemiBold] text-[14px] font-semibold text-[#747474] w-[153px]">
              Get a comprehensive summary of your media analysis results.
            </Text>
            <Text className="absolute top-[35px] left-[17px] text-left font-[InstrumentSans-SemiBold] text-[18px] font-semibold text-[#333]">
              Project 1
            </Text>
          </View> */}
        </View>
        <View className="absolute left-[9px] top-[232px] flex flex-row gap-[10px]">
          <View className="bg-[rgba(0,0,0,0.8)] justify-center items-center flex flex-row p-[8px_29px] h-[31px] w-[95px] rounded-[30px]">
            <Text className="text-[12px] font-[InstrumentSans-SemiBold] font-semibold text-white">All</Text>
          </View>
          <Pressable className="bg-[#f6f6fa] justify-center items-center flex flex-row p-[8px_29px] h-[31px] w-[95px] rounded-[30px]" onPress={() => { }}>
            <Text className="text-[12px] font-[InstrumentSans-SemiBold] font-semibold text-[#333]">Audio</Text>
          </Pressable>
          <Pressable className="bg-[#f6f6fa] justify-center items-center flex flex-row p-[8px_29px] h-[31px] w-[95px] rounded-[30px]" onPress={() => { }}>
            <Text className="text-[12px] font-[InstrumentSans-SemiBold] font-semibold text-[#333]">Video</Text>
          </Pressable>
        </View>
        <Text className="absolute top-[130px] left-[9px] text-left font-[InstrumentSans-SemiBold] text-[30px] font-semibold text-[#333] w-[360px]">
          Your Deepfake Detection Dashboard
        </Text>

        <View className="absolute top-[45px] left-[18px] flex flex-row items-center gap-[20px]">
          <Image className="w-[49px] h-[49px]" resizeMode="cover" source={require("../../assets/icons/Ellipse 5.png")} />
          <View>
            <Text className="text-[16px] font-[InstrumentSans-SemiBold] font-semibold text-[#333]">Suyash Tambe</Text>
            <Text className="text-[12px] font-[InstrumentSans-SemiBold] font-semibold text-[#747474]">Suyash.tambe@gmail.com</Text>
          </View>
        </View>
        <Image className="absolute top-[47px] left-[324px] w-[40px] h-[40px]" resizeMode="cover" source={require("../../assets/icons/Ellipse 12.png")} />
        <View className="absolute left-[289px] top-[47px] p-[8px] flex items-center rounded-[20px] bg-white flex-row">
          <Image className="w-[24px] h-[24px]" resizeMode="cover" source={require("../../assets/icons/fluent_settings-28-regular.png")} />
        </View>
        <View className="absolute top-[292px] left-[9px] bg-white w-[375px] h-[223px] p-[16px_10px] flex justify-center items-center rounded-[12px]">
          <View className="w-[355px] flex flex-col items-center gap-[20px]">
            <View className="flex flex-col gap-[4px] w-[359px]">
              <Text className="text-[22px] font-[InstrumentSans-SemiBold] font-semibold text-[#333] text-left">
                Deepfake Detection Overview
              </Text>
              <Text className="text-[14px] font-[InstrumentSans-SemiBold] font-semibold text-[#747474] text-left w-[240px]">
                Get a comprehensive summary of your media analysis results.
              </Text>
            </View>
            <View className="flex flex-row gap-[11px] w-full space-y-3 ">

              <View className="w-[111px] h-[100px] p-[16px] flex items-center justify-center rounded-[15px] bg-[#333]">
                <View className="flex flex-row justify-between items-center gap-[5px]  ">
                  <Text className="text-[22px] font-semibold text-white">35</Text>
                  <Image className="w-[19px] h-[20px]" resizeMode="cover" source={require("../../assets/icons/Group.png")} />
                </View>
                <Text className="text-[9px] text-white text-center">Minutes of total content detected</Text>
              </View>
              <View className="w-[111px] h-[100px] p-[16px] flex items-center justify-center rounded-[13px] bg-[#333]">
                <View className="flex flex-row justify-between items-center gap-[5px]  ">
                  <Text className="text-[22px] font-semibold text-white">8</Text>
                  <Image className="w-[18px] h-[18px]" resizeMode="cover" source={require("../../assets/icons/Vector.png")} />
                </View>
                <Text className="text-[9px] text-white text-center">Total media content detected</Text>
              </View>
              <View className="w-[111px] h-[100px] p-[16px] flex items-center justify-center rounded-[13px] bg-[#333]">
                <View className="flex flex-row justify-between items-center gap-[5px]  ">
                  <Text className="text-[22px] font-semibold text-white">5</Text>
                  <Image className="w-[18px] h-[16px]" resizeMode="cover" source={require("../../assets/icons/Vector 1.png")} />
                </View>
                <Text className="text-[9px] text-white text-center">Media files are deepfake</Text>
              </View>
            </View>

          </View>
        </View>


        {/* <View className="flex-1 w-full h-[852px] bg-[#ecebf5] rounded-[20px] overflow-hidden">
    //   <View className="absolute left-[201px] h-[271px] w-[183px] top-[528px]">
    //     <View className="absolute rounded-[30px] left-0 top-0 h-[271px] w-[183px] bg-[#326afd]" />
    //     <Text className="absolute left-[15px] top-[63px] w-[153px] text-white font-semibold text-[14px]">Get a comprehensive summary of your media analysis results.</Text>
    //     <Text className="absolute left-[17px] top-[35px] text-white font-semibold text-[18px]">Project 2</Text>
    //   </View>
    //   <View className="absolute left-[9px] h-[271px] w-[183px] top-[528px]">
    //     <View className="absolute rounded-[30px] left-0 top-0 h-[271px] w-[183px] bg-white" />
    //     <Text className="absolute left-[16px] top-[63px] w-[153px] text-[#747474] font-semibold text-[14px]">Get a comprehensive summary of your media analysis results.</Text>
    //     <Text className="absolute left-[17px] top-[35px] text-[#333] font-semibold text-[18px]">Project 1</Text>
    //   </View>
    //   <View className="absolute left-[9px] top-[232px] flex-row space-x-2 items-center">
    //     <View className="px-[29px] py-[8px] h-[31px] w-[74px] rounded-[30px] bg-black opacity-80 flex items-center justify-center">
    //       <Text className="text-[12px] font-semibold text-white">All</Text>
    //     </View>
    //     <Pressable className="px-[29px] py-[8px] h-[31px] w-[74px] rounded-[30px] bg-[#f6f6fa] flex items-center justify-center">
    //       <Text className="text-[12px] font-semibold text-[#333]">Audio</Text>
    //     </Pressable>
    //     <Pressable className="px-[29px] py-[8px] h-[31px] w-[74px] rounded-[30px] bg-[#f6f6fa] flex items-center justify-center">
    //       <Text className="text-[12px] font-semibold text-[#333]">Video</Text>
    //     </Pressable>
    //   </View>
    //   <Text className="absolute left-[9px] top-[130px] text-[30px] text-[#333] font-semibold w-[360px]">Your Deepfake Detection Dashboard</Text>
      
    //   <View className="absolute left-[18px] top-[45px] flex-row space-x-[20px] items-center">
    //     <Image className="w-[49px] h-[49px]" resizeMode="cover" source={require("../../assets/icons/Ellipse 5.png")} />
    //     <View className="w-[150px]">
    //       <Text className="text-[16px] font-semibold text-[#333]">Suyash Tambe</Text>
    //       <Text className="text-[12px] font-semibold text-[#747474]">Suyash.tambe@gmail.com</Text>
    //     </View>
    //   </View>
    //   <Image className="absolute left-[324px] top-[47px] w-[40px] h-[40px]" resizeMode="cover" source={require("../../assets/icons/Ellipse 12.png")} />
    //   <View className="absolute left-[289px] top-[47px] p-[8px] flex items-center rounded-[20px] bg-white flex-row">
    //     <Image className="w-[24px] h-[24px]" resizeMode="cover" source={require("../../assets/icons/fluent_settings-28-regular.png")} />
    //   </View>
    //   <View className="absolute left-[9px] top-[292px] w-[375px] h-[223px] p-[10px] rounded-[12px] bg-white flex items-center justify-center">
    //     <View className="w-[355px] space-y-5 flex items-center justify-center">
    //       <View className="w-[309px] space-y-1 flex items-start">
    //         <Text className="text-[22px] font-semibold text-[#333]">Deepfake Detection Overview</Text>
    //         <Text className="text-[14px] font-semibold text-[#747474] w-[229px]">Get a comprehensive summary of your media analysis results.</Text>
    //       </View>
    //       <View className="space-y-3">
    //         <View className="w-[111px] h-[100px] p-[16px] flex items-center justify-center rounded-[15px] bg-[#333]">
    //           <Text className="text-[22px] font-semibold text-white">35</Text>
    //           <Image className="w-[18px] h-[18px]" resizeMode="cover" source={require("../../assets/icons/Group.png")} />
    //           <Text className="text-[9px] text-white">Minutes of total content detected</Text>
    //         </View>
    //         <View className="w-[111px] h-[100px] p-[16px] flex items-center justify-center rounded-[13px] bg-[#333]">
    //           <Text className="text-[22px] font-semibold text-white">8</Text>
    //           <Image className="w-[18px] h-[18px]" resizeMode="cover" source={require("../../assets/icons/Vector.png")} />
    //           <Text className="text-[9px] text-white">Total media content detected</Text>
    //         </View>
    //         <View className="w-[111px] h-[100px] p-[16px] flex items-center justify-center rounded-[13px] bg-[#333]">
    //           <Text className="text-[22px] font-semibold text-white">5</Text>
    //           <Image className="w-[18px] h-[16px]" resizeMode="cover" source={require("../../assets/icons/Vector 1.png")} />
    //           <Text className="text-[9px] text-white">Media files are deepfake</Text>
    //         </View>
    //       </View>
    //     </View>
    //   </View>
    // </View> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home