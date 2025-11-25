// import { ThemeProvider } from "@react-navigation/native";
// import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import "react-native-reanimated";

// import { dark, light } from "@/constants/theme";
// import { useColorScheme } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export const unstable_settings = {
//   anchor: "(tabs)",
// };

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const bg =
//     colorScheme === "dark" ? dark.colors.background : light.colors.background;

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? dark : light}>
//       <SafeAreaView style={{ flex: 1 }}>
//         <Stack>
//           <Stack.Screen name="index" options={{ headerShown: false }} />
//           <Stack.Screen name="sign-in" options={{ headerShown: false }} />
//           <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//           <Stack.Screen
//             name="modal"
//             options={{ presentation: "modal", title: "Modal" }}
//           />
//         </Stack>
//         <StatusBar style="auto" backgroundColor={bg} />
//       </SafeAreaView>
//     </ThemeProvider>
//   );
// }


import { ThemeProvider } from "@react-navigation/native";
import { router, Stack } from "expo-router"; // Added useSegments and router
import * as SecureStore from 'expo-secure-store'; // Added SecureStore import
import { StatusBar } from "expo-status-bar";
import React, { createContext, useContext, useEffect, useState } from 'react';
import "react-native-reanimated";

import { dark, light } from "@/constants/theme";
import { Platform, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const AUTH_KEY = 'signedUser'; 

interface AuthContextType {
  user: string | null;
  signIn: (username: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Create the context
const AuthContext = createContext<AuthContextType | null>(null);

// Hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Auth Provider Component
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    async function loadUser() {
      try {
        if(Platform.OS === "web") {
          const storedUser = window.localStorage.getItem(AUTH_KEY);
          if(storedUser) {
            setUser(JSON.parse(storedUser));
            console.log(`Web: Loaded user session from localStorage.`);
          }
        } else {
          console.log("Native: Loading user session from SecureStore.");
          const username = await SecureStore.getItemAsync(AUTH_KEY);
          setUser(username);
        }
      } catch (e) {
        console.error("Failed to load user session from SecureStore:", e);
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, []);


  const signIn = async (username: string) => {
    if(Platform.OS === "web") {
      try {
        window.localStorage.setItem(AUTH_KEY, JSON.stringify(username));
        setUser(username);

        console.log(`Web: Saved user session to localStorage.`);
      } catch (e) {
        console.error("Web: Failed to save user session to localStorage", e);
      }
    } else {
      try {
        await SecureStore.setItemAsync(AUTH_KEY, username);
        console.log(`Native: Saved user session securely to SecureStore.`);
        setUser(username);
      } catch (e) {
        console.error("Native: Failed to save user session to SecureStore", e);
      }
    }
  };


  const signOut = async () => {
    await SecureStore.deleteItemAsync(AUTH_KEY);
    setUser(null);
  };

  // Wait until the initial check is complete before rendering
  if (isLoading) {
    // Return a simple loading screen or null while checking auth status
    return null; 
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Component to handle redirection based on auth state
function AuthGate() {
  const { user } = useAuth();
  
  useEffect(() => {
    // Stop if the initial check is still loading (handled by AuthProvider)
    if (user === undefined) return; 

    if (user) {
      // User is signed in and currently on the sign-in screen, redirect to home/tabs
      console.log("User signed in. Redirecting to (tabs).");
      router.replace('/(tabs)');
    } else if (!user) {
      console.log("isSegmented")
      // User is NOT signed in and trying to access a protected route, redirect to sign-in
      console.log("User signed out. Redirecting to sign-in.");
      router.replace('/');
    }
  }, [user]);

  return <Stack >
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="sign-in" options={{ headerShown: false }} />
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen
      name="modal"
      options={{ presentation: "modal", title: "Modal" }}
    />
  </Stack>
}

// --- Root Layout Component ---

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const bg =
    colorScheme === "dark" ? dark.colors.background : light.colors.background;

  return (
    <ThemeProvider value={colorScheme === "dark" ? dark : light}>
    
      <AuthProvider> 
        <SafeAreaView style={{flex: 1}}>
          {/* AuthGate handles the conditional rendering and redirection */}
          <AuthGate /> 
          <StatusBar style="auto" backgroundColor={bg} />
        </SafeAreaView>
      </AuthProvider>
    </ThemeProvider>
  );
}

// --- How to use the Auth Hook in your sign-in component (Example only, do not save) ---
/*
import { useAuth } from './_layout'; // Import from your root layout file

function SignInScreen() {
    const { signIn } = useAuth();
    
    const handleSignIn = async () => {
        // ... perform credential verification ...
        
        // Once successful, call signIn with a token or user ID
        const mockToken = '12345-abcde-67890'; 
        await signIn(mockToken);
    };

    return (
        // ... UI for sign in ...
        <Button title="Sign In" onPress={handleSignIn} />
    );
}

function ProfileScreen() {
    const { user, signOut } = useAuth();

    return (
        // ... UI ...
        <Text>Logged in as: {user}</Text>
        <Button title="Sign Out" onPress={signOut} />
    );
}
*/
