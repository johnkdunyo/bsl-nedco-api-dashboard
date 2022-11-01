import React, { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Link, useLocation } from "react-router-dom";
import TransactionDetailsLeft from "../Components/TransactionDetailsLeft";
import TransactionDetailsRight from "../Components/TransactionDetailsRight";
import API from "../networks/api";

const TransactionDetails = () => {
  const state = useLocation();
  const [txn, setTxn] = useState(state.state);
  const [isCheckingTxnStatus, setIsCheckingTxnStatus] = useState(false);
  const [isUpdatingTxnStatus, setIsUpdatingTxnStatus] = useState(false);
  const [isFiringStatusUpdate, setIsFiringStatusUpdate] = useState(false);

  // this function fetches the current transaction
  const fetchLatestTxn = async () => {
    setIsCheckingTxnStatus(true);
    console.log("firing check status");
    try {
      const latestTxn = await API.get(`/v1.0/transactions/${txn.stan}`);
      // console.log(latestTxn.data.data)
      setTxn(latestTxn.data.data);
    } catch (error) {
      console.log(error.response);
    }
    setIsCheckingTxnStatus(false);
  };

  const updateTxnStatus = async (updatedStatus) => {
    setIsUpdatingTxnStatus(true);
    console.log("firirn update txn status");
    try {
      const response = await API.put(`/v1.0/transactions/${txn.stan}`, {
        status: updatedStatus,
      });
      // console.log(response)
      setTxn(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
    setIsUpdatingTxnStatus(false);
  };

  const fireStatusUpdateEvent = async () => {
    setIsFiringStatusUpdate(true);
    try {
      const response = await API.post(
        `/v1.0/transactions/${txn.stan}/fireStatusUpdatedEvent`
      );
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
    setIsFiringStatusUpdate(false);
  };

  return (
    <React.Fragment>
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-64">
          <Header />
          <section className="py-8 px-8  ">
            <div className="bg-white my-5 px-5 ">
              <div className="flex  items-center pt-5 mb-4 pb-3 ">
                <Link
                  to="/transactions"
                  className="mr-3 text-xl font-bold tracking-wide border border-transparent hover:underline leading-8"
                >
                  Transactions
                </Link>
                <svg
                  className="w-6 h-6 text-gray-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p>{txn.stan}</p>
              </div>

              <div className="grid grid-cols-2 gap-5 pt-10 pb-4 divide-x-2">
                <TransactionDetailsLeft txn={txn} />

                <TransactionDetailsRight
                  txn={txn}
                  fetchLatestTxn={fetchLatestTxn}
                  ischeckingTxnStatus={isCheckingTxnStatus}
                  updateTxnStatus={updateTxnStatus}
                  isUpdatingTxnStatus={isUpdatingTxnStatus}
                  fireStatusUpdateEvent={fireStatusUpdateEvent}
                  isFiringStatusUpdate={isFiringStatusUpdate}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TransactionDetails;
