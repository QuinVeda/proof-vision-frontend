import React, { useState } from 'react'
import { Text, Pressable, View, ScrollView, Image, Touchable } from "react-native";
import FormField from "../../components/FormField"
import CustomButton from "../../components/CustomButton"
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import * as DocumentPicker from "expo-document-picker";
import { Alert } from "react-native";



const Upload = () => {
  const [form, setForm] = useState(
    {
      name: "",
      type: "",
      description: ""
    }
  )
  const [uploading, setUploading] = useState(false);

  const openPicker = async (selectType) => {
    const result = await DocumentPicker.getDocumentAsync({
      type:
        selectType === "audio"
          ? ["audio/mp3"]
          : ["video/mp4"],
    });

    if (!result.canceled) {
      if (selectType === "audio") {
        setUploadForm({
          ...UploadForm,
          audio: result.assets[0],
        });
      }

      if (selectType === "video") {
        setUploadForm({
          ...UploadForm,
          video: result.assets[0],
        });
      }
    } else {
      setTimeout(() => {
        Alert.alert("Document picked", JSON.stringify(result, null, 2));
      }, 100);
    }
  };


  const handleSubmit = async () => {
    if (
      (UploadForm.Type === "") |
      (UploadForm.title === "") |
      !UploadForm.audio |
      !UploadForm.video
    ) {
      return Alert.alert("Please provide all fields");
    }
    console.log(UploadForm);

    setUploading(true);
    try {
      await createVideoPost({
        ...UploadForm,
        userId: user.$id,
      });

      Alert.alert("Success", "Post uploaded successfully");
      router.push("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setUploadForm({
        title: "",
        video: null,
        audio: null,
        Type: "",
        Description: ""
      });

      setUploading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#ecebf5]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full rounded-[20px]">

          <View className="absolute left-[95px] top-[56px] w-[204px] flex flex-col gap-[8px] justify-center">
            <View className="flex flex-row gap-[16px] items-center">
              <Image className="w-[27px] h-[27px] overflow-hidden" resizeMode="cover" source={require("../../assets/icons/tdesign_file-add.png")} />
              <Text className="text-[#333] font-semibold text-[28px] text-left">Upload Files</Text>
            </View>
            <Text className="text-[#747474] text-center font-semibold text-xs">Upload the files here for detection</Text>
          </View>

          <View className="absolute left-1/2 top-[151px] w-[330px] flex flex-col gap-[16px] -ml-[164.5px]">
            <FormField title="Project name" value={form.name} handleChangeText={(e) => setUploadForm({ ...form, name: e })} style={" bg-[#f6f6fa] rounded-[39px]"} textstyle={""} placeholderTextColor={"#333"} />
            <FormField title="Type" value={form.type} handleChangeText={(e) => setUploadForm({ ...form, type: e })} style={" bg-[#f6f6fa] rounded-[39px]"} textstyle={""} placeholderTextColor={"#333"} />
            <FormField title="Description (Optional)" value={form.description} handleChangeText={(e) => setUploadForm({ ...form, description: e })} style={" bg-[#f6f6fa] rounded-[39px]"} textstyle={""} placeholderTextColor={"#333"} />
          </View>

          <View className="absolute left-[11px] top-[394px] w-[371px] h-[322px]">
            <View className="absolute left-0 top-0 w-[371px] flex flex-col gap-[29px]">
            <TouchableOpacity onPress={() => openPicker("video")}>
              <View className="bg-white border border-dashed border-[#326afd] rounded-[12px] h-[151px]  p-5 flex flex-col items-center gap-3">
                <View className="flex flex-col justify-center items-center">
                  <Image className="w-[35px] h-[35px] overflow-hidden" resizeMode="cover" source={require("../../assets/icons/lets-icons_upload.png")} />
                  <Text className="text-[#333] text-left font-semibold text-xs">Drop your files here</Text>
                </View>
                <CustomButton title="Choose Files" handlePress={handleSubmit} containerStyles={" rounded-[6px] px-[10px] py-[7px] w-[102px] h-[30px] bg-[#326afd]"} textStyles={"text-[11px] text-white font-semibold"} />
              </View>
            </TouchableOpacity>

              <View className="bg-white rounded-[12px] h-[68px] p-3 flex flex-col justify-center items-left">
                <View className="flex flex-row gap-[14px] items-left">
                  <Image className="w-[27px] h-[30px] overflow-hidden" resizeMode="cover" source={require("../../assets/icons/solar_folder-with-files-outline.png")} />
                  <View className="w- flex flex-col pb-2 ">
                    <Text className="text-[#333] font-semibold text-[14px]">Test video.mp4</Text>
                    <Text className="text-[#333] font-semibold text-[10px]">344 mb</Text>
                  </View>
                </View>
                <View className="w-[327px] h-[6px] flex flex-col relative z-10">
                  <View className="absolute left-[119px] w-[208px] h-[6px] bg-[#e0e0e0] rounded-[12px]" />
                  <View className="absolute left-0 w-[203px] h-[6px] bg-[#20e003] rounded-[12px]" />
                </View>
                <Image className="absolute top-[10%] right-[0.12%] w-[2.1%] h-[15.56%] z-20 overflow-hidden" resizeMode="cover" source={require("../../assets/icons/Vector.png")} />
              </View>
            </View>

            <CustomButton title="submit" handlePress={handleSubmit} containerStyles={" px-5 py-2 rounded-[35px] left-[50%] top-[280px] -ml-[82.5px] w-[176px] h-[42px] bg-[#326afd] "} textStyles={"text-white font-semibold"} />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Upload