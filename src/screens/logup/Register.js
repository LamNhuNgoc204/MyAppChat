import {View, Text, Image, Alert, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import appst from '../../constants/AppStyle';
import loginst from '../login/style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import AxiosInstance from '../../helper/AxiosInstance';

const Register = ({navigation}) => {
  const [name, setname] = useState('ngoc');
  const [email, setemail] = useState('ngoc@gmail.com');
  const [password, setpassword] = useState('123456');
  const [image, setimage] = useState(
    'https://s.pinimg.com/webapp/center-2d76a691.png',
  );

  const register = async() => {
    const body = {
      name: name,
      email: email,
      password: password,
      image: image,
    };

    await AxiosInstance()
      .post('/register', body)
      .then(response => {
        console.log(response);
        Alert.alert(
          'Register successful',
          'You have been registered successfully',
        );
        setname('');
        setemail('');
        setpassword('');
        setimage('');
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Register error', 'Registration failed');
      });
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={[appst.container, loginst.container]}>
        <View />
        <View style={appst.center}>
          <Image
            source={require('../../assets/images/amico.png')}
            style={loginst.image}
          />
          <Text style={loginst.title}>Create Account :3</Text>
        </View>
        <View style={loginst.viewContent}>
          <Input
            value={name}
            setValue={e => setname(e)}
            placeholder={'Input your name'}
          />
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
          <Input
            value={image}
            setValue={e => setimage(e)}
            placeholder={'Choose your image'}
          />
          <Button content={'REGISTER'} onPress={() => register()} />
        </View>
        <View>
          <Text style={loginst.textFooter}>
            You have a account?{' '}
            <Text
              style={loginst.signup}
              onPress={() => navigation.navigate('LoginScreen')}>
              Sign in
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
