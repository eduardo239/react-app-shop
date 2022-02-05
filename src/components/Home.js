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

function Home() {
  return (
    <main className="container">
      <div className="row">
        <h1>Shop-LEZZ</h1>

        <Menu />
        <Routes>
          <Route path="/api" element={<API />} />
          <Route path="/new-item" element={<NewItem />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:uid" element={<User />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/add-money" element={<AddMoney />} />
          <Route exact path="/" element={<AllItems />} />
          <Route exact path="/api" element={<Api />} />
        </Routes>
      </div>
    </main>
  );
}

export default Home;
