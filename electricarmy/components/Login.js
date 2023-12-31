import React from "react";
import {View, StatusBar} from 'react-native';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import {useState} from "react";
import { render } from "react-dom";
import * as Font from 'expo-font';

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("electricarmy/assets/logo_c191.png")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)} 
          /** 로그인_이메일*//>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
           /** 로그인_비밀번호*/ />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.creataccount_button}>Creat Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('BottombarPage')} /**버튼*/>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

/**styles*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B6E8F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image :{
    width: "40%",
    height: "40%",
    resizeMode: "contain",
  },
  logotext: {
    marginBottom: 40,
    fontSize: 40,
    fontWeight: "500",
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "flex-start",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 10,
  },
  creataccount_button: {
    height: 30,
    marginBottom: 0,
  },
 
  loginBtn: {
    color: "#000",
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 60,
    backgroundColor: "#1B9E4F",
  },
});

export default Login;