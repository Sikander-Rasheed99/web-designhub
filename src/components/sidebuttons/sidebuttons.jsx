"use client"
// Import Components
import Image from "next/image";
import Link from "next/link";
import { Input, ThemeProvider } from "@material-tailwind/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";
// Import Images
import chat from "media/chatIcon.svg";
import call from "media/callIcon.svg";

const Sidebuttons = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        services: "Not Selected",
        pageURL: usePathname()
    });
    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const [formStatus, setFormStatus] = useState("Submit Form");
    const [errors, setErrors] = useState({});
    const formValidateHandle = () => {
        let errors = {};
        // Name validation
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = 'Valid email is required';
        }
        // Phone validation
        const phoneRegex = /[0-9]/i;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = 'Valid phone is required';
        }
        return errors;
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");

        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let bodyContent = data;
            let reqOptions = {
                url: "/api/email",
                method: "POST",
                headers: headersList,
                data: JSON.stringify(bodyContent),
            }
            await Axios.request(reqOptions);
            setFormStatus("Submit Form");
            window.location.href = "/thank-you";
        } else {
            setFormStatus("Failed...");
        }
    }
    const theme = {
        input: {
            defaultProps: {
                color: "white",
                size: "lg",
                variant: "outlined",
            },
            styles: {
                variants: {
                    outlined: {
                        base: {
                            input: {
                                borderWidth: "border-2 placeholder-shown:border-2",
                                borderColor: "placeholder-shown:border-white placeholder-shown:border-t-white",
                                floated: {
                                    borderWidth: "border-2 focus:border-2",
                                    borderColor: "border-t-transparent focus:border-t-transparent",
                                },
                                bg: "bg-[#06050538]"
                            },
                            label: {
                                before: {
                                    floated: {
                                        bt: "before:border-t-2 peer-focus:before:border-t-2",
                                        bl: "before:border-l-2 peer-focus:before:border-l-2",
                                    },
                                },
                                after: {
                                    floated: {
                                        bt: "after:border-t-2 peer-focus:after:border-t-2",
                                        br: "after:border-r-2 peer-focus:after:border-r-2",
                                    },
                                },
                            },
                        }
                    }
                }
            }
        }
    }
    return (
        // <div className="fixed right-0 bottom-0 top-0 z-50 gap-y-4 hidden lg:flex flex-col justify-center w-[245px]">
        <>
            <Link href="javascript:$zopim.livechat.window.show();" className="cursor-pointer hidden lg:flex items-center rounded-tl-[50px] rounded-bl-[50px] py-2 px-4 gap-4 translate-x-[75%] hover:translate-x-[1%] bg-[#0F2847] fixed top-[23%] right-0 z-50">
                <Image src={chat} alt="chat" />
                <span className="text-white font-semibold text-lg block" href="#">Start Live Chat</span>
            </Link>
            <Link href="tel:(855)888-8399" className="cursor-pointer hidden lg:flex items-center rounded-tl-[50px] rounded-bl-[50px] py-2 px-4 gap-4 translate-x-[75%] hover:translate-x-[1%] bg-[#0F2847] fixed top-[33%] right-0 z-50">
                <Image src={call} alt="call" />
                <span className="text-white font-semibold text-lg">(855) 888-8399</span>
            </Link>
            <div className="cursor-pointer hidden lg:flex items-center translate-x-[100%] hover:translate-x-[1%] fixed top-[43%] right-0 z-50">
                <span className="text-white font-normal text-lg bg-[#0F2847] tracking-wide rotate-[-90deg] absolute top-[45%] left-[-137px] rounded-tr-[30px] rounded-tl-[30px] py-2 px-3 ">60% off on all services</span>
                <ThemeProvider value={theme}>
                    <form className="w-[400px] p-4 bg-black" autoComplete="off">
                        <div className="mb-2">
                            <Input label="Name" type="text" onChange={handleDataChange} name="name" />
                            {
                                errors.name && <span className="text-[12px] block p-2 font-medium text-red-600">
                                    {errors.name}
                                </span>
                            }
                        </div>
                        <div className="mb-2">
                            <Input label="Telephone Number" type="tel" onChange={handleDataChange} name="phone" />
                            {
                                errors.phone && <span className="text-[12px] block p-2 font-medium text-red-600">
                                    {errors.phone}
                                </span>
                            }
                        </div>
                        <div className="mb-2">
                            <Input label="Email" type="email" onChange={handleDataChange} name="email" />
                            {
                                errors.email && <span className="text-[12px] block p-2 font-medium text-red-600">
                                    {errors.email}
                                </span>
                            }
                        </div>
                        <div className="mb-2">
                            <Input label="leave your message" type="text" onChange={handleDataChange} name="message" />
                        </div>
                        <input type="button" onClick={handleFormSubmit} className="cursor-pointer  text-lg font-medium pr-8 pl-8 h-11 rounded-md bg-[#A497F5] w-full text-white hover:bg-[#C165CB]" value={formStatus} />
                    </form>
                </ThemeProvider>
            </div>
        </>
    );
}

export default Sidebuttons;