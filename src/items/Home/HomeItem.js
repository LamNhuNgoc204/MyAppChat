import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import homeit from './style';
import appst from '../../constants/AppStyle';

const HomeItem = ({item}) => {
  return (
    <Pressable style={[homeit.container, appst.rowCenter]}>
      <View>
        <Image source={{uri: item.image}} style={homeit.image} />
      </View>
      <View style={homeit.view1}>
        <Text style={homeit.name}>{item?.name}</Text>
        <Text style={homeit.email}>{item?.email}</Text>
      </View>
      <Pressable style={homeit.press}>
        <Text style={homeit.textPress}>Add Friend</Text>
      </Pressable>
    </Pressable>
  );
};

export default HomeItem;
