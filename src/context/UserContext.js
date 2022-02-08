import React from 'react';

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;

const MyContext = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [userId, setUserId] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const [userOrder, setUserOrder] = React.useState([]);

  /*
  [
    item: {
      _id: item._id,
      name: item.name,
      price: item.price,
      createdAt: item.createdAt,
      quantity: item.quantity
    },
    services: {
      _id: item._id,
      extendedWarranty: item.extendedWarranty,
      warrantyTime: item.warrantyTime,
    },
    shipping: {
      _id: item._id,
      company: item.company,
    }
  ]
  */

  return (
    <UserProvider
      value={{
        setUser,
        user,
        setItems,
        items,
        setUserId,
        userId,
        userOrder,
        setUserOrder
      }}
    >
      {children}
    </UserProvider>
  );
};

export { UserContext, MyContext };
