import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import appst from '../../constants/AppStyle';
import loginst from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginScreen = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

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
        <Button content={'LOGIN'} />
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
