import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../networks/api";
import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [viewPassword, setViewPassword] = useState(false);

  const email = params.get("email");
  const token = params.get("token");
  if (!email && !token) {
    window.location.href = "/";
  }

  const onViewPasswordHandler = () => {
    setViewPassword((prev) => !prev);
  };

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    setError(" ");
    setSuccess("");
    if (password !== confirmPassword) {
      return setError("Confirm Password does not match");
    }
    setIsLoggingIn(true);
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("token", token);

    API.post("/admin/reset-password", formData)
      .then((response) => {
        console.log("response->", response);
        if (response.status === 200) {
          setSuccess("Password reset successful, please log in now");
          setTimeout(() => {
            window.location.href = "/";
          }, 5000);
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
      .finally(() => {
        setIsLoggingIn(false);
      });
  };
  useEffect(() => {
    setError(null);
    setSuccess(null);
  }, [password, confirmPassword]);

  return (
    <React.Fragment>
      <section className="bg-gray-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6  sm:p-8">
              <h1 className="text-3xl text-center text-gray-800 font-bold mb-6">
                Reset Password ✨
              </h1>
              <p className="text-center text-sm text-gray-600">
                Hi,{" "}
                <span className="font-bold hover:underline">{`${email}`}</span>{" "}
                please enter your new password
              </p>
              <form className="mt-5" onSubmit={onFormSubmitHandler}>
                <div className="pb-0">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      autoComplete="new-password"
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

                <div className="pb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      autoComplete="new-password"
                      type={viewPassword ? "text" : "password"}
                      name="confimPassword"
                      id="confirmPassword"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="••••••••"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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

                <p
                  className={`text-center text-${
                    success ? "green" : "red"
                  }-500 text-sm mb-4`}
                >
                  {error && error}
                  {success && success}
                </p>

                <button
                  type="submit"
                  className="w-full  text-white bg-gray-800 hover:bg-opacity-95 mt-0  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  {isLoggingIn ? "Resetting Password" : "Reset Password"}
                </button>
              </form>
              <div className="text-center mt-2">
                <Link to="/signin" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ResetPassword;
