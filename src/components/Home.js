import React from 'react';
import LockTable from './LockTable';

const HomePage = ({ authUser }) =>
  <div>
    { authUser
      ? <HomeLoggedIn />
      : <HomeNotLoggedIn />
    }
  </div>

const HomeLoggedIn = () =>
    <div>
      <h1>Home Page </h1>
      <LockTable />
    </div>

const HomeNotLoggedIn = () =>
    <div>
      <h1>Home Page </h1>
      <p1>Please log in to see the table</p1>
    </div>

export default HomePage;

