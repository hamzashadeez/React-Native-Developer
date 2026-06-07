import React from "react";
import { Button, Text, View } from "react-native";

export default function Register() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Register (not using Clerk)</Text>
      <Button
        title="Continue"
        onPress={() => console.warn("Implement auth here")}
      />
    </View>
  );
}
