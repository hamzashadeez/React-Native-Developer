import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";




const saveUsername = async (username: string) => {
    if (!username) return;

    if (Platform.OS === "web") {
      try {
        window.localStorage.setItem("username", JSON.stringify(username));
        console.log(`Web: Saved username to localStorage.`);
      } catch (e) {
        console.error("Web: Failed to save username to localStorage", e);
      }
    } else {
      try {
        await SecureStore.setItemAsync("username", username);
        console.log(`Native: Saved username securely to SecureStore.`);
      } catch (e) {
        console.error("Native: Failed to save username to SecureStore", e);
      }
    }
}


const getUsername = async () => {
    if (Platform.OS === "web") {
      try {
        const username = window.localStorage.getItem("username");
        console.log(`Web: Retrieved username from localStorage.`);
        return username ? JSON.parse(username) : null;
      } catch (e) {
        console.error("Web: Failed to get username from localStorage", e);
        return null;
      }
    } else {
      try {
        const username = await SecureStore.getItemAsync("username");
        console.log(`Native: Retrieved username from SecureStore.`);
        return username;
      } catch (e) {
        console.error("Native: Failed to get username from SecureStore", e);
        return null;
      }
    }
}

export { getUsername, saveUsername };
















