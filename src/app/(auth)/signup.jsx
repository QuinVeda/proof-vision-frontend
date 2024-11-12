import React, { useState, useEffect } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import apiService from "../../services/apiService";



export default function SignUp() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password1: "",
		password2: "",
	})
	const [toggleClass, setToggleClass] = useState('')
	const [isSubmitting, setSubmitting] = useState(false);


	useEffect(() => {
		if (form.password1 !== form.password2) {
			setToggleClass('text-red-500')
		}
		else {
			setToggleClass('text-[#ffffff99]')
		}
	}, [])

	const handleSignUp = async () => {
		setSubmitting(true);
		try {
			const res = await apiService.post("/auth/register/", form);
			console.log(res);
			if (res.success === true) {
				Alert.alert("Success", res.data.detail);
				router.replace("/signin");
			}
		}
		catch (error) {
			Alert.alert("Error", error.response.data.error.errors[0].detail);
		}
		finally {
			setSubmitting(false);
		}
	}

	const handleSignInWithGoogle = () => { }

	return (
		<SafeAreaView className="flex-1 bg-[#08032b] rounded-2xl">
			<ScrollView contentContainerStyle={{ height: "100%" }}>
						<View className="relative top-[186px] left-[50%] -mx-[161.5px] w-[330px] gap-5 z-10   " >
							<FormField title="Name" value={form.name} handleChangeText={(e) => setForm({ ...form, name: e })} placeholderTextColor={"#ffffff"}  />
							<FormField title="Your Email" value={form.email} handleChangeText={(e) => setForm({ ...form, email: e })} placeholderTextColor={"#ffffff"}  />
							<FormField textstyle={toggleClass} title="Your Password" showPass={true} value={form.password1} handleChangeText={(e) => setForm({ ...form, password1: e })}  placeholderTextColor={"#ffffff"} />
							<FormField textstyle={toggleClass} title="Re-enter Password" showPass={true} value={form.password2} handleChangeText={(e) => setForm({ ...form, password2: e })}  placeholderTextColor={"#ffffff"} />
						</View>
					<View className="absolute top-[911px] left-[150px] rounded-[30px] w-[150px] h-[5px] bg-white" />
					<View className="absolute top-[596px] left-[50%] -ml-[186.5px] gap-4 flex flex-row items-center">
						<View className="w-[166px] h-[2px] rounded-[12px] bg-white" />
						<Text className="text-2xl font-semibold text-center text-white">OR</Text>
						<View className="w-[166px] h-[2px] rounded-[12px] bg-white" />
					</View>

					<Text className="absolute top-[59px] left-[33px] text-5xl text-center font-[Staatliches-Regular] text-white">
						<Text className="text-white">USER </Text>
						<Text className="text-[#326afd]">INFO</Text>
					</Text>

					<View className="absolute top-[438px] left-[50%] gap-8 -ml-[146.5px] w-[273px] h-[77px] flex flex-row items-center justify-between">
						{/* <View className="bg-[#f6f6fa] px-5 py-2 rounded-[35px] mb-10 ml-[80px]  flex items-center justify w-[149px] h-[43px]">
							<Text className="text-lg font-bold  text-[#333]">Sign up</Text>
						</View> */}
						<CustomButton title="Sign up" isLoading={isSubmitting} handlePress={handleSignUp} containerStyles="bg-[#f6f6fa] px-5 py-2 left-[50%]  top-[30px] w-[149px] h-[43px] absolute -ml-[66.5px] rounded-[35px] " textStyles={"text-[#333] text-lg"} />
						<View className="absolute top-[90px] left-[25px] flex flex-row ">
							<Text className="text-lg text-[#ffffff99]">Already have an account?</Text>
							<Link href={"/signin"} className="text-lg font-bold text-white"> Login </Link>
						</View>
					</View>
					<CustomButton title="Sign in with Google" handlePress={handleSignInWithGoogle} containerStyles={" left-[50%] px-5 py-2  bg-[#f6f6fa] top-[650px] absolute -ml-[127.5px] w-[255px] h-[50px] rounded-[35px] "} textStyles={"text-[#333] text-lg"} />

			</ScrollView>
		</SafeAreaView>

	);
};