import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import appst from '../../constants/AppStyle';
import loginst from '../login/style';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Register = ({navigation}) => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [image, setimage] = useState('');

  return (
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
        <Button content={'LOGIN'} />
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
  );
};

export default Register;
