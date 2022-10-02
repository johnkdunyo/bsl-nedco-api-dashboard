import React from "react";
import { useSelector } from "react-redux";
import ReactApexChart from "react-apexcharts";

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

  const pieChartData = {
    series: [44, 55, 13],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

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
          <div className="my-5 grid grid-cols-3 gap-5">
            {/* left */}
            <div className="col-span-2 px-2 py-6 text-center bg-white border border-gray-700 rounded-lg hover:bg-gray-50"></div>
            {/* right pie chart */}
            <div className=" px-2 py-6 text-center bg-white border border-gray-700 rounded-lg hover:bg-gray-50">
              <ReactApexChart
                options={pieChartData.options}
                series={pieChartData.series}
                type="pie"
              />
            </div>
          </div>

          {/* bar chart full w */}
          <div className=" px-2 py-6 text-center bg-white border border-gray-700 rounded-lg hover:bg-gray-50"></div>
        </div>

        {/* charts */}
        <div></div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
