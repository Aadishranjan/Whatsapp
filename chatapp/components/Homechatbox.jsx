import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MessageListItem = ({ item }) => {
 
 const avatarimage = require('@/assets/images/aadish.jpg');
 
  return(
  <View style={styles.container}>
    <Image source={avatarimage} style={styles.avatar} />
    <View style={styles.messageContent}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.messageRow}>
        {item.isPhoto && <Icon name="photo" size={16} color="gray" style={styles.icon} />}
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
    </View>
    <View style={styles.timeContainer}>
      <Text style={styles.time}>{item.time}</Text>
      {item.isRead && <Icon name="done-all" size={16} color="blue" style={styles.readIcon} />}
    </View>
  </View>
  );
}

export default MessageListItem;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  messageText: {
    color: 'gray',
  },
  icon: {
    marginRight: 4,
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
  readIcon: {
    marginTop: 2,
  },
});