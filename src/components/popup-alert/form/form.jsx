"use client";
// import Input from "C/Input";
// import Button from "C/Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";

//
import bellIcon from "public/popup/bell-icon.png";
import Image from "next/image";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "From Black Friday",
    services: "Not Selected",
    pageURL: usePathname(),
  });
  const [formStatus, setFormStatus] = useState("Claim Now!");
  const [errors, setErrors] = useState({});
  const formValidateHandle = () => {
    let errors = {};
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.match(emailRegex)) {
      errors.email = "Valid email is required";
    }
    // Phone validation
    const phoneRegex = /[0-9]/i;
    if (!data.phone.match(phoneRegex)) {
      errors.phone = "Valid phone is required";
    }
    return errors;
  };
  const handleDataChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Processing...");

    const errors = formValidateHandle();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let bodyContent = data;
      let reqOptions = {
        url: "/api/email",
        method: "POST",
        headers: headersList,
        data: JSON.stringify(bodyContent),
      };
      await Axios.request(reqOptions);
      setFormStatus("Submit Form");
      window.location.href = "/thank-you";
    } else {
      setFormStatus("Failed...");
    }
  };
  return (
    <div className="mt-5 w-[80%] mx-auto">
      <form action="javascript:;">
        <div className="flex items-center space-x-4">
          <div className="basis-1/2">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="peer w-full h-full text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-2 placeholder-shown:border-2 placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 bg-[#06050538] text-sm px-3 py-3 rounded-md border-white focus:border-white backdrop-blur-sm"
              onChange={handleDataChange}
            />
            {errors.email && (
              <span className="text-[12px] block p-2 font-medium text-red-600">
                {errors.email}
              </span>
            )}
          </div>
          <div className="basis-1/2">
            <input
              type="tel"
              placeholder="Your Number"
              name="phone"
              className="peer w-full h-full text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-2 placeholder-shown:border-2 placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 bg-[#06050538] text-sm px-3 py-3 rounded-md border-white focus:border-white backdrop-blur-sm"
              onChange={handleDataChange}
            />
            {errors.phone && (
              <span className="text-[12px] block p-2 font-medium text-red-600">
                {errors.phone}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="font-megat bg-white rounded-md text-black w-[200px] h-[48px] text-[20px] mt-8 mx-auto flex items-center justify-center gap-4 hover:bg-[#222222ad] hover:transition-all ease-in-out  hover:ease-in-out hover:duration-700 duration-700 hover:text-white"
        >
          <span className="inline">
            <Image src={bellIcon} alt="Bell-icon" />
          </span>
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default Form;
