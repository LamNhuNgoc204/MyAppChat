import {View, Text, Image} from 'react-native';
import React from 'react';
import appst from '../../constants/AppStyle';
import loginst from './style';
import Input from '../../components/Input';

const LoginScreen = () => {
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
      <View>
        <Input />
      </View>
    </View>
  );
};

export default LoginScreen;
