import { Route, Routes } from 'react-router-dom';
import API from './API';
import AllItems from './AllItems';
import NewItem from './NewItem';
import Menu from './elements/Menu';
import Users from './Users';
import Login from './Login';
import Register from './Register';
import React from 'react';
import User from './User';
import Item from './Item';

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
          <Route path="/user/:emailId" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={<AllItems />} />
        </Routes>
      </div>
    </main>
  );
}

export default Home;
