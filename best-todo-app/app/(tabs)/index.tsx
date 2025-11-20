import { Colors } from '@/constants/theme';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { useAuth } from '../_layout';

const Home = () => {
  const { user } = useAuth();
  const { colors }: any = useTheme();

  const { width } = Dimensions.get('window');
  return (
    <View style={{ flex: 1, backgroundColor: useColorScheme() === 'light' ? Colors.light.background : Colors.dark.background }}>
      <View style={{ width: width - width / 6, marginHorizontal: "auto", paddingVertical: 30, flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25, color: colors.primary }}>Hi {user}</Text>

        <View style={{ height: 180, marginVertical: 10, }}>
          <Text style={{ color: colors.text, fontSize: 14, marginBottom: 6 }}>Your Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ width: 220, backgroundColor: "whitesmoke", height: 145, marginRight: 20, borderRadius: 14 }} />
            <View style={{ width: 220, backgroundColor: "whitesmoke", height: 145, marginRight: 20, borderRadius: 14 }} />
            <View style={{ width: 220, backgroundColor: "whitesmoke", height: 145, marginRight: 20, borderRadius: 14 }} />
            <View style={{ width: 220, backgroundColor: "whitesmoke", height: 145, marginRight: 20, borderRadius: 14 }} />
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})