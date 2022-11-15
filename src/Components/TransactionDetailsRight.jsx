import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const defaultStatus = [
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
  {
    label: "timeout",
    value: "timeout",
  },
];

const TransactionDetailsRight = ({
  txn,
  fetchLatestTxn,
  isCheckingTxnStatus,
  updateTxnStatus,
  isUpdatingTxnStatus,
  fireStatusUpdateEvent,
  isFiringStatusUpdate,
}) => {
  const [selectedStatus, setSelectedStatus] = useState(txn.status);
  const [status, setStatus] = useState(defaultStatus);
  const [selectTxnStatus, setSelectTxnStatus] = useState(false);
  const [UpdateSelectTxnStatus, setUpdateSelectTxnStatus] = useState(false);

  useEffect(() => {
    if (txn.status !== selectedStatus) {
      setUpdateSelectTxnStatus(true);
    }
    if (txn.status === selectedStatus) {
      setUpdateSelectTxnStatus(false);
    }
    if (txn.status === "success") {
      setUpdateSelectTxnStatus(false);
      setSelectTxnStatus(false);
    }

    if (txn.status === "pending") {
      setStatus([
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
      ]);
      setSelectTxnStatus(true);
    }

    if (txn.status === "failed") {
      setStatus([
        {
          label: "success",
          value: "success",
        },
        {
          label: "failed",
          value: "failed",
        },
      ]);
      setSelectTxnStatus(true);
    }

    if (txn.status === "timeout") {
      setStatus([
        {
          label: "success",
          value: "success",
        },
        {
          label: "failed",
          value: "failed",
        },
      ]);
      setSelectTxnStatus(true);
    }

    // console.log(txn.status, selectedStatus);
  }, [selectedStatus, txn, setSelectedStatus]);

  return (
    <React.Fragment>
      <section className="px-10">
        <h1 className="font-bold mb-2">{"Actions"}</h1>
        <hr />

        <div className="flex justify-start mt-8 mb-4">
          <button
            className={`px-3 py-2 rounded-md font-semibold border bg-green-200  hover:bg-green-100  ${
              isCheckingTxnStatus && "cursor-wait"
            }`}
            onClick={fetchLatestTxn}
          >
            {isCheckingTxnStatus ? "Checking Status..." : "Check Status"}
          </button>
        </div>
        <hr />

        <div className="flex justify-between mt-8 mb-4 ">
          <div className="w-[40%]">
            <label
              htmlFor="countries"
              className="block  text-sm font-medium text-gray-900"
            >
              {""}
            </label>
            <select
              disabled={!selectTxnStatus}
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {status.map((stat) => (
                <option key={stat.label} value={stat.value}>
                  {stat.label}
                </option>
              ))}
            </select>
          </div>

          <button
            className={`px-3 py-0 rounded-md font-semibold border text-white bg-green-900 hover:bg-opacity-90 
            ${isUpdatingTxnStatus && "cursor-wait"}
            ${!UpdateSelectTxnStatus && "cursor-not-allowed opacity-50"}
            `}
            disabled={!UpdateSelectTxnStatus}
            onClick={() => updateTxnStatus(selectedStatus)}
          >
            {isUpdatingTxnStatus ? "Updating Status..." : "Update Status"}
          </button>
        </div>
        <hr />

        <div className="flex justify-start mt-8 mb-4">
          <button
            className={`px-3 py-2 rounded-md font-semibold border text-white bg-blue-900 border-gray-300  hover:opacity-90 ${
              isFiringStatusUpdate && "cursor-wait"
            }`}
            onClick={fireStatusUpdateEvent}
          >
            {isFiringStatusUpdate
              ? "Firing Status Update Event..."
              : `Fire Status Update Event`}
          </button>
        </div>
        <hr />
      </section>
    </React.Fragment>
  );
};

export default TransactionDetailsRight;
