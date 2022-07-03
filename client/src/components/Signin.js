import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Shell from "./Shell";
import { useForm } from "react-hook-form";

export default function Signin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (userData) => {
    const url = `http://localhost:5000/login`;
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
        navigate("/home");
      })
  };

  const navs = [
    { item: "Home" },
    { item: "Events" },
    { item: "Workshops" },
    { item: "Sign In" },
  ];
  return (
    //user ? (
    //     <Shell navs={navs}>
    //       <div className="hero">
    //         <div className="hero-content flex-col">
    //           <h1 className="text-5xl font-bold text-green-500 m-auto">
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
      <div className="hero min-h-screen bg-slate-900 -mt-32">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-green-500 p-5">
              Login now!
            </h1>
            <Link
              className="underline underline-offset-2 text-green-300"
              to="/signup"
            >
              Don't have any account?
            </Link>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xs sm:max-w-sm shadow-2xl bg-slate-800">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  {/* <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label> */}
                  <label className="input-group flex-wrap">
                    <span >Username</span>
                    <input
                      defaultValue=""
                      {...register("username", { required: true })}
                      type="text"
                      placeholder="Enter Username"
                      className="input input-bordered"
                    />
                  </label>
                  <div className="text-red-600">
                    {errors.username && "Username is required"}
                  </div>
                </div>
                <div className="form-control">
                  {/* <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label> */}
                  <label className="input-group flex-wrap">
                    <span>Password</span>
                    <input
                      defaultValue=""
                      {...register("password", { required: true })}
                      type="password"
                      placeholder="Enter password"
                      className="input input-bordered"
                    />
                  </label>
                  <div className="text-red-600">
                    {errors.password && "Password is required"}
                  </div>
                  <label className="label">
                    <a
                      href="/#"
                      className="label-text-alt link link-hover text-green-500"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                {error ? (
                  <div className="alert alert-error shadow-lg">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Invalid Email Or Password</span>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                <div className="form-control mt-3">
                  <button className="btn bg-green-500 hover:btn-primary text-black">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Shell>
  );
}
