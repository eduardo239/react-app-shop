import React, { useState } from 'react';

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;

const MyContext = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [userId, setUserId] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const [cartPayment, setCartPayment] = React.useState({});
  const [cartItems, setCartItems] = React.useState([]);
  const [cartServices, setCartServices] = React.useState({});
  const [address, setAddress] = useState({
    local: null,
    number: '',
    details: ''
  });
  const [payment, setPayment] = useState({
    type: '',
    total: '',
    details: ''
  });

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
      service_name: service.name,
      service_time: service.time,
    },
    shipping: {
      _id: item._id,
      company_name: company.name,
      company_price: company.price,
      user_cep: user.cep,
    },
    payment: {
      _id: item._id,
      payment_name: payment.name,
      payment_total: payment.total,
      payment_times: payment.times,
      payment_status: payment.status,
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
        setCartServices,
        cartServices,
        cartItems,
        setCartItems,
        cartPayment,
        setCartPayment,
        address,
        setAddress,
        payment,
        setPayment
      }}
    >
      {children}
    </UserProvider>
  );
};

export { UserContext, MyContext };
