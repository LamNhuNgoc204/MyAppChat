import {View, Text, Image, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import appst from '../../constants/AppStyle';
import loginst from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [email, setemail] = useState('ngoc@gmail.com');
  const [password, setpassword] = useState('123456');

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');

        if (token) {
          navigation.replace('Home');
        } else {
          //Token not found
        }
      } catch (error) {
        console.log('Error ->', error);
      }
    };

    checkLoginStatus();
  }, []);

  const login = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post('http://192.168.1.68:4000/user/login', body)
      .then(response => {
        console.log('Response: ', response);
        const token = response.data.token;
        AsyncStorage.setItem('authToken', token);
        navigation.replace('Home');
      })
      .catch(error => {
        console.log('Error: ', error);
        Alert.alert('Login Failed');
      });
  };

  return (
    <View style={[appst.container, loginst.container]}>
      <View />
      <View style={appst.center}>
        <Image
          source={require('../../assets/images/amico.png')}
          style={loginst.image}
        />
        <Text style={loginst.title}>Welcome Back!</Text>
        <Text>Enter your username & password</Text>
      </View>
      <View style={loginst.viewContent}>
        <Input
          value={email}
          setValue={e => setemail(e)}
          placeholder={'Input your email'}
        />
        <Input
          value={password}
          setValue={e => setpassword(e)}
          placeholder={'Input your password'}
        />
        <Button content={'LOGIN'} onPress={() => login()} />
      </View>
      <View>
        <Text style={loginst.textFooter}>
          You don't have account?{' '}
          <Text
            style={loginst.signup}
            onPress={() => navigation.navigate('Register')}>
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
