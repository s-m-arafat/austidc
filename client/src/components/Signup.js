import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Shell from "./Shell";

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //   console.log(data);
    if (data.password === data.retypePass) {
      sendUserData(data);

      navigate("/home");
    } else {
      // show err div
      console.log("password dont match");
    }
  };
  const sendUserData = (userData) => {
    const url = `http://localhost:5000/addUser`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("From Server: ", response);
      })
    //   .catch((error) => console.log(error));
  };
  const navs = [
    { item: "Home" },
    { item: "Events" },
    { item: "Workshops" },
    { item: "Sign In" },
  ];
  return (
    // user ? (
    //     <Shell navs={navs}>
    //       <div className="hero">
    //         <div className="hero-content flex-col">
    //           <h1 className="text-5xl font-bold text-orange-500 m-auto">
    //             You are already logged in
    //           </h1>
    //           <p>
    //             go to your{" "}
    //             <Link
    //               to="../dashboard"
    //               className="underline underline-offset-2 text-black"
    //             >
    //               dashboard
    //             </Link>
    //           </p>
    //         </div>
    //       </div>
    //     </Shell>
    //   ) : (
    <Shell navs={navs}>
      {/* background page */}
      <div className="hero min-h-screen bg-slate-900">
        {/* input card container for flex*/}

        <div className="hero-content flex-col ">
          <div className="text-center ">
            {/* head title */}
            <h1 className="text-5xl font-bold text-green-500 p-5">
              Sign up now!
            </h1>
            <Link
              className="underline underline-offset-2 text-green-400"
              to="/signin"
            >
              Already have an account?
            </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* input Form card */}
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-800">
              <div className="card-body">
                {/* name input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    defaultValue=""
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  <div className="text-red-600">
                    {errors.name && "Name is required"}
                  </div>
                </div>
                {/* User name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Username</span>
                  </label>
                  <input
                    defaultValue=""
                    {...register("username", { required: true })}
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                  />
                  <div className="text-red-600">
                    {errors.name && "Username is required"}
                  </div>
                </div>

                {/* password input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    defaultValue=""
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <div className="text-red-600">
                    {errors.password && "Password is required"}
                  </div>
                </div>

                {/* retype password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Retype Password
                    </span>
                  </label>
                  <input
                    defaultValue=""
                    {...register("retypePass", { required: true })}
                    type="password"
                    placeholder="retype password"
                    className="input input-bordered"
                  />
                  <div className="text-red-600">
                    {errors.retypePass && "Enter password again"}
                  </div>
                </div>

                {/* Sign up submit button */}
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn bg-green-500 hover:btn-primary text-white"
                  />
                </div>

                <label className="label">
                  <p className="text-green-400 font-semibold text-sm">
                    {" "}
                    By Signing up, you agree to AUST-IDC's Terms of conditions
                    and Privacy Policy
                  </p>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Shell>
  );
}
