import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import API from "../networks/api";

const RenderUpdatePassword = ({ user }) => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);

  const [viewPassword, setViewPassword] = useState(false);
  const onViewPasswordHandler = () => {
    setViewPassword((prev) => !prev);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("updating Password");
    setUpdatingPassword(true);

    API.put("/admin/me/passwordupdate", { oldPassword, newPassword })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setSuccess(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status === 400) {
          setError(error.response.data[0]);
        } else if (error.response.status === 422) {
          console.log(error.response.data.message);
          setError(error.response.data.message);
        } else {
          setError("Something happend, please try again");
        }
        // setError(error.response.data[0]);
      })
      .finally(() => {
        setUpdatingPassword(false);
      });
  };

  useEffect(() => {
    setPasswordChanged(true);
  }, [oldPassword, newPassword]);

  useEffect(() => {
    setError("");
    setSuccess("");
  }, [oldPassword, newPassword]);
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h2 className="mx-10 text-2xl text-gray-800 font-bold pb-8 ">
          Update Password
        </h2>

        {error && (
          <div className="px-10">
            <button className="w-full py-3 flex items-center rounded-sm bg-red-200">
              <p className=" mx-2 text-black text-sm ">{error}</p>
            </button>
          </div>
        )}

        {success && (
          <div className="px-10">
            <button className="w-full py-3 flex items-center rounded-sm bg-green-200">
              <p className=" mx-2 text-black text-sm ">{success}</p>
            </button>
          </div>
        )}

        <div className="px-10">
          <div className="w-full mt-5">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="oldPassword"
            >
              Old Password
            </label>

            <div className="relative">
              <input
                id="oldPassword"
                autoComplete="current-password"
                className="form-input block border border-gray-200 rounded px-3 py-2 leading-6 w-full  active:border-gray-900"
                type={viewPassword ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="enter old password"
              />
              <button type="button" onClick={onViewPasswordHandler}>
                <svg
                  className="absolute top-4 right-4"
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0.416687C4.36364 0.416687 1.25818 2.67851 0 5.87123C1.25818 9.06396 4.36364 11.3258 8 11.3258C11.6364 11.3258 14.7418 9.06396 16 5.87123C14.7418 2.67851 11.6364 0.416687 8 0.416687ZM8 9.5076C5.99273 9.5076 4.36364 7.8785 4.36364 5.87123C4.36364 3.86396 5.99273 2.23487 8 2.23487C10.0073 2.23487 11.6364 3.86396 11.6364 5.87123C11.6364 7.8785 10.0073 9.5076 8 9.5076ZM8 3.68941C6.79273 3.68941 5.81818 4.66396 5.81818 5.87123C5.81818 7.07851 6.79273 8.05305 8 8.05305C9.20727 8.05305 10.1818 7.07851 10.1818 5.87123C10.1818 4.66396 9.20727 3.68941 8 3.68941Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full mt-5">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <div className="relative">
              <input
                id="newPassword"
                autoComplete="new-password"
                className="form-input block border border-gray-200 rounded px-3 py-2 leading-6 w-full  active:border-gray-900"
                type={viewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="enter new password"
              />
              <button type="button" onClick={onViewPasswordHandler}>
                <svg
                  className="absolute top-4 right-4"
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0.416687C4.36364 0.416687 1.25818 2.67851 0 5.87123C1.25818 9.06396 4.36364 11.3258 8 11.3258C11.6364 11.3258 14.7418 9.06396 16 5.87123C14.7418 2.67851 11.6364 0.416687 8 0.416687ZM8 9.5076C5.99273 9.5076 4.36364 7.8785 4.36364 5.87123C4.36364 3.86396 5.99273 2.23487 8 2.23487C10.0073 2.23487 11.6364 3.86396 11.6364 5.87123C11.6364 7.8785 10.0073 9.5076 8 9.5076ZM8 3.68941C6.79273 3.68941 5.81818 4.66396 5.81818 5.87123C5.81818 7.07851 6.79273 8.05305 8 8.05305C9.20727 8.05305 10.1818 7.07851 10.1818 5.87123C10.1818 4.66396 9.20727 3.68941 8 3.68941Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <hr className="mt-5" />
        <div className="mx-10 flex justify-end space-x-5 mt-5 mb-6">
          <button
            className="inline-flex justify-center items-center  border border-gray-500 font-semibold focus:outline-none px-3 py-1.5 leading-5 text-sm rounded  text-black hover:border-gray-900 hover:opacity-80"
            onClick={() => window.location.reload(true)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={` ${
              !passwordChanged && "opacity-50 cursor-not-allowed"
            } inline-flex justify-center items-center  border font-semibold focus:outline-none px-3 py-1.5 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white  focus:ring focus:ring-indigo-500 focus:ring-opacity-50 `}
          >
            {!updatingPassword ? "Update Password" : "Updating Password"}
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
  const [error, setError] = useState("");

  const onSubmitHandler2 = (e) => {
    e.preventDefault();
    console.log("updating profile names");
    setUpdating(true);

    API.put("/admin/me", { firstName, lastName })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // get firstNAme and lastName and update
          let user = JSON.parse(localStorage.getItem("user"));
          user.firstName = response.data.data.firstName;
          user.lastName = response.data.data.lastName;
          localStorage.setItem("user", JSON.stringify(user));
          window.location.reload(true);
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status === 422) {
          console.log(error.response.data.message);
          setError(error.response.data.message);
        } else {
          setError("Something happend, please try again");
        }
      })
      .finally(() => {
        setUpdating(false);
      });
  };

  useEffect(() => {
    if (firstName !== user.firstName) {
      setNameChanged(true);
    } else if (lastName !== user.lastName) {
      setNameChanged(true);
    }
    setError("");
  }, [firstName, lastName, user.firstName, user.lastName]);
  console.log(nameChanged);
  console.log(firstName, user.firstName);
  return (
    <>
      <form onSubmit={onSubmitHandler2}>
        <h2 className="mx-10 text-2xl text-gray-800 font-bold mb-5">
          My Profile
        </h2>
        {error && (
          <div className="px-10 pb-10">
            <button className="w-full py-3 flex items-center rounded-sm bg-red-200">
              <p className=" mx-2 text-black text-sm ">{error}</p>
            </button>
          </div>
        )}
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
          <button
            className="inline-flex justify-center items-center  border border-gray-500 font-semibold focus:outline-none px-3 py-1.5 leading-5 text-sm rounded  text-black hover:border-gray-900 hover:opacity-80"
            onClick={() => window.location.reload(true)}
          >
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
                        <span className="text-sm font-medium text-gray-600 hover:text-gray-700'">
                          Reset Password
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* main */}
            <section className="pt-10 border-l w-full">
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
