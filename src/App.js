import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Screens/Home';
import SignIn from './Screens/SignIn';
import TransactionDetails from './Screens/TransactionDetails';
import Transactions from './Screens/Transactions';
import UserManagement from './Screens/UserManagement';



function App() {
  return (
   <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact index element={<Home /> } />
        <Route exact path='/transactions' element={<Transactions />} />
        <Route exact path='/transactions/:stan' element={<TransactionDetails /> } />
        <Route exact path='/usermanagement' element={<UserManagement /> } />
      </Routes>
      </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
