import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MessageListItem from '@/components/Homechatbox.jsx'

const messages = [
  {
    id: '1',
    name: 'Sonu Hom',
    message: 'Photo',
    time: '10:51 AM',
    avatar: '@/assets/images/aadish.jpg',
    isPhoto: true,
    isRead: false,
  },
  {
    id: '2',
    name: 'Meta AI',
    message: 'Here are some color suggestions for button...',
    time: '9:02 AM',
    avatar: '@/assets/images/aadish.jpg',
    isPhoto: false,
    isRead: false,
  },
  {
    id: '3',
    name: 'Deji',
    message: 'Photo',
    time: '8:13 AM',
    avatar: '@/assets/images/aadish.png',
    isPhoto: true,
    isRead: true,
  },
];

const ChatList = () => {
  return (
    <View>
    <View style={styles.headerbox}>
    <Text style={styles.Homeheader}>ChatApp</Text>
    </View>
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MessageListItem item={item} />}
    />
    </View>
    );
};

export default ChatList;

const styles = StyleSheet.create({
  headerbox: {
    marginHorizontal:20,
    marginTop:40
  },
  Homeheader: {
    fontSize:26,
    marginBottom:20,
    fontWeight: 'bold',
    color:'#1bb534'
  }
});