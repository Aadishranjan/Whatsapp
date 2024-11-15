import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Loginbutton from '@/components/LoginSignupButton.jsx';
import Materiallcons from '@expo/vector-icons/MaterialIcons';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleSubmit = async () => {
    const data = {
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

      if (response.ok) {
        Alert.alert("Success", "Login successful!");
        router.navigate("(tabs)");
      } else {
        Alert.alert("Error", responseData.message || "Login failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to connect to server.");
    }
  };

  return(
    <View style={styles.container}>
    <Text style={styles.header}>Login</Text>
    
    <View style={styles.inputContainer}>
    <TextInput placeholder="Enter Your Email" style={styles.Inputbox} />
    <Materiallcons name="email" size={20} style={styles.icon} />
    </View>
    
    <View style={styles.inputContainer}>
    <TextInput placeholder="Enter Your Password" style={styles.Inputbox} />
    <Materiallcons name="password" size={20} style={styles.icon} />
    </View>
    <Loginbutton title={'Login'} onPress={handleSubmit} />
    
    <Text style={{marginTop:10}}>Don't have an account?<Link to="/signup" style={{ color:"blue" }} > Signup </Link></Text>
    
    </View>
    )
}

export default Login;

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