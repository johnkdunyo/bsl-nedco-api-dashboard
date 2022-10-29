import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { getDashboard, getTxn } from "../redux/txnSlice";
import { setCurrentUser } from "../redux/userSlice";
import API from "../networks/api";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState("");

  const [viewPassword, setViewPassword] = useState(false);

  const onViewPasswordHandler = () => {
    setViewPassword((prev) => !prev);
  };

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    setError(" ");
    setIsLoggingIn(true);
    let formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);

    API.post("/admin/login", formData)
      .then((response) => {
        console.log("data->", response);
        if (response.status === 200) {
          dispatch(setCurrentUser(response.data.data));
          navigate("/");
          window.location.reload(true);
        }
      })
      .catch((error) => {
        console.log("error", error);
        console.log("error->", error.response);
        if (error.response.status === 401) {
          setError(error.response.data.message);
        } else if (error.response.status === 422) {
          setError(error.response.data.message);
        } else if (error.response.status === 400) {
          setError(error.response.data.message);
        } else {
          setError(
            error.response?.data?.message ||
              "Something happend, please try again"
          );
        }
      })
      .finally((response) => {
        console.log(response);
        setIsLoggingIn(false);
      });
  };

  useEffect(() => {
    setError(null);
  }, [password, username]);

  return (
    <React.Fragment>
      <section className="bg-gray-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 sm:p-8">
              <h1 className="text-3xl text-center text-gray-800 font-bold mb-6">
                Welcome back! ✨
              </h1>
              <form className="" onSubmit={onFormSubmitHandler}>
                <div className="pb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="username"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@email.com"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="pb-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={viewPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="••••••••"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                <p className="text-center text-red-500 text-sm mb-4">
                  {error ? error : ""}
                </p>

                <button
                  type="submit"
                  className="w-full  text-white bg-gray-800 hover:bg-opacity-95 mt-0  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  {isLoggingIn ? "Logging in" : "Log in"}
                </button>
              </form>
              <div className="text-center mt-2">
                <p className="text-black text-sm">
                  Forgot Password ?{" "}
                  <Link
                    to="/resetpasswordrequest"
                    className="text-blue-700 hover:underline"
                  >
                    Reset Password
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SignIn;
