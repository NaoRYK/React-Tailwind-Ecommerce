import React from "react";
import Layout from "../../Components/Layout/Layout";
import { Navigate } from "react-router-dom";
import "./sigin.css";
const SignIn = () => {
  return (
    <div>
      <Layout color={"bg-gradient-to-b from-emerald-300 to-emerald-600"}>
        <div className="main-container w-full flex items-center justify-center">
          <div className="flex items-center  flex-col sign-container border-2 rounded-lg border-emerald-500 shadow-2xl bg-slate-100 h-3/5 w-96 ">
            <div className=" text-4xl p-8 text-emerald-500 font-bold">
              <p>SIGN IN</p>
            </div>
            <div className="h-full text-emerald-500 ">
              <form className="signin-form flex gap-3 flex-col " action=""
              onSubmit={
                (e)=>{
                  
                  e.preventDefault()
                  window.location.href = '/'
                  
                }

              }>
                <div className="flex flex-col">
                  <label className="   font-semibold text-xl" htmlFor="name">
                    Username
                  </label>
                  <input required={true}
                    className="border-2 border-emerald-400 rounded-lg placeholder:text-emerald-500/60 placeholder:font-medium focus:outline-emerald-600 p-2"
                    placeholder="Username"
                    type="text"
                    id="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-xl" htmlFor="email">
                    Email Direction
                  </label>
                  <input required={true}
                    className="border-2 border-emerald-400 rounded-lg placeholder:text-emerald-500/60 placeholder:font-medium focus:outline-emerald-600 p-2"
                    placeholder="Email"
                    type="email"
                    id="email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-xl" htmlFor="password">
                    Passowrd
                  </label>
                  <input required={true}
                    placeholder="Password"
                    className="border-2 border-emerald-400 rounded-lg placeholder:text-emerald-500/60 placeholder:font-medium focus:outline-emerald-600 p-2"
                    type="password"
                    id="password"
                  />
                </div>
                <button type="submit" className="border-2 shadow-sm transition text-xl font-bold  border-white rounded-lg text-white bg-emerald-500 p-3 hover:bg-white hover:border-emerald-500 hover:text-emerald-500 mt-6 ">
                  SIGN IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SignIn;
