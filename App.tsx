import React from 'react';
import {KeyboardAvoidingView, StatusBar} from 'react-native';
import StackNav from './src/controls/StackNav';
import {NavigationContainer} from '@react-navigation/native';
import AppContextProvider from './src/context';

function App(): React.JSX.Element {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <AppContextProvider>
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      </AppContextProvider>
      <StatusBar hidden={true}/>
    </KeyboardAvoidingView>
  );
}

export default App;
