import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View, StatusBar } from "react-native";


const TabIcon = ({
  name,
  color,
  size,
}: {
  name: string;
  color: string;
  size: number;
}) => <MaterialCommunityIcons name={name as any} color={color} size={size} />;

export default function DashboardLayout() {
  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <StatusBar barStyle="light-content" backgroundColor="purple" />
    <Tabs
      screenOptions={{
        headerShown: false,
        
        tabBarStyle: {
          height: 100,
          paddingTop: 10,
          backgroundColor: "#121212",
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: "#7C3AED",
        tabBarInactiveTintColor: "#A0A0A0",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="home-outline" color={color} size={size} />
          ),
        }}
      />
   
      <Tabs.Screen
        name="expenses"
        options={{
          title: "Expenses",
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="currency-usd" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="leave"
        options={{
          title: "Leave",
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="briefcase-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="account" color={color} size={size} />
          ),
        }}
      />
      
    </Tabs>
    </View>
  );
}
