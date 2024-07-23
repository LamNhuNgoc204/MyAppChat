import React, { Children } from 'react';
import ChatScreen from '../screens/chats/ChatScreen';
import MessageScreen from '../screens/message/MessageScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/logup/Register';
import LoginScreen from '../screens/login/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import OnBoard from '../screens/board/OnBoard';
import FriendsScreen from '../screens/Friends/FriendsScreen';

const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="OnBoard"
        component={OnBoard}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Chat"
        component={ChatScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Message"
        component={MessageScreen}
      />
      <Stack.Screen
        name="Friends"
        component={FriendsScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
