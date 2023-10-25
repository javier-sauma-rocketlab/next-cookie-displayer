"use client";
import { useState } from "react";
import Cookie from "js-cookie";

export default function Home() {
  const [cookie, setCookie] = useState<any>("empty");

  const getCookie = () => {
    const ck = Cookie.get();
    setCookie(JSON.stringify(ck));
    console.log("cookie: ", ck);
  };
  const deleteCookie = () => {
    Cookie.remove("test", { path: "" }); // removed!
  };
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-5">
      <h1>Hello world </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5"></div>
      <button
        className={
          "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        }
        onClick={getCookie}
      >
        Set cookie
      </button>
      <button
        onClick={deleteCookie}
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Remove cookie
      </button>
      Your cookie: {cookie}
    </main>
  );
}
