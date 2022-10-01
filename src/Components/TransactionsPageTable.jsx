import React from "react";
import { formatDateToDateAndTimeString } from "../utils/util-functions";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getTxnPerPage } from "../redux/txnSlice";
import API from "../networks/api";

// console.log(data)

const TransactionsPageTable = ({ searchResponse, searchURL }) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.txn.txns);
  const navigate = useNavigate();

  if (searchResponse?.data?.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-2xl">No transactions found</h1>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-2xl">Loading ...</h1>
      </div>
    );
  }

  if (data) {
    // console.log(data);
  }
  const navigateTxn = (txn) => {
    // console.log(txn)
    navigate(`/transactions/${txn.stan}`, { state: txn });
  };

  const getNextPage = async () => {
    const cursor = data.meta.next_cursor;
    const url = new URL(
      searchURL === ""
        ? API.defaults.baseURL.concat("/transactions")
        : searchURL
    );
    url.searchParams.set("cursor", cursor);
    console.log("q url-->", url.href);
    await dispatch(getTxnPerPage(url.href)).unwrap();
  };

  const getPrevPage = async () => {
    const cursor = data.meta.prev_cursor;
    const url = new URL(
      searchURL === ""
        ? API.defaults.baseURL.concat("/transactions")
        : searchURL
    );
    url.searchParams.set("cursor", cursor);
    console.log("q url-->", url.href);
    await dispatch(getTxnPerPage(url.href)).unwrap();
  };

  return (
    <React.Fragment>
      {/* <div className="h-screen flex flex-col justify-between border border-red-500"> */}
      <div className="rounded-sm h-fit overflow-y-auto overflow-visible px-6 ">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="sticky top-0  text-sm text-gray-700 uppercase bg-white border-b border-gray-300 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Reference
              </th>
              <th scope="col" className="py-3 px-6">
                STAN
              </th>
              <th scope="col" className="py-3 px-6">
                Amount
              </th>
              <th scope="col" className="py-3 px-6">
                rSwitch
              </th>
              <th scope="col" className="py-3 px-6">
                AccountNumber
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Txn Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((txn) => (
              // onClick={()=>window.location.href=`/transactions/${txn.stan}`}
              <tr
                key={txn.stan}
                className="bg-white border-b  hover:bg-gray-50 cursor-pointer "
                onClick={() => navigateTxn(txn)}
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap "
                >
                  {txn.reference}
                </th>
                <td className="py-4 px-6">{txn.stan}</td>
                <td className="py-4 px-6">
                  GHC {parseFloat(txn.amount / 100).toFixed(2)}
                </td>
                <td className="py-4 px-6">{txn.rSwitch}</td>
                <td className="py-4 px-6">{txn.accountNumber}</td>
                <td className="py-4 px-6 text-center ">
                  <p
                    className={` ${
                      txn.status === "success"
                        ? "bg-green-600"
                        : txn.status === "failed"
                        ? "bg-red-500"
                        : "bg-yellow-400"
                    } px-1 py-0 rounded-md text-white text-sm cursor-text`}
                  >
                    {txn.status}
                  </p>
                </td>
                <td className="py-4 p-6">
                  {formatDateToDateAndTimeString(txn.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center my-4 bg-white p-2 px-6">
        <div className="">
          <p className="text-sm italic">
            Showing {data?.meta.per_page} per page
          </p>
        </div>

        <div className="flex justify-between space-x-4">
          {data?.links.prev && (
            <button
              className="px-5 py-1 flex justify-between items-center rounded-md border border-gray-600 hover:bg-gray-200"
              onClick={() => getPrevPage()}
            >
              <svg
                className="hi-solid hi-arrow-left inline-block w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="text-sm ml-2">Prev</h1>
            </button>
          )}
          {data?.links.next && (
            <button
              className="px-5 py-1 flex justify-between items-center rounded-md border border-gray-600 hover:bg-gray-200"
              onClick={() => getNextPage()}
            >
              <h1 className="text-sm">Next</h1>
              <svg
                className="hi-solid hi-arrow-right inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default TransactionsPageTable;
