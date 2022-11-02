import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const RenderUpdatePassword = ({ user }) => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [updating, setUpdating] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("updating Password");
    setUpdating(true);
  };

  useState(() => {
    setPasswordChanged(true);
  }, [oldPassword, newPassword]);
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h2 className="mx-10 text-2xl text-gray-800 font-bold ">
          Update Password
        </h2>

        <div className="p-10">
          <div className="w-full mt-5">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="oldPassword"
            >
              Old Password
            </label>
            <input
              id="oldPassword"
              className="form-input block border border-gray-200 rounded px-3 py-2 leading-6 w-full  active:border-gray-900"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="enter old password"
            />
          </div>

          <div className="w-full mt-5">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              id="newPassword"
              className="form-input block border border-gray-200 rounded px-3 py-2 leading-6 w-full  active:border-gray-900"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="enter new password"
            />
          </div>
        </div>

        <hr className="mt-5" />
        <div className="mx-10 flex justify-end space-x-5 mt-5 mb-6">
          <button className="inline-flex justify-center items-center  border border-gray-500 font-semibold focus:outline-none px-3 py-1.5 leading-5 text-sm rounded  text-black hover:border-gray-900 hover:opacity-80">
            Cancel
          </button>
          <button
            type="submit"
            className={` ${
              !passwordChanged && "opacity-50 cursor-not-allowed"
            } inline-flex justify-center items-center  border font-semibold focus:outline-none px-3 py-1.5 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white  focus:ring focus:ring-indigo-500 focus:ring-opacity-50 `}
          >
            {updating ? "Update Password" : "Updating Password"}
          </button>
        </div>
      </form>
    </>
  );
};

const RenderProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [nameChanged, setNameChanged] = useState(false);
  const [updating, setUpdating] = useState(false);

  const onSubmitHandler2 = (e) => {
    e.preventDefault();
    console.log("updating profile names");
    setUpdating(true);
  };

  useEffect(() => {
    if (firstName !== user.firstName) {
      setNameChanged(true);
    }
  }, [firstName, lastName, user.firstName, user.lastName]);
  console.log(nameChanged);
  console.log(firstName, user.firstName);
  return (
    <>
      <form onSubmit={onSubmitHandler2}>
        <h2 className="mx-10 text-2xl text-gray-800 font-bold mb-5">
          My Profile
        </h2>
        <div className="mx-10 flex items-center">
          <div className="mr-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-300">
            <svg
              className="inline-block w-10 h-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <button className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-1.5 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
            Change
          </button>
        </div>

        <div className="mx-10 mt-5 text-gray-800 ">
          <div className="flex justify-between items-center space-x-5">
            <div className="w-full">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                className="form-input block border border-gray-200 rounded px-3 py-2 leading-6 w-full  focus:ring-opacity-50"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                className="form-input block border border-gray-200 rounded px-3 py-2 leading-6 w-full  focus:ring-opacity-50"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full mt-5">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              readOnly
              className="form-input block border border-gray-200 rounded px-3 py-2 leading-6 w-full  active:border-gray-900"
              type="text"
              value={user.email}
            />
          </div>

          <div className="w-full mt-5">
            <label className="block text-sm font-medium mb-1" htmlFor="role">
              Account Type
            </label>
            <input
              id="role"
              readOnly
              className="form-input block border border-gray-200 rounded px-3 py-2 leading-6 w-full  focus:ring-opacity-50"
              type="text"
              value={user.role}
            />
          </div>
        </div>

        <hr className="mt-5" />
        <div className="mx-10 flex justify-end space-x-5 mt-5 mb-6">
          <button className="inline-flex justify-center items-center  border border-gray-500 font-semibold focus:outline-none px-3 py-1.5 leading-5 text-sm rounded  text-black hover:border-gray-900 hover:opacity-80">
            Cancel
          </button>
          <button
            type="submit"
            className={` ${
              !nameChanged && "opacity-50 cursor-not-allowed"
            } inline-flex justify-center items-center  border font-semibold focus:outline-none px-3 py-1.5 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white  focus:ring focus:ring-indigo-500 focus:ring-opacity-50 `}
          >
            {updating ? "Saving Changes" : "Save Changes"}
          </button>
        </div>
      </form>
    </>
  );
};

const UserSettings = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [tab, setTab] = useState(1);

  //   console.log(lastName, user.lastName);
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-screen h-screen ml-64">
          <Header />

          <main className="m-10 bg-white flex ">
            {/* left */}
            <section>
              <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-gray-200 w-80 md:space-y-3">
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase mb-3">
                    settings Navigation
                  </div>
                  <ul className="flex flex-nowrap md:block mr-3 md:mr-0 space-y-3">
                    <li className="mr-0.5 md:mr-0 md:mb-0.5" id="1">
                      <button
                        className="flex items-center px-2.5 py-2 rounded whitespace-nowrap bg-indigo-50"
                        onClick={() => setTab(1)}
                      >
                        <svg
                          className="w-4 h-4 shrink-0 fill-current text-gray-400 mr-2 text-indigo-400'"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-600text-indigo-500' : 'hover:text-gray-700'">
                          My Account
                        </span>
                      </button>
                    </li>

                    <li className="mr-0.5 md:mr-0 md:mb-0.5" id="2">
                      <button
                        className="flex items-center px-2.5 py-2 rounded whitespace-nowrap bg-indigo-50"
                        onClick={() => setTab(2)}
                      >
                        <svg
                          className="w-4 h-4 shrink-0 fill-current text-gray-400 mr-2 text-indigo-400'"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-600text-indigo-500' : 'hover:text-gray-700'">
                          Reset Password
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* main */}
            <section className="pt-10 border border-yellow-400 w-full">
              {tab === 1 && <RenderProfile user={user} />}

              {tab === 2 && <RenderUpdatePassword user={user} />}
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
