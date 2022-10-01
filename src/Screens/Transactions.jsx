import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import TransactionsPageTable from "../Components/TransactionsPageTable";
import { useDispatch } from "react-redux";
import { getTxn, getTxnBySearch } from "../redux/txnSlice";
import API from "../networks/api";

const status = [
  {
    label: "status",
    value: "",
  },
  {
    label: "pending",
    value: "pending",
  },
  {
    label: "success",
    value: "success",
  },
  {
    label: "failed",
    value: "failed",
  },
];

const Transactions = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [searchResponse, setSearchResponse] = useState(null);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [searchURL, setSearchURL] = useState("");

  const [selectedStatus, setSelectedStatus] = useState("");

  const clearSearchQuery = async () => {
    setSelectedStatus("");
    setSearchText("");
    setDateFrom("");
    setDateTo("");

    await dispatch(getTxn()).unwrap();
  };

  const handleSearchByStan = async (e) => {
    e.preventDefault();
    const qURL = new URL(API.defaults.baseURL.concat("/transactions"));
    qURL.searchParams.set("status", selectedStatus);
    qURL.searchParams.set("q", searchText);
    qURL.searchParams.set("from", dateFrom);
    qURL.searchParams.set("to", dateTo);
    setSearchURL(qURL.href);
    const response = await dispatch(getTxnBySearch(qURL.href)).unwrap();
    // console.log(response);
    setSearchResponse(response);
  };

  const handleExport = async () => {
    const qURL = new URL(API.defaults.baseURL.concat("/transactions"));
    qURL.searchParams.set("status", selectedStatus);
    qURL.searchParams.set("q", searchText);
    qURL.searchParams.set("from", dateFrom);
    qURL.searchParams.set("to", dateTo);
    qURL.searchParams.set("export", true);
    // console.log(qURL);
    setSearchURL(qURL.href);
    const res = await API.get(qURL.href);
    console.log(res);
    const url = res?.data?.data?.downloadUrl;
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <React.Fragment>
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-64 h-screen">
          <div className="flex h-screen flex-col justify-start ">
            <Header />
            <div className="pt-2 px-6  ">
              <div className="border-b border-gray-300 mb-4  z-20 ">
                {/* search filters */}
                <div className="flex justify-between   pt-2 mb-2">
                  <div className="flex  items-center space-x-4 ">
                    {/* search input field */}
                    <div className=" relative md:block w-64">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Search icon</span>
                      </div>
                      <input
                        type="text"
                        id="search-navbar"
                        className=" px-1 py-1.5 pl-8 w-full block border  border-gray-800 rounded-lg focus:ring focus:ring-opacity-50 text-sm"
                        placeholder="by stan, accountNum, reference"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                    </div>

                    {/* status dropdown */}
                    <div className="items-center ">
                      <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="dashboard-inputs "
                      >
                        {status.map((stat) => (
                          <option key={stat.label} value={stat.value}>
                            {stat.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* date filters */}
                    <div className="flex items-center space-x-4 ">
                      <div>
                        <input
                          type="date"
                          className="dashboard-inputs text-sm"
                          value={dateFrom}
                          onChange={(e) => setDateFrom(e.target.value)}
                        />
                      </div>
                      <p>to</p>
                      <input
                        type="date"
                        className="dashboard-inputs text-sm"
                        value={dateTo}
                        onChange={(e) => setDateTo(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* action */}
                  <div className="flex gap-2 ">
                    {/* clear */}
                    <button
                      className="flex items-center px-4 py-1.5 rounded-md bg-blue-900 text-white hover:opacity-80"
                      onClick={clearSearchQuery}
                    >
                      <h1 className="">Clear</h1>
                    </button>
                    {/* search */}
                    <button
                      className="flex items-center px-4 py-1.5 rounded-md bg-green-800 text-white hover:opacity-80"
                      onClick={handleSearchByStan}
                    >
                      <h1 className="">Search</h1>
                    </button>
                    {/* export */}
                    <button
                      className="flex items-center px-3 py-1.5 rounded-md bg-gray-200 border border-gray-900 text-black font-bold hover:opacity-80"
                      onClick={handleExport}
                    >
                      <h1 className="mr-2">Export</h1>
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6  transition duration-75  group-hover:text-gray-900 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <TransactionsPageTable
              searchResponse={searchResponse}
              searchURL={searchURL}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Transactions;
