import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "./_layout";

const index = () => {
  const { colors }: any = useTheme();
  const router = useRouter();

  const {user} = useAuth();

  useEffect(() => {
    console.log("Current User:", user);
    if(user){
      router.replace("/(tabs)");
    }
  }, [user]);

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 170,
          height: 170,
          borderRadius: 35,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
          backgroundColor: colors.card,
          // elevation: 2,
        }}
      >
        <FontAwesome name="tasks" size={40} color={colors.primary} />
      </View>
      <Text
        style={{
          fontSize: 30,
          color: colors.text,
          textAlign: "center",
          width: "75%",
          lineHeight: 40,
        }}
      >
        Managing Your Tasks is Easy Now
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: colors.icon,
          textAlign: "center",
          width: "75%",
          lineHeight: 20,
          marginTop: 10,
        }}
      >
        Are you tired of mixed tasks, we are here for you as a hawk workspace,
        you can relax while we do our job.
      </Text>

      <TouchableOpacity onPress={()=>router.push("/sign-in")}>
        <View
          style={{
            marginTop: 30,
            backgroundColor: colors.primary,
            paddingVertical: 12,
            paddingHorizontal: 25,
            width: 250,
            borderRadius: 10,
            elevation: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors.hamze, fontSize: 16 }}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>

  );
};

export default index;

const styles = StyleSheet.create({});
