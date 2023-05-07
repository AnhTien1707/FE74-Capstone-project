import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/quanLyNguoiDung/thunkAction";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const { user } = useSelector((state) => state.quanLyNguoiDung);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-full mx-auto">
        {/* <form
          className="mt-10 ml-auto mr-auto w-3/4"
          onSubmit={handleSubmit(async (value) => {
            try {
              dispatch(login(value));
              
            } catch (error) {}
          })}
        >
          <div>
            <div>
              <label
                htmlFor="account"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Account
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="account"
                {...register("taiKhoan", {
                  required: "Vui long nhap tai khoan",
                  maxLength: {
                    value: 10,
                    message: "Tài khoản chỉ được nhập tối đa 10 kí tự",
                  },
                  minLength: {
                    value: 3,
                    message: "Tài khoản  được nhập tối thiểu 3 kí tự",
                  },
                })}
              />
              <p className="text-[13px] text-red-500">
                {errors?.taiKhoan?.message}
              </p>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                {...register("matKhau", {
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
                    message: "It nhat 1 chu cai in hoa, 1 ky tu dac biet",
                  },
                })}
              />
              <p className="text-[13px] text-red-500">
                {errors?.matKhau?.message}
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form> */}
        <form
          className="space-y-6"
          action="#"
          onSubmit={handleSubmit(async (value) => {
            try {
              dispatch(login(value));
            } catch (error) {}
          })}
        >
          <h2 className="text-3 xl font-medium text-white mt-5">
            Wellcome To Our Website
          </h2>
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
              {...register("taiKhoan", {
                required: "Vui long nhap tai khoan",
                maxLength: {
                  value: 10,
                  message: "Tài khoản chỉ được nhập tối đa 10 kí tự",
                },
                minLength: {
                  value: 3,
                  message: "Tài khoản  được nhập tối thiểu 3 kí tự",
                },
              })}
            />
            <p className="text-[13px] text-red-500">
              {errors?.taiKhoan?.message}
            </p>
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
              {...register("matKhau", {
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
                  message: "It nhat 1 chu cai in hoa, 1 ky tu dac biet",
                },
              })}
            />
            <p className="text-[13px] text-red-500">
              {errors?.matKhau?.message}
            </p>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
