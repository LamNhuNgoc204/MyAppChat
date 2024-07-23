import {
  View,
  Text,
  Image,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import appst from '../../constants/AppStyle';
import boardst from './style';
import {AppContext} from '../../context';
import Button from '../../components/Button';

const OnBoard = ({navigation}) => {
  const {
    showLogin,
    setshowLogin,
    currUser,
    setcurrUser,
    currUserName,
    setcurrUserName,
    allUser,
    setallUser,
  } = useContext(AppContext);

  const handle = isLogin => {
    if (currUserName.trim() !== '') {
      const index = allUser.findIndex(item => item === currUserName);

      if (isLogin) {
        if (index === -1) {
          Alert.alert('Register first');
        } else {
          setcurrUser(currUserName);
        }
      } else {
        if (index === -1) {
          allUser.push(allUser);
          setcurrUser(currUserName);
        } else {
          Alert.alert('Login now');
        }
      }
      setcurrUserName('');
    } else {
      Alert.alert('User is not empty');
    }

    Keyboard.dismiss();
  };

  useEffect(() => {
    if (currUser.trim() !== '') {
      navigation.navigate('Register');
    }
  }, [currUser]);

  // console.log(allUser);

  return (
    <View style={[appst.container, appst.center, boardst.container]}>
      <View />
      <View />
      <Image
        style={boardst.bgImg}
        source={{
          uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/96/d5/a8/96d5a8b1-6165-5093-5dd7-f476127297e4/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/1200x600wa.png',
        }}
      />
      <View style={boardst.view1}>
        {showLogin ? (
          <View>
            <View>
              <Text style={boardst.heading}>Enter Your User Name</Text>
              <TextInput
                autoCorrect={false}
                placeholder="Enter your user name"
                style={boardst.input}
                onChangeText={e => setcurrUserName(e)}
                value={currUserName}
              />
            </View>
            <View style={[boardst.viewPress, appst.rowSb]}>
              <Button
                content={'Register'}
                width={'45%'}
                onPress={() => handle(false)}
              />
              <Button
                content={'Login'}
                width={'45%'}
                onPress={() => handle(true)}
              />
            </View>
          </View>
        ) : (
          <View style={[boardst.info, appst.center]}>
            <Text style={boardst.textHead}>Connect, Grow and Inspite</Text>
            <Text style={boardst.subTitle}>
              Connect people around here for free
            </Text>
            <Button
              content={'Get Started'}
              width={'100%'}
              onPress={() => setshowLogin(true)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default OnBoard;
