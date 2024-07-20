import { View, Text, Pressable, FlatList } from 'react-native';
import React, { useContext } from 'react';
import appst from '../../constants/AppStyle';
import chatst from './style';
import { AppContext } from '../../context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChatItem from '../../items/Chat/ChatItem';
import Button from '../../components/Button';
import ModalComponent from '../../components/ModalComponent';

const ChatScreen = () => {
  const { currUser, allChatRooms, modalVisible, setModalVisible } = useContext(AppContext);

  return (
    <View style={[appst.container, chatst.container]}>
      <View style={chatst.header}>
        <Text style={chatst.heading}>Welcome {currUser}!</Text>
        <Pressable>
          <AntDesign name="logout" size={30} color={'black'} />
        </Pressable>
      </View>
      <View style={chatst.body}>
        {allChatRooms && allChatRooms.length > 0 ? (
          <FlatList
            data={allChatRooms}
            extraData={item => item.id}
            renderItem={({ item }) => <ChatItem item={item} />}
          />
        ) : null}
      </View>
      <View style={chatst.footer}>
        <Button
          content={'Create New Group'}
          width={'100%'}
          onPress={() => setModalVisible(true)}
        />
      </View>

      <View>{modalVisible && <ModalComponent />}</View>
    </View>
  );
};

export default ChatScreen;
