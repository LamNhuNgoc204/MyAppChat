import React, {useContext} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
} from 'react-native';
import {AppContext} from '../context';
import homest from '../screens/home/style';
import appst from '../constants/AppStyle';
import Button from '../components/Button';
import {socket} from '../utils';

const ModalComponent = () => {
  const {modalVisible, setModalVisible, currGroupName, setcurrGroupName} =
    useContext(AppContext);

  const onCreateNewGr = () => {
    console.log('=>>>> CREATE');
    socket.emit('createNewGr', currGroupName);
    setModalVisible(false);
    setcurrGroupName('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={[styles.centeredView]}>
          <View style={styles.modalView}>
            <Text style={homest.heading}>Enter Your User Name</Text>
            <TextInput
              autoCorrect={false}
              placeholder="Enter your user name"
              style={homest.input}
              onChangeText={value => setcurrGroupName(value)}
              value={currGroupName}
            />
            <View style={[homest.viewPress, appst.rowSb, {width: '90%'}]}>
              <Button
                content={'Add'}
                width={'45%'}
                onPress={() => onCreateNewGr()}
              />
              <Button content={'Cancel'} width={'45%'} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalComponent;
