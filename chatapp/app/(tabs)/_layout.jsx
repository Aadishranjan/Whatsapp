import { Tabs } from 'expo-router';
import React from 'react';
import ChatIcon from '@expo/vector-icons/Ionicons';
import ProfileIcon from '@expo/vector-icons/MaterialCommunityIcons';

const TabRoot = () => {
  return(
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1bb534',
        tabBarInactiveTintColor: '#888888',
        tabBarStyle: { 
          backgroundColor: '#f8f8f8',
          borderTopColor: '#e0e0e0',
          paddingBottom: 5,
        },
      }}
    >
    
    <Tabs.Screen 
      name="index"
      options={{
        headerShown: false,
        title: 'Chats',
        tabBarIcon: ({ color, focused }) => (
        <ChatIcon size={32} name={focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'} color={color} />
            )
      }}/>
      
    <Tabs.Screen 
      name="profile" 
      options={{ 
        headerShown: false,
        title: 'Profile',
        tabBarIcon: ({ color, focused }) => (
      <ProfileIcon size={32} name={focused ? 'account-circle' : 'account-circle-outline'} color={color} /> ), 
      }} />
      
    </Tabs>
    )
}
export default TabRoot;