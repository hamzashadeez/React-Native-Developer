import { useAuth } from '@/app/_layout';
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";

const SignIn = () => {
  const { colors }: any = useTheme();
  const [username, setUsername] = React.useState("");
  const router = useRouter();
  const { user, signIn } = useAuth()

  const signInHandler = async() => {
    // Handle sign-in logic here
    if(!username) return;
    await signIn(username);
    router.replace("/(tabs)"); // Navigate to dashboard after sign-in
    
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View
        style={{
          flex: 1,
          padding: 25,
          alignItems: "center",
          backgroundColor: colors.background,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            color: colors.primary,
            fontWeight: "500",
            width: "80%",
          }}
        >
          Please Tell Us Your User Name
        </Text>

        <TextInput
          style={{
            width: "90%",
            height: 50,
            marginTop: 20,
            borderRadius: 10,
            backgroundColor: colors.card,
            justifyContent: "center",
            paddingHorizontal: 15,
          }}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter Username"
        />

        <TouchableOpacity
          onPress={()=>signInHandler()}
          style={{
            width: "90%",
            height: 50,
            marginTop: 20,
            borderRadius: 10,
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors.hamze, fontWeight: "600" }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
