// UserContext.jsx
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');

  return (
    <UserContext.Provider value={{ name, setName, pin, setPin }}>
      {children}
    </UserContext.Provider>
  );
};
