import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Alert,
  Keyboard,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import appst from '../../constants/AppStyle';
import homest from './style';
import {AppContext} from '../../context';
import Button from '../../components/Button';

const HomeScreen = ({navigation}) => {
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
      navigation.navigate('Chat');
    }
  }, [currUser]);

  // console.log(allUser);

  return (
    <View style={[appst.container, appst.center, homest.container]}>
      <View />
      <View />
      <Image
        style={homest.bgImg}
        source={{
          uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/96/d5/a8/96d5a8b1-6165-5093-5dd7-f476127297e4/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/1200x600wa.png',
        }}
      />
      <View style={homest.view1}>
        {showLogin ? (
          <View>
            <View>
              <Text style={homest.heading}>Enter Your User Name</Text>
              <TextInput
                autoCorrect={false}
                placeholder="Enter your user name"
                style={homest.input}
                onChangeText={e => setcurrUserName(e)}
                value={currUserName}
              />
            </View>
            <View style={[homest.viewPress, appst.rowSb]}>
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
          <View style={[homest.info, appst.center]}>
            <Text style={homest.textHead}>Connect, Grow and Inspite</Text>
            <Text style={homest.subTitle}>
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

export default HomeScreen;
