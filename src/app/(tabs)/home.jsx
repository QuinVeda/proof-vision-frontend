import { Text, View, Image, FlatList } from "react-native";
import React from 'react'
import ProjectCard from "../../components/ProjectCard";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";

const Home = () => {
  project = [
    {
      "id": 2,
      "name": "dvsgsrd",
      "type": "video",
      "description": "",
      "file": "https://proofvision.s3.amazonaws.com/detections/1/videoplayback.mp4",
      "results": {
          "confidence": 0.79,
          "authenticity": 0.48
      },
      "created_at": "2024-11-11T22:32:56.764520Z",
      "updated_at": "2024-11-11T22:32:56.971171Z",
      "user": 1
  },
  {
      "id": 1,
      "name": "ass",
      "type": "video",
      "description": "",
      "file": "https://proofvision.s3.amazonaws.com/detections/1/videoplayback.mp4",
      "results": {
          "confidence": 0.57,
          "authenticity": 0.42
      },
      "created_at": "2024-11-11T22:28:14.072235Z",
      "updated_at": "2024-11-11T22:28:14.810798Z",
      "user": 1
  },{
    "id": 4,
    "name": "dvsgsrd",
    "type": "video",
    "description": "",
    "file": "https://proofvision.s3.amazonaws.com/detections/1/videoplayback.mp4",
    "results": {
        "confidence": 0.79,
        "authenticity": 0.48
    },
    "created_at": "2024-11-11T22:32:56.764520Z",
    "updated_at": "2024-11-11T22:32:56.971171Z",
    "user": 1
},
{
    "id": 3,
    "name": "ass",
    "type": "video",
    "description": "",
    "file": "https://proofvision.s3.amazonaws.com/detections/1/videoplayback.mp4",
    "results": {
        "confidence": 0.57,
        "authenticity": 0.42
    },
    "created_at": "2024-11-11T22:28:14.072235Z",
    "updated_at": "2024-11-11T22:28:14.810798Z",
    "user": 1
}
]

  return (
    <SafeAreaView className="flex-1 bg-[#ecebf5] w-full h-full">

<View className="flex-1 w-full h-full ">
        <View className=" flex flex-row p-6 mt-6 items-center ">
          <Image className="w-[40px] h-[40px] rounded-full " resizeMode="cover" source={require("../../assets/icons/Ellipse 5.png")} />
          <View className="flex flex-col pl-6 ">
            <Text className="text-[#333333] text-[16px] font-semibold">Suyash Tambe</Text>
            <Text className="text-[#747474] text-[12px] font-semibold">Suyash.tambe@gmail.com</Text>
          </View>
          {/* <Image className="w-[40px] h-[40px] rounded-full ml-auto " resizeMode="cover" source={require("../../assets/icons/Ellipse 5.png")} />
          <Image className="w-[40px] h-[40px] rounded-full " resizeMode="cover" source={require("../../assets/icons/Ellipse 5.png")} /> */}
        </View>

        <Text className="text-[#33333] text-[30px] pl-4  items-left ">Your Deepfake Detection Dashboard </Text>

        <View className="flex flex-row p-4 mt-4 items-center ">
          <CustomButton title={"All"} containerStyles={"w-[80px] h-[35px] bg-[#FFFFFF] rounded-3xl items-center  mr-3 "} textStyles={"text-[#333333] text-[14px] text-center font-semibold "} />
          <CustomButton title={"Audio"} containerStyles={"w-[80px] h-[35px] bg-[#FFFFFF] rounded-3xl items-center  "} textStyles={"text-[#333333] text-[14px] text-center font-semibold "} />
          <CustomButton title={"Video"} containerStyles={"w-[80px] h-[35px] bg-[#FFFFFF] rounded-3xl items-center mx-3 "} textStyles={"text-[#333333] text-[14px] text-center font-semibold "} />
        </View>

        <View className="flex flex-col p-4 mt-4  bg-white ">
          <Text className="text-[#333333] text-[22px] font-semibold font-[InstrumentSans]" >Deepfake Detection Overview</Text>
          <Text className="text-[#747474]  text-[14px] font-semibold font-[InstrumentSans] " >Get a comprehensive summary of your media analysis results.</Text>
          <View className="flex flex-wrap flex-row justify-between p-1 mt-6 pb-4 w-full  h-auto  ">
            <View className="flex flex-col rounded-2xl w-[30%] items-center bg-[#333333] ">
              <View className="flex flex-row p-2 mt-4 justify-center items-center ">
                <Text className="text-[#FFFFFF] text-[20px] font-semibold font-[InstrumentSans] ">35</Text>
                <Image className="w-[20px] h-[20px] rounded-full ml-2 " resizeMode="contain" source={require("../../assets/icons/Group.png")} />
              </View>
              <Text className="text-[#FFFFFF] text-[10px] font-semibold font-[InstrumentSans] mb-5 mx-4">Minutes of total content detected</Text>
            </View>
            <View className="flex flex-col rounded-2xl w-[30%]  items-center bg-[#333333] ">
              <View className="flex flex-row p-2 mt-4 justify-center items-center ">
                <Text className="text-[#FFFFFF] text-[20px] font-semibold font-[InstrumentSans] ">35</Text>
                <Image className="w-[20px] h-[20px] rounded-full ml-2 " resizeMode="contain" source={require("../../assets/icons/Group.png")} />
              </View>
              <Text className="text-[#FFFFFF] text-[10px] font-semibold font-[InstrumentSans] mb-5 mx-4">Minutes of total content detected</Text>
            </View>
            <View className="flex flex-col rounded-2xl w-[30%] items-center bg-[#333333] ">
              <View className="flex flex-row p-2 mt-4 justify-center items-center ">
                <Text className="text-[#FFFFFF] text-[20px] font-semibold font-[InstrumentSans] ">35</Text>
                <Image className="w-[20px] h-[20px] rounded-full ml-2 " resizeMode="contain" source={require("../../assets/icons/Group.png")} />
              </View>
              <Text className="text-[#FFFFFF] text-[10px] font-semibold font-[InstrumentSans] mb-5 mx-4">Minutes of total content detected</Text>
            </View>
          </View>
        </View>

        <FlatList 
          data={project}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-around",marginBottom:12 }}
          renderItem={({ item }) => (
            <ProjectCard 
              id={item.id}
              name={item.name}
              Description={item.description}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 20 }}
        />
      </View>



    </SafeAreaView>

  )
}

export default Home