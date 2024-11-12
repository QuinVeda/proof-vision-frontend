import React, { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";
import apiService from "../../services/apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Reset = () => {
    const { setUser, setIsLogged } = useGlobalContext();
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
    });

    const handleReset = async () => {
        setSubmitting(true);
        try {
            const res = await apiService.post("/auth/password/reset/", form);
            console.log(res);
            // router.replace("/home
            Alert.alert("Success", res.data.detail);
        } catch (error) {
            console.error("Error during reset:", error.response.data);
            Alert.alert("Error", "Failed to reset password");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-[#08032b] ">
            <ScrollView contentContainerStyle={{ height: "100%" }} >
                <View className="  rounded-2xl ">
                    <Text className="absolute top-[59px] left-[33px] text-5xl text-center font-[Staatliches-Regular] text-white">
                        <Text className="text-white">Reset </Text>
                        <Text className="text-[#326afd]">Password!</Text>
                    </Text>
                    <View className="relative top-[186px] left-[50%] -mx-[161.5px] w-[330px] gap-5 z-10   " >
                        <FormField title="Your Email" value={form.email} handleChangeText={(e) => setForm({ ...form, email: e })} keyboardType="email-address" placeholderTextColor={"#ffffff"} />
                    </View>
                    <CustomButton title="Reset" handlePress={handleReset} isLoading={isSubmitting} textStyles={"text-[#333] text-lg"} containerStyles={"bg-[#f6f6fa] left-[50%] px-5 py-2 absolute top-[338px] -ml-[66.5px] w-[149px] h-[43px] rounded-[35px] "} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Reset;