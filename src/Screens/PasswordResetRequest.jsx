import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../networks/api";

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState("");

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    setError(" ");
    setIsLoggingIn(true);
    let formData = new FormData();
    formData.append("email", email);

    API.post("/admin/resetpasswordrequest", formData)
      .then((response) => {
        console.log("data->", response);
        if (response.status === 200) {
          setError(response.data.data);
        }
      })
      .catch((error) => {
        console.log("error->", error.response);
        if (error.response.status === 401) {
          setError(error.response.data.message);
          window.location.reload(true);
        } else if (error.response.status === 422) {
          setError(error.response.data.message);
        } else {
          setError(
            error.response.data.message || "Something happend, please try again"
          );
        }
      })
      .finally((response) => {
        setIsLoggingIn(false);
      });
  };

  return (
    <React.Fragment>
      <section className="bg-gray-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 sm:p-8">
              <h1 className="text-3xl text-center text-gray-800 font-bold mb-6">
                Reset Password
              </h1>
              <form className="" onSubmit={onFormSubmitHandler}>
                <div className="pb-4">
                  <label
                    htmlFor="email"
                    className="block mb-8 text-sm font-medium text-gray-900 "
                  >
                    Please enter your email and we will reset your password
                  </label>
                  <input
                    type="email"
                    name="username"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <p className="text-center text-red-500 text-sm mb-4">
                  {error ? error : ""}
                </p>

                <button
                  type="submit"
                  className="w-full  text-white bg-gray-800 hover:bg-opacity-95 mt-0  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  {isLoggingIn ? "Resetting Password" : "Reset Password"}
                </button>
              </form>
              <div className="text-center mt-2">
                <p className="text-black text-sm">
                  <Link to="/signin" className="text-blue-700 hover:underline">
                    Log in
                  </Link>{" "}
                  rather ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PasswordResetRequest;
