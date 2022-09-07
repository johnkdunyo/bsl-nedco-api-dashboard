import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Screens/Home';
import TransactionDetails from './Screens/TransactionDetails';
import Transactions from './Screens/Transactions';



function App() {
  return (
   <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route exact index element={<Home /> } />
        <Route exact path='/transactions' element={<Transactions />} />
        <Route exact path='/transactions/:stan' element={<TransactionDetails /> } />
      </Routes>
      </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
