import { View, Text } from 'react-native'
import React from 'react'
import appst from '../../constants/AppStyle'
import friendst from './style'

const FriendsScreen = () => {
  return (
    <View style={[appst.container, friendst.container]}>
      <Text>FriendsScreen</Text>
    </View>
  )
}

export default FriendsScreen