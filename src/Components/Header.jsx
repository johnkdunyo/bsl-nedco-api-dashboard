import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutCurrentUser } from "../redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openUser, setOpenUser] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    await dispatch(logOutCurrentUser()).unwrap;
    navigate("/signin");
  };

  return (
    <React.Fragment>
      <header className="sticky  top-0 bg-white border-b-2 border-gray-200 z-30  h-14 ">
        <div className="px-12 py-3 flex justify-end space-x-3 ">
          <button className="text-lg border border-transparent hover:border-gray-100 px-3 rounded-md hover:bg-gray-100">
            Notifications
          </button>
          <hr className="w-px h-6 bg-gray-200" />
          <div className="relative inline-flex">
            <button
              className="inline-flex justify-center items-center group"
              aria-haspopup="true"
              onClick={() => setOpenUser((prev) => !prev)}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.579 0 0 4.579 0 10C0 15.421 4.579 20 10 20C15.421 20 20 15.421 20 10C20 4.579 15.421 0 10 0ZM10 5C11.727 5 13 6.272 13 8C13 9.728 11.727 11 10 11C8.274 11 7 9.728 7 8C7 6.272 8.274 5 10 5ZM4.894 14.772C5.791 13.452 7.287 12.572 9 12.572H11C12.714 12.572 14.209 13.452 15.106 14.772C13.828 16.14 12.015 17 10 17C7.985 17 6.172 16.14 4.894 14.772Z"
                  fill="black"
                />
              </svg>
              <div className="flex items-center truncate">
                <span className="truncate ml-2 text-lg font-medium group-hover:text-gray-800">
                  {user?.firstName}
                </span>
                <svg
                  className="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400"
                  viewBox="0 0 12 12"
                >
                  <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                </svg>
              </div>
            </button>

            <div
              role="menu"
              aria-labelledby="tk-dropdown-layouts-user"
              className={`${
                !openUser && "hidden"
              } absolute top-full right-0 origin-top-right mt-2 w-48 shadow-xl rounded z-1 `}
            >
              <div className="bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100">
                {/* <div className="p-2 space-y-1">
                  <a
                    role="menuitem"
                    href="/settings"
                    className="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                  >
                    <svg
                      className="hi-solid hi-user-circle inline-block w-5 h-5 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Profile</span>
                  </a>
                </div> */}
                <div className="p-2 space-y-1">
                  <a
                    role="menuitem"
                    href="/settings"
                    className="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                  >
                    <svg
                      className="hi-solid hi-cog inline-block w-5 h-5 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Settings</span>
                  </a>
                </div>
                <div className="p-2 space-y-1 pt-5">
                  <button
                    onClick={handleLogout}
                    role="menuitem"
                    className="w-full text-left flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                  >
                    <svg
                      className="hi-solid hi-lock-closed inline-block w-5 h-5 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Sign out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
