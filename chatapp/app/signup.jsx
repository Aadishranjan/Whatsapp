import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Loginbutton from '@/components/LoginSignupButton.jsx';
import AntDesign from '@expo/vector-icons/AntDesign';
import Materiallcons from '@expo/vector-icons/MaterialIcons';

const Signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => setUsername(text);
  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleSubmit = async () => {
    const data = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData === 'success') {
        Alert.alert("Success", "Signup successful!");
        router.navigate("(tabs)");
      } else {
        Alert.alert("Error", responseData || "Signup failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to connect to server.");
    }
  };

  return(
    <View style={styles.container}>
    <Text style={styles.header}>Signup</Text>
    
    <View style={styles.inputContainer}>
    <TextInput placeholder="Enter Your Username" style={styles.Inputbox} />
    <AntDesign name="user" size={20} style={styles.icon} />
    </View>
    
    <View style={styles.inputContainer}>
    <TextInput placeholder="Enter Your Email" style={styles.Inputbox} />
    <Materiallcons name="email" size={20} style={styles.icon} />
    </View>
    
    <View style={styles.inputContainer}>
    <TextInput placeholder="Enter Your Password" style={styles.Inputbox} />
    <Materiallcons name="password" size={20} style={styles.icon} />
    </View>
    <Loginbutton title={'Signup'} onPress={handleSubmit} />
    
    <Text style={{marginTop:10}}>Already have an account?<Link to="/" style={{ color:"blue" }} > Login </Link></Text>
    
    </View>
    )
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:'#fff'
  },
  header: {
    fontSize:36,
    marginBottom:40,
    fontWeight: 'bold'
  },
  Inputbox: {
    height:50,
    width:300,
    paddingHorizontal:35,
    borderRadius:7,
    marginBottom:10,
    backgroundColor:'#f4441925',
  },
  inputContainer: {
    position:'relative',
  },
  icon: {
    position:'absolute',
    top:15,
    left:7
  },
})