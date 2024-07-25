import axios from "axios";
import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Toaster, toast } from 'react-hot-toast';


export default function Signup() {
  const [data, setData] = useState({
    Username: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState({
  });
  
  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  
  const handleOnFocus = () => {
    setFormError({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!data.Username && !data.email) {
      errors.Username = "Please fill out this field"; 
    } else {
      if (!data.Username) {
        errors.Username = "Please fill out this field";
      }

      if (!data.email) {
        errors.email = "Please fill out this field";
      }
    }

    setFormError(errors);

    if (Object.keys(errors).length === 0) {
      axios.post("http://localhost:8081/api/signup", data)
        .then((res) => {
          toast.success("Message sent successful");
        })
        .catch((err) => {
          if (err.response && err.response.status === 409) {
            toast.error("Email already used");
          } else {
            console.log(err);
            toast.error("An error occurred. Please try again.");
          }
        });
    }
  };
  return (
    <>
    <div className="contact flex justify-center items-center p-3 mt-36 h-screen relative">
<div className="contactus bg-[#F1F0FE] p-20 rounded-r-full justify-center relative z-10 w-[60%] h-[600px]  mr-auto">
  <div className="details ">
    <h6 className="text-sm text-[#7a6ad8] font-semibold"> CONTACT US</h6>
    <h2 className="text-4xl font-semibold w-[65%] mt-4">Feel free to contact us anytime</h2>
    <p className="mt-12 text-sm text-[#4a4a4a] w-[65%]">
    Thank you for choosing our templates. We provide you best CSS templates at absolutely 100% free of charge. You may support us by sharing our website to your friends.
    </p>
  </div>
  

   <div className="special-offer mt-12 bg-white rounded-3xl h-[100px] w-[65%] pt-[30px] pr-[30px] flex justify-between items-center relative">
      <div className="flex flex-col items-center w-full">
        <div className="text-center mb-6">
          <p className="offer">OFF
          <br />
          <h4 className="text-2xl font-semibold">50%</h4>
          </p>
          <div className="flex justify-center w-full">
            <h6 className="text-sm">VALID:</h6>
            <h6 className="text-sm text-[#7a6ad8] font-bold ml-1">24 APRIL 2036</h6>
          </div>
          <h4 className="font-bold mt-1 w-full text-xl ml-7">Special Offer <span className="text-[#7a6ad8] font-bold text-xl">50%</span> OFF!</h4>
        </div>
      </div>
      <div className="">
        <IoIosArrowForward className="h-10 w-10 p-2 mb-10  text-white rounded-full bg-[#7a6ad8] text-sm " />
      </div>
    </div>
</div>


<Toaster />

<div className="form bg-[#7A6AD8] text-white p-8 rounded-3xl ml-96 w-[45%]  absolute h-[500px] z-50">
  <form onSubmit={handleSubmit} className="">
    <div className="relative">
      <input type="text"
      placeholder="Your Name..."
      name="Username"
      className="name"
      value={data.Username}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      />
     {formError.Username && (
            <div className="error-box">
              <span className="error-message">{formError.Username}</span>
            </div>
          )}
    </div>

    <div className="relative">
      <input type="text" 
      placeholder="Your Email..."
      name="email"
      className="email"
      value={data.email}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      />
{formError.email && (
            <div className="error-box">
              <span className="error-message">{formError.email}</span>
            </div>
          )}
    </div>

    <div>
      <textarea type="text" 
      placeholder="Your Message"
      className="message "
      name="message"
      value={data.message}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      />
    </div>
    <div>
      <button type="submit" className="send">Send Message Now</button>
    </div>
  </form>
</div>
</div>
    </>
  )
}
