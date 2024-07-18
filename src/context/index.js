import React, {createContext, useState} from 'react';

export const AppContext = createContext();

function AppContextProvider({children}) {
  const [showLogin, setshowLogin] = useState(false);
  const [currUser, setcurrUser] = useState('');
  const [currUserName, setcurrUserName] = useState('');
  const [allUser, setallUser] = useState([]);

  const contextValue = {
    showLogin: showLogin,
    setshowLogin,
    currUser: currUser,
    setcurrUser,
    currUserName: currUserName,
    setcurrUserName,
    allUser: allUser,
    setallUser,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;
