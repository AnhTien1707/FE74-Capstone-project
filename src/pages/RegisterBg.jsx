import React from "react";
import bgmovie from "../assest/img/bgmovie.jpg";
import Tabbanner from "../component/TabBanner";


const RegisterBg = () => {
  return (
    <div className="bg-[#171624] h-[100vh] relative">
      <div className="container w-[60%] h-[80%] grid grid-cols-2 bg-[#201f2d] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <div className="signUp-left">
          <img src={bgmovie} alt="avatar" className="h-[100%]" />
        </div>
        <div className="signUp-right h-[100%] text-left ml-5 mr-5 mt-7">
          {/* <form className="space-y-6" action="#">
            <h2 className="text-xl font-medium text-white">
              Wellcome To Our Website
            </h2>
            <i className="text-[#777]"> 
              Log in to your account
            </i>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your Account
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
           
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
              Not registered?{" "}
              <a
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500 "
              >
                Create account
              </a>
            </div>
          </form> */}
          <Tabbanner/>
        </div>
      </div>
    </div>
  );
};

export default RegisterBg;
