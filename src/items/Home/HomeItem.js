import {View, Text, Pressable, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import homeit from './style';
import appst from '../../constants/AppStyle';
import {AppContext} from '../../context';
import AxiosInstance from '../../helper/AxiosInstance';

const HomeItem = ({item}) => {
  const {userId, setuserId} = useContext(AppContext);
  const [sentRq, setsentRq] = useState(false)

  const sendRq = async (currUserId, friendId) => {
    const body = {
      currUserId: currUserId,
      selectUserId: friendId,
    };
    try {
      const response = await AxiosInstance().post('/friend_request', body);
      if(response.ok){
        setsentRq(true)
      }
    } catch (error) {
      console.log('Error message: ', error);
    }
  };

  console.log("sent request " , sentRq)

  return (
    <Pressable style={[homeit.container, appst.rowCenter]}>
      <View>
        <Image source={{uri: item.image}} style={homeit.image} />
      </View>
      <View style={homeit.view1}>
        <Text style={homeit.name}>{item?.name}</Text>
        <Text style={homeit.email}>{item?.email}</Text>
      </View>
      <Pressable onPress={() => sendRq(userId, item._id)} style={homeit.press}>
        <Text style={homeit.textPress}>Add Friend</Text>
      </Pressable>
    </Pressable>
  );
};

export default HomeItem;
