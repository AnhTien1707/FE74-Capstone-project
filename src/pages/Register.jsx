import React from "react";
import { useForm } from "react-hook-form";
import { quanLyNguoiDungServices } from "../services/quanLyNguoiDung.services";
import { message } from "antd";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  return (
    <div className="max-w-screen-2xl mx-auto text-white ">
      <h1 className="text-xl font-medium text-white mb-1" >Sign Up To Our Website</h1>
      <form
        className="ml-auto mr-auto w-full mt-1"
        onSubmit={handleSubmit(async (value) => {
          console.log(value);
          try {
            const res = await quanLyNguoiDungServices.register(value);
            if (res.data.statusCode !== 400) {
              message.success("Đăng ký tài khoản thành công");
            }
          } catch (error) {}
        })}
      >
        <div className="grid gap-1 mb-1 md:grid-cols-2">
          <div>
            <label
              htmlFor="account"
              className="block mb-1 text-sm font-medium text-white"
            >
              Account
            </label>
            <input
              type="text"
              id="account"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white"
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
              htmlFor="fullname"
              className="block mb-1 text-sm font-medium text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="fullname"
              {...register("hoTen", {
                required: "Vui long nhap ho ten",
              })}
            />
            <p className="text-[13px] text-red-500">{errors?.hoTen?.message}</p>
          </div>
          <div>
            <label
              htmlFor="groupId"
              className="block mb-1 text-sm font-medium text-white"
            >
              Group ID
            </label>
            <input
              type="text"
              id="groupId"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white "
              placeholder="group Id"
              {...register("maNhom", {
                required: "Vui long nhap ma nhom",
              })}
            />
            <p className="text-[13px] text-red-500">
              {errors?.maNhom?.message}
            </p>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-1 text-sm font-medium text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white"
              placeholder="123-45-678"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              {...register("soDt", {
                required: "Vui long nhap so dien thoai",
              })}
            />
            <p className="text-[13px] text-red-500">{errors?.soDt?.message}</p>
          </div>
        </div>
        <div className="mb-1">
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white"
            placeholder="john.doe@company.com"
            {...register("email", {
              pattern: {
                // value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Vui long nhap email",
              },
            })}
          />

          <p className="text-[13px] text-red-500">{errors?.email?.message}</p>
        </div>
        <div className="mb-1">
          <label
            htmlFor="password"
            className="block mb-1 text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white"
            placeholder="•••••••••"
            {...register("matKhau", {
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
                message: "It nhat 1 chu cai in hoa, 1 ky tu dac biet",
              },
            })}
          />
          <p className="text-[13px] text-red-500">{errors?.matKhau?.message}</p>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
