import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="p-4 bg-black text-white bg-opacity-40 fixed w-100 z-10 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-4 mx-auto">
          <a
            rel="noopener noreferrer"
            href="https://cyberlearn.vn"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
           <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" ></img>
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
               to = '/home'
                className="flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="flex">
              <NavLink to ='/news'
                className="flex items-center px-4 -mb-1 dark:border-transparent"
              >
                Tin Tức
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
               to = '/contact'
                className="flex items-center px-4 -mb-1 dark:border-transparent"
              >
                Liên Hệ
              </NavLink>
            </li>
           
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <NavLink to='/register'>
            <button className="self-center px-8 py-3 rounded">Đăng Kí</button>
            </NavLink>
            <NavLink to='/login'>
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Đăng Nhập
            </button>
            </NavLink>
           
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
