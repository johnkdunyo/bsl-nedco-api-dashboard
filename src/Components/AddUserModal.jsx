import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../networks/api";

const userRoles = [
  {
    label: "ADMIN",
    value: "ADMIN",
  },
  {
    label: "SUPER ADMIN",
    value: "SUPER ADMIN",
  },
];

const AddUserModal = ({ modalStatus, title, currentUser }) => {
  console.log("current user", currentUser);
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(userRoles[0].value);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (currentUser) {
      setSelectedRole(currentUser.role);
      setFirstName(currentUser.firstName);
      setLastName(currentUser.lastName);
      setEmail(currentUser.email);
    }
  }, []);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(selectedRole, firstName, lastName, email);

    let formData = new FormData();
    formData.append("password", "password");
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("role", selectedRole);

    if (!currentUser) {
      API.post("/admin/create", formData)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            navigate("/usermanagement");
          }
          modalStatus(false);
          window.location.reload(true);
        })
        .catch((err) => {
          if (err.response.status === 422) {
            console.log(err.response.data.errors);
            setError(err.response.data.errors);
          } else if (err.response.status === 401) {
            localStorage.clear();
            setError({ eror: ["You need to log in again"] });
            setTimeout(() => window.location.reload(true), 5000);
          } else {
            console.log(
              "something terrible went wrong, please try again later!"
            );
          }
        });
    } else {
      API.put(`/admin/${currentUser.id}`, {
        firstName: firstName,
        lastName: lastName,
        role: selectedRole,
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            navigate("/usermanagement");
          }
          modalStatus(false);
          window.location.reload(true);
        })
        .catch((err) => {
          if (err.response.status === 422) {
            console.log(err.response.data.errors);
            setError(err.response.data.errors);
          } else if (err.response.status === 401) {
            localStorage.clear();
            setError({ eror: ["You need to log in again"] });
            setTimeout(() => window.location.reload(true), 5000);
          } else {
            console.log(
              "something terrible went wrong, please try again later!"
            );
          }
        });
    }
  };
  console.log(Object.values(error));

  return (
    <React.Fragment>
      <div
        className="z-90 fixed left-64 inset-0 overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-75 p-4 lg:p-8"
        role="dialog"
        aria-labelledby="tk-modal-simple"
        aria-hidden="false"
      >
        {/* the div above is for the backdrop */}

        <div
          className="flex flex-col rounded shadow-sm bg-white overflow-hidden w-[60%] mx-auto mt-20 z-50"
          role="document"
        >
          <div className="py-4 px-5 lg:px-6 w-full bg-gray-50 flex justify-between items-center">
            <h3 className="font-medium">{title}</h3>
            <div className="-my-4">
              <button
                type="button"
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600"
                onClick={() => modalStatus(false)}
              >
                <svg
                  className="hi-solid hi-x inline-block w-4 h-4 -mx-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-5 lg:p-6 grow w-full">
            <div className="p-5 ">
              <form className="space-y-3" onSubmit={formSubmitHandler}>
                {/* <div>{error && error?.map((err) => <p>{err}</p>)}</div> */}
                <div>
                  {error &&
                    Object.values(error).map((err, i) => (
                      <p className="text-sm text-red-600" key={i}>
                        {err[0]}
                      </p>
                    ))}
                </div>
                <div className="space-y-1">
                  <label className="font-medium">Photo</label>
                  <div className="sm:flex sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-300">
                      <svg
                        className="hi-solid hi-user inline-block w-8 h-8"
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
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        type="file"
                        id="photo"
                        name="photo"
                      />
                    </label>
                  </div>
                </div>

                <div className=" gap-4 flex justify-between w-full items-center ">
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="tk-form-layouts-multiple-cards-name"
                      className="font-medium"
                    >
                      First Name
                    </label>
                    <input
                      required
                      className="block border border-gray-200 rounded px-3 py-2 leading-6 w-full  focus:ring-opacity-50"
                      type="text"
                      placeholder="Kofi "
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="tk-form-layouts-multiple-cards-name"
                      className="font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      className="block border border-gray-200 rounded px-3 py-2 leading-6 w-full  focus:ring-opacity-50"
                      type="text"
                      placeholder="Mensah"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="tk-form-layouts-multiple-cards-email"
                    className="font-medium"
                  >
                    Email
                  </label>
                  <input
                    readOnly={currentUser && true}
                    required
                    className="block border border-gray-200 rounded px-3 py-2 leading-6 w-full  focus:ring-opacity-50"
                    type="email"
                    placeholder="kofi@mensah.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="tk-form-layouts-multiple-cards-title"
                    className="font-medium"
                  >
                    Role
                  </label>
                  <select
                    required
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    {userRoles.map((role) => (
                      <option key={role.label} value={role.value}>
                        {role.value}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-10 w-full  flex justify-between">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-1.5 leading-5 text-sm rounded border-transparent text-red-600 hover:text-red-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:text-indigo-600"
                    onClick={() => modalStatus(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-1.5 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
                  >
                    {currentUser ? "Update User" : "Create Account"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddUserModal;
