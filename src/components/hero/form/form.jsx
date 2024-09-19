"use client"
// Import Components
import { Input, Option, Select, Textarea, ThemeProvider } from "@material-tailwind/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";

const From = () => {
    const [selectedService, setSelectedService] = useState("Not Selected");
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        services: selectedService,
        pageURL: usePathname()
    });
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
    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const handleSelectServices = (e) => {
        setSelectedService(e);
    }
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

            let bodyContent = { ...data, services: selectedService };
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
        },
        select: {
            defaultProps: {
                variant: "outlined",
                size: "lg",
                color: "white", // Black is not available thts's why i use blue to override black
            },
            styles: {
                base: {
                    select: {
                        color: "text-white",
                    },
                    arrow: {
                        initial: {
                            color: "text-white",
                        },
                    },
                },
                variants: {
                    outlined: {
                        colors: {
                            select: {
                                blue: {
                                    close: {
                                        borderColor: "border-white",
                                        // bg: "bg-[#06050538]"
                                    },
                                    open: {
                                        borderColor: "border-white",
                                        borderTopColor: "border-t-transparent",
                                        // bg: "bg-[#06050538]"
                                    },
                                    withValue: {
                                        borderColor: "border-white",
                                        borderTopColor: "border-t-transparent",
                                        // bg: "bg-[#06050538]"
                                    },
                                },
                            },
                            label: {
                                blue: {
                                    close: {
                                        color: "text-white",
                                        before: "before:border-transparent",
                                        after: "after:border-transparent",
                                    },
                                    open: {
                                        color: "text-white",
                                        before: "before:border-white",
                                        after: "after:border-white",
                                    },
                                    withValue: {
                                        color: "text-white",
                                        before: "before:border-white",
                                        after: "after:border-white",
                                    },
                                },
                            }
                        },
                        states: {
                            close: {
                                select: {
                                    borderWidth: "border-2",
                                },
                            },
                            withValue: {
                                select: {
                                    borderWidth: "border-2",
                                },
                                label: {
                                    fontSize: "text-[11px]",
                                    disabled: "peer-disabled:text-transparent",
                                    before: {
                                        bt: "before:border-t-2",
                                        bl: "before:border-l-2",
                                    },
                                    after: {
                                        bt: "after:border-t-2",
                                        br: "after:border-r-2",
                                    },
                                },
                            },
                        }
                    }
                }
            }
        },
        textarea: {
            defaultProps: {
                variant: "outlined",
                size: "",
                color: "blue", // Black is not available thts's why i use blue to override black
            },
            styles: {
                base: {
                    textarea: {

                    }
                },
                variants: {
                    outlined: {
                        base: {
                            textarea: {
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
                        },
                        colors: {
                            textarea: {
                                blue: {
                                    color: "text-white",
                                    borderColor: "border-white",
                                    borderColorFocused: "focus:border-white",
                                },
                            },
                            label: {
                                blue: {
                                    color: "!text-white peer-focus:white",
                                    after: "after:border-white peer-focus:after:border-white",
                                    before: "before:border-white peer-focus:before:border-white",
                                },
                            }
                        }
                    }
                }
            }
        }
    }
    return (
        <ThemeProvider value={theme}>
            <div className="lg:absolute lg:top-[95%] lg:left-0 lg:right-0 z-10 pb-10 lg:pb-0">
                <div className="container">
                    <div className="bg-[#0000006b] backdrop-blur-sm py-10 md:p-10 rounded-[50px] brightness-[-4]">
                        <form autoComplete="off">
                            <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row lg:gap-5 mb-3 w-[90%] lg:w-full m-auto">
                                <div className="basis-full lg:basis-1/3">
                                    <Input label="Name" type="text" name="name" onChange={handleDataChange} className="backdrop-blur-sm" />
                                    {
                                        errors.name && <span className="text-[12px] block p-2 font-medium text-red-600">
                                            {errors.name}
                                        </span>
                                    }
                                </div>
                                <div className="basis-full lg:basis-1/3">
                                    <Input label="Telephone Number" type="tel" name="phone" onChange={handleDataChange} className="backdrop-blur-sm" />
                                    {
                                        errors.phone && <span className="text-[12px] block p-2 font-medium text-red-600">
                                            {errors.phone}
                                        </span>
                                    }
                                </div>
                                <div className="basis-full lg:basis-1/3">
                                    <Input label="Email" type="email" name="email" onChange={handleDataChange} className="backdrop-blur-sm" />
                                    {
                                        errors.email && <span className="text-[12px] block p-2 font-medium text-red-600">
                                            {errors.email}
                                        </span>
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:gap-5 gap-y-3 lg:gap-y-0 w-[90%] lg:w-full m-auto">
                                <div className="basis-full lg:basis-1/3">
                                    <Select label="You're Interested in" className="backdrop-blur-sm" onChange={handleSelectServices}>
                                        <Option value="SEO">SEO</Option>
                                        <Option value="PPC Marketing">PPC Marketing</Option>
                                        <Option value="Social Media Management">Social Media Management</Option>
                                        <Option value="Reputation Management">Reputation Management</Option>
                                        <Option value="Content Marketing">Content Marketing</Option>
                                        <Option value="Web Design Development">Web Design Development</Option>
                                        <Option value="Other">Other</Option>
                                    </Select>
                                </div>
                                <div className="basis-full lg:basis-1/3">
                                    <Textarea label="leave your message" onChange={handleDataChange} variant="outlined" size="lg" name="message" rows={1} className="min-h-full backdrop-blur-sm" />
                                </div>
                                <div className="basis-full lg:basis-1/3">
                                    <input type="button" onClick={handleFormSubmit} className="text-sm sm:text-lg font-medium pr-8 pl-8 h-11 rounded-md bg-[#0F2847] w-full text-white cursor-pointer" value={formStatus} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default From;