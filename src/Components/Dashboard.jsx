import React from "react";
import { useSelector } from "react-redux";
import ReactApexChart from "react-apexcharts";
import { getPercent } from "../utils/util-functions";

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

const CardCount2 = ({ desciption, value, percent }) => {
  console.log(percent);
  return (
    <div className="flex flex-col justify-between px-2 py-6 text-center bg-white border border-gray-700 rounded-lg hover:bg-gray-50">
      <dt className="order-last text-md font-medium text-gray-500">
        {desciption || "No desciption"}
      </dt>
      <dd className="text-2xl font-extrabold  text-blue-600 md:text-4xl">
        {value || 0}
      </dd>
      <dd className="text-md font-extrabold  text-gray-600 md:text-lg">
        {percent || 0}%
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

const Card3 = ({ accountNumber, txn }) => {
  return (
    <div className="flex flex-col justify-between items-center px-2 py-6 text-center bg-white border border-gray-700 rounded-lg hover:bg-gray-50">
      <div className="flex flex-col  mb-2">
        <p className="text-xl font-extrabold  text-blue-600 ">
          {accountNumber || 0}{" "}
        </p>
        <p className="font-medium text-gray-500">Highest Transaction Account</p>
      </div>
      <div className="flex flex-col ">
        <p className="text-xl font-extrabold  text-blue-600 ">{txn || 0}</p>
        <p className="font-medium text-gray-500">Number of transactions</p>
      </div>
      {/* <dt className="order-last text-md font-medium text-gray-500">
        highestTransactingAccount{accountNumber || "No desciption"}
      </dt>
      <dd className="text-2xl font-extrabold  text-blue-600 md:text-4xl">
        {txn || 0}
      </dd> */}
    </div>
  );
};

const CardCount4 = ({ accountNumber, txn }) => {
  return (
    <div className="flex flex-col justify-between px-2 py-6 text-center bg-white border border-gray-700 rounded-lg hover:bg-gray-50">
      <dt className="order-last text-md font-medium text-gray-500">
        {"Highest Transacting Account"}
      </dt>
      <dd className="text-2xl font-extrabold  text-blue-600 md:text-4xl">
        {txn || 0}{" "}
      </dd>
      <dd className="text-md font-extrabold  text-gray-600 md:text-lg">
        {accountNumber || 0}{" "}
      </dd>
    </div>
  );
};

const Dashboard = () => {
  const data = useSelector((state) => state.txn.dashboard);
  // console.log(data);

  const getPieChartData = () => {
    // this function formats the data from the api for the pieChart
    const labels = ["MTN", "Vodafone", "G-Money"];
    const series = [];

    series[0] =
      data?.weeklyTransactionsBySwitch.find((obj) => obj.rSwitch === "mtn")
        ?.transactions || 0;
    series[1] =
      data?.weeklyTransactionsBySwitch.find((obj) => obj.rSwitch === "vodafone")
        ?.transactions || 0;
    series[2] =
      data?.weeklyTransactionsBySwitch.find((obj) => obj.rSwitch === "gmoney")
        ?.transactions || 0;

    // weeklyTransactionsBySwitch.forEach((obj) => {
    //   console.log("each obj=>", obj);
    //   if (obj.rSwitch === "mtn") series[0] = obj.transactions;
    //   else series[0] = 0;
    //   if (obj.rSwitch === "vodafone") series[1] = obj.transactions;
    //   else series[1] = 0;
    //   if (obj.rSwitch === "gmoney") series[2] = obj.transactions;
    //   else series[2] = 0;
    // });
    return { labels, series };
  };

  console.log("data =>", getPieChartData().series);
  const pieChartData = {
    series: getPieChartData().series,
    options: {
      title: {
        text: "Weekly Transaction by Switch",
        align: "left",
      },
      chart: {
        width: 380,
        type: "donut",
      },
      labels: getPieChartData().labels,
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
      colors: ["#F3CA3D", "#F40000", "#0016F4"],
      plotOptions: {
        donut: {
          size: "65%",
          background: "transparent",
          expandOnClick: true,
        },
      },
    },
  };

  const label = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const txnCount = label.map(
    (day) =>
      parseInt(
        data?.weeklyTransactionData[day.toLowerCase()]?.transactionCount
      ) || 0
  );

  const txnValue = label.map((day) =>
    parseFloat(
      data?.weeklyTransactionData[day.toLowerCase()]?.transactionValue || 0
    ).toFixed(2)
  );
  // console.log(txnCount, txnValue);

  const lineChartData = {
    series1: [
      {
        name: "Transaction Count",
        // data: [28, 29, 33, 36, 32, 32, 33],
        data: txnCount,
        type: "bar",
      },
    ],
    series2: [
      {
        name: "Transaction Value",
        // data: [12, 11, 14, 18, 17, 13, 13],
        type: "line",
        data: txnValue,
      },
    ],
    series: [
      {
        name: "Transaction Count",
        data: [28, 29, 33, 36, 32, 32, 33],
        // data: txnCount,
        type: "bar",
      },
      {
        name: "Transaction Value",
        data: [12, 11, 14, 18, 17, 13, 13],
        type: "line",
        // data: txnValue,
      },
    ],
    options: {
      chart: {
        height: 200,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Weekly Transaction Data",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: label,
      },

      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };

  return (
    <React.Fragment>
      <section className="h-full flex flex-col  ">
        <div className=" mx-auto w-full pb-10 px-5  ">
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

              <CardCount2
                desciption="Pending Transactions"
                value={data?.pendingTransactions}
                percent={getPercent(
                  data?.totalTransactions,
                  data?.pendingTransactions
                )}
              />

              <CardCount2
                desciption="Successful Transactions"
                value={data?.successfulTransactions}
                percent={getPercent(
                  data?.totalTransactions,
                  data?.successfulTransactions
                )}
              />

              <CardCount2
                desciption="Failed Transactions"
                value={data?.failedTransactions}
                percent={getPercent(
                  data?.totalTransactions,
                  data?.failedTransactions
                )}
              />
              <CardCount4
                accountNumber={data?.highestTransactingAccount?.accountNumber}
                txn={data?.highestTransactingAccount?.transactions}
              />
            </dl>
          </div>

          {/* chart go heere */}
          <div className="my-5 grid grid-cols-3 gap-5">
            {/* left */}
            <div className="col-span-2 px-2 py-6 text-center bg-white border border-gray-700 rounded-lg hover:bg-gray-50">
              <ReactApexChart
                options={lineChartData.options}
                series={lineChartData.series2}
                type="line"
                height="300"
              />
            </div>
            {/* right pie chart */}
            <div className=" px-2 py-6 text-center bg-white border border-gray-700 rounded-lg hover:bg-gray-50">
              <ReactApexChart
                options={pieChartData.options}
                series={pieChartData.series}
                type="donut"
              />
            </div>
          </div>

          {/* bar chart full w */}
          <div className=" px-2 py-6 text-center bg-white border border-gray-700 rounded-lg hover:bg-gray-50">
            <ReactApexChart
              options={lineChartData.options}
              series={lineChartData.series1}
              type="line"
              height="300"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
