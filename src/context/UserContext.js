import React from 'react';

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;

const MyContext = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [userId, setUserId] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const [userOrder, setUserOrder] = React.useState([]);

  const [userCart, setUserCart] = React.useState([]);
  const [userServices, setUserServices] = React.useState({});

  console.log(userCart);
  console.log(userServices);
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

  const handleUserCart = (payload) => {
    setUserCart([...userCart, payload]);
    window.localStorage.setItem(`cart/${user.uid}`, JSON.stringify(userCart));
  };

  const handleUserService = (payload) => {
    setUserServices(payload);
    setUserCart([...userCart, { services: payload }]);
    window.localStorage.setItem(
      `shipping/${user.uid}`,
      JSON.stringify(userServices)
    );
  };

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (user) {
      const userCart = window.localStorage.getItem(`cart/${user.uid}`);
      // FIXME: first time userCart is null
      if (userCart) {
        setUserCart(JSON.parse(userCart));
      }
    }
  }, [user]);

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
        setUserOrder,
        userCart,
        setUserCart,
        userShipping: userServices,
        setUserShipping: setUserServices,
        handleUserCart,
        handleUserService
      }}
    >
      {children}
    </UserProvider>
  );
};

export { UserContext, MyContext };
