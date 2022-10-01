import React from "react";
import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const chatData = [
  {
    name: "Monday",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wednesday",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CardAmount = ({ desciption, value }) => {
  return (
    <div className="flex flex-col justify-between px-2 py-6 text-center bg-white border border-gray-700 rounded-lg hover:bg-gray-50">
      <dt className="order-last text-md font-medium text-gray-500">
        {desciption || "No desciption"}
      </dt>
      <dd className="text-2xl font-extrabold  text-blue-600 md:text-4xl px-3">
        GHS {value || 0}
      </dd>
    </div>
  );
};

const CardCount = ({ desciption, value }) => {
  return (
    <div className="flex flex-col justify-between px-2 py-6 text-center bg-white border border-gray-700 rounded-lg hover:bg-gray-50">
      <dt className="order-last text-md font-medium text-gray-500">
        {desciption || "No desciption"}
      </dt>
      <dd className="text-2xl font-extrabold  text-blue-600 md:text-4xl">
        {value || 0}
      </dd>
    </div>
  );
};

const Dashboard = () => {
  const data = useSelector((state) => state.txn.dashboard);
  console.log(data);

  return (
    <React.Fragment>
      <section className="h-full flex flex-col  ">
        <div className=" mx-auto w-full py-0 px-5  ">
          <div className="mt-6">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-4 ">
              <CardCount
                desciption="Total Transactions"
                value={data?.totalTransactions}
              />
              <CardAmount
                desciption="Average Transaction Amount"
                value={data?.averageTransactionAmount}
              />
              <CardAmount
                desciption="Lowest Transaction Amount"
                value={data?.lowestTransactionAmount}
              />
              <CardAmount
                desciption="Highest Transaction Amount"
                value={data?.highestTransactionAmount}
              />

              <CardCount
                desciption="Pending Transactions"
                value={data?.pendingTransactions}
              />

              <CardCount
                desciption="Successful Transactions"
                value={data?.successfulTransactions}
              />

              <CardCount
                desciption="Failed Transactions"
                value={data?.failedTransactions}
              />
            </dl>
          </div>

          {/* chart go heere */}
          <div className="mt-5 grid grid-cols-3 border border-red-800">
            {/* left */}
            <div>
              <LineChart
                width={600}
                height={300}
                data={chatData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
              </LineChart>
            </div>
            {/* right pie chart */}
            <div></div>
          </div>
        </div>

        {/* charts */}
        <div></div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
