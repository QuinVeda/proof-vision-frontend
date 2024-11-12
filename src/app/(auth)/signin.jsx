import  React, { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link ,router } from "expo-router";
import {useGlobalContext}  from "../../context/GlobalProvider";
import apiService from "../../services/apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";


const SignIn = () => {
	const { setUser, setIsLogged } = useGlobalContext();
	const [isSubmitting, setSubmitting] = useState(false);

	const [Form, setForm] = useState({
		email:"",
		password:""
	});

	const handleLogin = async () => {
		if (Form.email === "" || Form.password === "") {
		  Alert.alert("Error", "Please fill in all fields");
		}
		else {
			setSubmitting(true);
			try {
				const res = await apiService.post("/auth/login/", Form);
				console.log(res);
				if (res.success === true) {
					await AsyncStorage.setItem("token", res.data.access);
					await AsyncStorage.setItem("token_refresh", res.data.refresh);
					Alert.alert("Success", "User signed in successfully");
					setUser(res.data.user);
					setIsLogged(true);
					router.replace("/home");
				}
			}
			catch (error) {
				Alert.alert("Login Failed", error.response.data.error.errors[0].detail);
			}
			setSubmitting(false);
		}
		// Alert.alert("Success", "User signed in successfully");
		// router.replace("/home");

	  };

	const handleSignInWithGoogle = () => { }
	const handleSignInWithGithub = () => { }

	return (
		<SafeAreaView className="flex-1 bg-[#08032b] ">
			<ScrollView contentContainerStyle={{ height: "100%" }} >
				<View className="  rounded-2xl ">
					<Text className="absolute top-[59px] left-[33px] text-5xl text-center font-[Staatliches-Regular] text-white">
						<Text className="text-white">Welcome </Text>
						<Text className="text-[#326afd]">BACK !</Text>
					</Text>
					<View className="relative top-[186px] left-[50%] -mx-[161.5px] w-[330px] gap-5 z-10   " >
						<FormField  title = "Your Email" value={Form.email}  handleChangeText={(e)=>setForm({...Form,email:e})} keyboardType="email-address" placeholderTextColor={"#ffffff"}  />
						<FormField  title = "Your Password" value={Form.password} showPass={true}  handleChangeText={(e)=>setForm({...Form,password:e})} placeholderTextColor={"#ffffff"} />

					</View>

					<View className="absolute top-[911px] left-[150px] rounded-[30px] w-[150px] h-[5px] bg-white" />

					<View className="absolute top-[496px] left-[50%] -ml-[186.5px] gap-4 flex flex-row items-center">
						<View className="w-[166px] h-[2px] rounded-[12px] bg-white" />
						<Text className="text-2xl font-semibold text-center text-white">OR</Text>
						<View className="w-[166px] h-[2px] rounded-[12px] bg-white" />
					</View>


						<CustomButton title="Login" handlePress={handleLogin} isLoading={isSubmitting} textStyles={"text-[#333] text-lg"} containerStyles={"bg-[#f6f6fa] left-[50%] px-5 py-2 absolute top-[338px] -ml-[66.5px] w-[149px] h-[43px] rounded-[35px] "}  />
						<View className="absolute top-[410px] left-[100px] flex flex-row ">
							<Text className="text-lg text-[#ffffff99]">Don't have an account?</Text>
							<Link href={"/signup"} className="text-lg font-bold text-white"> Signup </Link>
						</View>
						<View className="absolute top-[450px] left-[100px] flex flex-row ">
							<Text className="text-lg text-[#ffffff99]">Forgot password?</Text>
							<Link href={"/reset"} className="text-lg font-bold text-white"> Reset </Link>
						</View>
						<CustomButton title="Sign in with Google" handlePress={handleSignInWithGoogle} textStyles={"text-[#333] text-lg"} containerStyles={"rounded-[35px] absolute left-[50%]  px-5 py-2   bg-[#f6f6fc] top-[586px] -ml-[127.5px] w-[255px] h-[50px] "}  />
						<CustomButton title="Sign in with github" handlePress={handleSignInWithGithub} textStyles={"text-[#333] text-lg"} containerStyles={"rounded-[35px] absolute left-[50%] px-5 py-2 bg-[#f6f6fa] top-[660px] -ml-[127.5px] w-[255px] h-[50px] "}  />




				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;