import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Redirect } from 'expo-router'
import asyncStorage from '@react-native-async-storage/async-storage'

const AuthLayout = () => {
  const login = async () => {
    const token = await asyncStorage.getItem('token');
    if (token) return <Redirect href="/home" />;
  }
  
  useEffect(() => {
    login();
  }, [])

  return(
    <>
      <Stack>
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
      </Stack>
      <StatusBar  backgroundColor="#161622" style="light" />
    </>
  )
}

export default AuthLayout