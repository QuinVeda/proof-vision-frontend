import React, { useState } from 'react'
import { Text, Pressable, View, ScrollView, Image, Touchable } from "react-native";
import FormField from "../../components/FormField"
import CustomButton from "../../components/CustomButton"
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import * as DocumentPicker from "expo-document-picker";
import { Alert } from "react-native";
import { router } from 'expo-router';
import apiService from '../../services/apiService';
import DropDownPicker from 'react-native-dropdown-picker';
import { useGlobalContext } from '../../context/GlobalProvider';


const Upload = () => {
  const { setNewProject } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Video', value: 'video' },
    { label: 'Audio', value: 'audio' },
  ]);
  const [form, setForm] = useState(
    {
      name: "",
      description: "",
      file: null
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
        setForm({
          ...form,
          file: result.assets[0],
        });
      }

      if (selectType === "video") {
        setForm({
          ...form,
          file: result.assets[0],
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
      (value === "") |
      (form.title === "") |
      !form.file
    ) {
      return Alert.alert("Please provide all fields");
    }
    console.log(form);

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("type", value);
      formData.append("description", form.description);
      formData.append("file", {
        uri: form.file.uri,
        name: form.file.name,       // File name
        type: form.file.mimeType,    // File type (mime type)
      });
      const res = await apiService.post("/detections/", formData);
      if (res.success === true) {
        Alert.alert("Success", "File uploaded successfully");
        setNewProject(res.data);
        router.push("/result");
      } else {
        Alert.alert("Error", res.message);
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setForm({
        name: "",
        file: null,
        type: "",
        description: ""
      });
      setValue(null);
      setUploading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#ecebf5]" nestedScrollEnabled={true}>
      <View contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full rounded-[20px]">

          <View className="absolute left-[95px] top-[56px] w-[204px] flex flex-col gap-[8px] justify-center">
            <View className="flex flex-row gap-[16px] items-center">
              <Image className="w-[27px] h-[27px] overflow-hidden" resizeMode="cover" source={require("../../assets/icons/tdesign_file-add.png")} />
              <Text className="text-[#333] font-semibold text-[28px] text-left">Upload Files</Text>
            </View>
            <Text className="text-[#747474] text-center font-semibold text-xs">Upload the files here for detection</Text>
          </View>

          <View className="absolute left-1/2 top-[151px] w-[330px] flex flex-col gap-[16px] -ml-[164.5px]">
            <FormField title="Project name" value={form.name} handleChangeText={(e) => setForm({ ...form, name: e })} style={" bg-[#f6f6fa] rounded-xl"} textstyle={"text-black"} placeholderTextColor={"#333"} />
            {/* <FormField title="Type" value={form.type} handleChangeText={(e) => setForm({ ...form, type: e })} style={" bg-[#f6f6fa] rounded-[39px]"} textstyle={"text-black"} placeholderTextColor={"#333"} /> */}
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
            <FormField title="Description (Optional)" value={form.description} handleChangeText={(e) => setForm({ ...form, description: e })} style={" bg-[#f6f6fa] rounded-xl"} textstyle={"text-black"} placeholderTextColor={"#333"} />
          </View>

          <View className="left-[11px] top-[394px] w-[371px] h-[322px]">
            <View className="absolute left-[22px] w-[337px] mx-auto flex flex-col">
              <TouchableOpacity onPress={() => openPicker(value)}>
                <View className="bg-white border border-dashed border-[#326afd] rounded-[12px] h-[151px]  p-5 flex flex-col items-center gap-3">
                  <View className="flex flex-col justify-center items-center">
                    <Image className="w-[35px] h-[35px] overflow-hidden" resizeMode="cover" source={require("../../assets/icons/lets-icons_upload.png")} />
                    <Text className="text-[#333] text-left font-semibold text-xs">Drop your files here</Text>
                  </View>
                  <CustomButton title="Choose Files" handlePress={() => openPicker(value)} containerStyles={" rounded-[6px] px-[10px] py-[7px] w-[102px] h-[30px] bg-[#326afd]"} textStyles={"text-[11px] text-white font-semibold"} />
                </View>
              </TouchableOpacity>
            </View>

            <CustomButton title="submit" handlePress={handleSubmit} containerStyles={"px-5 py-2 rounded-[35px] left-[180px] top-[250px] -ml-[82.5px] w-[176px] h-[42px] bg-[#326afd] "} textStyles={"text-white font-semibold"} />

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Upload