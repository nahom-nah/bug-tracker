import Head from "next/head";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [openMenu, setOpenMenu] = useState<Boolean>();

  return (
    <div>
      <div className="h-screen bg-gray-900">
        <header className="px-2 py-2 md:px-6 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <div>
              <img
                className="max-h-12 md:max-h-14 object-cover"
                src="logo.png"
                alt="logo"
              />
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="focus:outline-none "
              >
                {openMenu ? (
                  <XIcon className="h-7 text-gray-400 hover:text-white" />
                ) : (
                  <MenuIcon className="h-7 text-gray-400 hover:text-white" />
                )}
              </button>
            </div>
          </div>
          <div
            className={openMenu ? "block px-2 pt-2  sm:flex" : "hidden sm:flex"}
          >
            <Link href="/about">
              <button className="block hover:bg-gray-800 px-2 py-1 sm:mt-0 rounded   text-white sm:text-gray-400 sm:hover:text-white font-semibold">
                About
              </button>
            </Link>
            <Link href="/login">
              <button className="block hover:bg-gray-800 px-2 mt-1 py-1 sm:mt-0 sm:ml-3 sm:text-gray-400 rounded sm:hover:text-white text-white font-semibold">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button
                className="block 
              hover:bg-gray-800
              px-2 mt-1
              py-1 sm:mt-0
              sm:ml-3
              sm:text-white rounded
              text-white
              sm:bg-red-600
              sm:hover:bg-red-400
              sm:hover:ring-2
              sm:hover:ring-red-600
              font-semibold"
              >
                SignUp
              </button>
            </Link>
          </div>
        </header>
        <div className="px-4 sm:flex sm:items-center sm:justify-center h-3/5   ">
          <div>
            <h1 className="text-xl sm:text-3xl text-center text-gray-200 font-semibold">
              Console.<span className="text-red-500">err()</span> delivers
              seamless bug tracking power
            </h1>
            <div className="sm:text-xl text-center text-gray-300 font-medium mt-2">
              So your team can capture, assign, prioritize, and resolve bugs
              quickly
            </div>
          </div>
          <div className="flex justify-center">
            <img className="h-32" src="bug.png" alt="bug" />
          </div>
        </div>
      </div>
    </div>
  );
}
