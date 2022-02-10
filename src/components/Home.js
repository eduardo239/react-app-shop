import { Route, Routes } from 'react-router-dom';
import API from './admin/API';
import AllItems from './item/AllItems';
import NewItem from './admin/NewItem';
import Menu from './elements/Menu';
import Users from './admin/Users';
import SignIn from './register/SignIn';
import SignUp from './register/SignUp';
import React from 'react';
import User from './user/User';
import Item from './item/Item';
import Wallet from './user/Wallet';
import AddMoney from './user/AddMoney';
import Api from './admin/API';
import Design from './admin/Design';
import Cart1 from './cart2/Cart1';
import Checkout from './cart/Checkout';
import Cart from './cart/Cart';
import Finish from './cart/Finish';
import Cart2 from './cart2/Cart2';
import Cart3 from './cart2/Cart3';
// import logo from '../assets/logo.png';

function Home() {
  return (
    <main className="container">
      <div className="row">
        {/* <div className="center">
          <img src={logo} alt="SHOP-LEZZ" />
        </div> */}

        <Menu />
        <Routes>
          <Route path="/design" element={<Design />} />
          <Route path="/api" element={<API />} />
          <Route path="/new-item" element={<NewItem />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:uid" element={<User />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/add-money" element={<AddMoney />} />
          <Route path="/cart-1" element={<Cart1 />} />
          <Route path="/cart-2" element={<Cart2 />} />
          <Route path="/cart-3" element={<Cart3 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/finish" element={<Finish />} />
          <Route exact path="/" element={<AllItems />} />
          <Route exact path="/api" element={<Api />} />
        </Routes>
      </div>
    </main>
  );
}

export default Home;
