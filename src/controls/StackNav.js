import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import ChatScreen from '../screens/chats/ChatScreen';
import MessageScreen from '../screens/message/MessageScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
