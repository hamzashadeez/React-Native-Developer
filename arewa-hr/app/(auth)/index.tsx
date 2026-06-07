import React from "react";
import { Button, Text, View } from "react-native";
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  return (
    <View style={{ flex: 1,backgroundColor: "dodgerblue", justifyContent: "center", alignItems: "center" }}>
     
      <Button
        title="Go To Dashboard"
        onPress={() => router.push("/(dashboard)/home")}
      />
    </View>
  );
}
