import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Signup() {
  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div  className="w-[500px]">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="text-lg font-bold">Sign up</h3>
            {/* NAME */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Fullname"
                className="px-3 py-1 rounded-md outline-none w-80"
              />
            </div>
            {/* EMAIL */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="px-3 py-1 rounded-md outline-none w-80"
              />
            </div>

            {/* PASSWORD */}
            <div className="mt-6 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="px-3 py-1 rounded-md outline-none w-80"
              />
            </div>

            {/* BUTTON */}
            <div className="flex justify-around mt-4">
              <button className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">
                Sign up{" "}
              </button>
              <p className="text-xl ">
                 Have an account?{" "}
                <button
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login/>

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
