import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer } from '@react-navigation/native'; 
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';


const Tab = createBottomTabNavigator() 


export default function App() {
  return (
   <PaperProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name = "home" 
        component ={HomeScreen}
        options={{
          title:'inicio',
          headerTitleAlign:'center',
        tabBarIcon:({color,size}) =>
        <Ionicons name ='home' color={color} size={size}/>
        }}
        />
        <Tab.Screen name = "SETTINGS" component={SettingScreen}/>
        <Tab.Screen name = "profile" component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
   </PaperProvider>
  );
}
