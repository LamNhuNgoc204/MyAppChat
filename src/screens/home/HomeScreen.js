import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import appst from '../../constants/AppStyle';
import homest from './style';
import {AppContext} from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import HomeItem from '../../items/Home/HomeItem';
import AxiosInstance from '../../helper/AxiosInstance';

const HomeScreen = ({navigation}) => {
  const {userId, setuserId} = useContext(AppContext);
  const [lstUser, setlstUser] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => <Text style={homest.titleLeft}>Swift Chat</Text>,
      headerRight: () => (
        <View style={appst.rowCenter}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Message')}
            style={{marginRight: 10}}>
            <Image
              source={require('../../assets/icons/chat.png')}
              style={[appst.icon24]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Friends')}
            style={{marginRight: 10}}>
            <Image
              source={require('../../assets/icons/people.png')}
              style={appst.icon24}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = await AsyncStorage.getItem('authToken');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setuserId(userId);

      await AxiosInstance()
        .get(`/users/${userId}`)
        .then(response => {
          console.log('RP =======>', response);
          const data = response.data;
          // console.log('Response data:', data);

          if (data && Array.isArray(data)) {
            setlstUser(data);
          } else {
            console.log('Data is not an array or is empty:', data);
          }
        })
        .catch(error => {
          console.log('Error => ', error);
        });
    };

    fetchUsers();
  }, []);

  // console.log('users  ---> ', lstUser);

  return (
    <View style={[appst.container, homest.container]}>
      <FlatList
        data={lstUser}
        renderItem={({item}) => <HomeItem item={item} />}
        extraData={lstUser}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default HomeScreen;
