import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <section className=" ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
                Page not found
              </p>
              <p className="mb-4 text-lg font-light text-gray-700 dark:text-gray-400">
                Sorry, we can't find that page. You'll find lots to explore on
                the home page.{" "}
              </p>
              <Link
                to="/"
                className="inline-flex   text-white bg-gray-800 hover:bg-opacity-95 mt-0  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page404;
