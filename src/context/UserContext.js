import React from 'react';

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;

const MyContext = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [userId, setUserId] = React.useState(null);
  const [items, setItems] = React.useState([]);

  return (
    <UserProvider value={{ setUser, user, setItems, items, setUserId, userId }}>
      {children}
    </UserProvider>
  );
};

export { UserContext, MyContext };
