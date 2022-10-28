import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Screens/Home";
import SignIn from "./Screens/SignIn";
import TransactionDetails from "./Screens/TransactionDetails";
import Transactions from "./Screens/Transactions";
import UserManagement from "./Screens/UserManagement";

import store from "./redux/store";
import { getDashboard, getTxn } from "./redux/txnSlice";
import { getAllAdmins, setCurrentUser } from "./redux/userSlice";
import ProtectedRoute from "./Components/ProtectedRoute";
import ResetPassword from "./Screens/ResetPassword";
import PasswordResetRequest from "./Screens/PasswordResetRequest";
import Page404 from "./Screens/Page404";

const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  store.dispatch(setCurrentUser(user));
  store.dispatch(getTxn());
  store.dispatch(getDashboard());
  store.dispatch(getAllAdmins());
}

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact index path="/signin" element={<SignIn />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route
            exact
            path="/resetpasswordrequest"
            element={<PasswordResetRequest />}
          />

          <Route
            exact
            path="/transactions"
            element={
              <ProtectedRoute
                Component={Transactions}
                Permission={["SUPER ADMIN", "ADMIN"]}
              />
            }
          />

          <Route
            exact
            path="/transactions/:stan"
            element={
              <ProtectedRoute
                Component={TransactionDetails}
                Permission={["SUPER ADMIN", "ADMIN"]}
              />
            }
          />

          <Route
            exact
            path="/usermanagement"
            element={
              <ProtectedRoute
                Component={UserManagement}
                Permission={["SUPER ADMIN", "ADMIN"]}
              />
            }
          />

          <Route
            exact
            path="/"
            element={
              <ProtectedRoute
                Component={Home}
                Permission={["SUPER ADMIN", "ADMIN"]}
              />
            }
          />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
