import React from 'react'
import Navbar from "./Navbar"
import { Link } from "react-router-dom";
import Login from "./Login";

function Contact() {
  return (
    <>
     <div>
    <Navbar/>
    </div>
    <div className="flex items-center justify-center h-screen ">
        <div  className="w-[500px] ">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              
            </form>
            <h3 className="text-3xl font-bold">Contact Us</h3>
            {/* NAME */}
            <div className="mt-4 space-y-2">
              <span className=''>Name</span>
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
              <span>Message</span>
              <br />
              <textarea
                type='text'
                placeholder="Type your message"
                className="h-32 px-3 py-1 rounded-md outline-none w-80"
              />
            </div>

            {/* BUTTON */}
            <div className="flex justify-start mt-9">
              <button type='submit' className="px-3 py-1 text-white duration-200 bg-blue-500 rounded-md hover:bg-blue-700">
                Submit{" "}
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
   
  )
}

export default Contact
