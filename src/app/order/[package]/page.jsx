"use client"
// Import Components
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Axios from "axios";
import { usePathname, useSearchParams } from 'next/navigation'
import { useState } from "react";
import Image from "next/image";
// Import Packages
import packagesData from "@/components/pricingAndPackages/data";
// Import Images
import checkCircle from "media/packages/checkCircle.png";
import { Checkbox } from "@material-tailwind/react";

const Package = ({ params }) => {
    // Array for Services Component Props
    const logoTypesCheckboxArray = [
        {
            value: "2d",
            label: "2D",
            image: "/logo-design/services/2d/1.png",
        },
        {
            value: "3d",
            label: "3D",
            image: "/logo-design/services/3d/1.png",
        },
        {
            value: "emblem",
            label: "Emblem",
            image: "/logo-design/services/emblem/1.jpg",
        },
        {
            value: "illustrative",
            label: "Illustrative",
            image: "/logo-design/services/illustrative/1.jpg",
        },
        {
            value: "letter",
            label: "Letter",
            image: "/logo-design/services/letter/1.jpg"
        },
        {
            value: "mascot",
            label: "Mascot",
            image: "/logo-design/services/mascot/1.png"
        },
        {
            value: "wordmark",
            label: "Wordmark",
            image: "/logo-design/services/wordmark/1.png"
        }
    ];
    const searchParams = useSearchParams();
    const value = searchParams.get('value');
    const label = searchParams.get('label');
    const id = searchParams.get('id');
    let selectedPackages = packagesData.filter(function (e) {
        return e.value == value;
    });
    // File Uploading
    const [file, setFile] = useState(false);
    // Form Data With Validations
    const [fieldsData, setFieldsData] = useState({
        customer_name: "",
        customer_email: "",
        customer_phone: "",
        package_name: selectedPackages[0].label + " - " + selectedPackages[0].packages[id].name,
        package_price: selectedPackages[0].packages[id].discountedPrice,
        logo_name: null,
        logo_solgan: null,
        client_refernce: null,
        logo_color_reference: null,
        logo_type: [],
        logo_description: null,
        ifLogo: false
    });
    const fieldsChangeHandler = (e) => {
        if (e.target.name === "logo_type") {
            let copy = { ...fieldsData };
            if (e.target.checked) {
                copy.logo_type.push(e.target.value);
            }
            setFieldsData(copy);
        } else {
            setFieldsData(() => ({
                ...fieldsData,
                [e.target.name]: e.target.value
            }))
        }
        if (fieldsData.logo_name !== null) {
            fieldsData.ifLogo = true;
        }

    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            const fileData = new FormData();
            fileData.set("file", file);
            let data = null;
            await Axios.post('/api/upload', fileData).then(function (response) {
                data = JSON.stringify({ ...fieldsData, client_refernce: response.data.image });
            });
            let reqOptions = {
                url: "https://brandsapi.cryscampus.com/public/api/getfields",
                method: "POST",
                data: data,
            }
            let responseFinal = await Axios.request(reqOptions);
            console.log(responseFinal.data);
        } else {
            let data = JSON.stringify(fieldsData);

            let reqOptions = {
                url: "https://brandsapi.cryscampus.com/public/api/getfields",
                method: "POST",
                data: data,
            }
            let responseFinal = await Axios.request(reqOptions);
            console.log(responseFinal.data);
        }
    }
    return (
        <main>
            <Header />
            <section>
                <div className="__homeHeroGradientBg pt-[150px] pb-[50px] relative z-[1]">
                    <div className="container">
                        {value == 'logo' && <>
                            <h1 className="text-4xl xl:text-6xl font-sans text-white font-bold leading-none text-center mb-3">
                                Order Now!
                            </h1>
                            <p className="text-sm sm:text-base xl:text-lg font-normal leading-none text-center text-white mb-3">
                                Submit Your Detailed Order Below
                            </p>
                            <h3 className="text-4xl font-sans text-[#be9ae9] font-bold leading-none text-center mb-5">
                                {label}
                            </h3>
                        </>}
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 items-center`}>
                            <div>
                                {value !== 'logo' && <>
                                    <h1 className="text-4xl xl:text-6xl font-sans text-white font-bold leading-none mb-3">
                                        Order Now!
                                    </h1>
                                    <p className="text-sm sm:text-base xl:text-lg font-normal leading-none text-white mb-3">
                                        Submit Your Detailed Order Below
                                    </p>
                                    <h3 className="text-4xl font-sans text-[#be9ae9] font-bold leading-none mb-5">
                                        {label}
                                    </h3>
                                </>}
                                <form autoComplete="off" className={`${value === 'logo' ? 'grid grid-cols-2 gap-5' : 'grid grid-cols-1 gap-5'}`}>
                                    <div>
                                        <input   type="text" placeholder="Full Name*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black placeholder:text[#f17724] ring-2 ring-[#f17724]"
                                            name="customer_name" onChange={fieldsChangeHandler} />
                                    </div>
                                    <div>
                                        <input   type="email" placeholder="Email Address*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black placeholder:text[#f17724] ring-2 ring-[#f17724]"
                                            name="customer_email" onChange={fieldsChangeHandler} />
                                    </div>
                                    <div>
                                        <input   type="tel" placeholder="Phone*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black placeholder:text[#f17724] ring-2 ring-[#f17724]"
                                            name="customer_phone" onChange={fieldsChangeHandler} />
                                    </div>
                                    {value == 'logo' && <div>
                                        <input   type="text" placeholder="Logo Name" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black placeholder:text[#f17724] ring-2 ring-[#f17724]"
                                            name="logo_name" onChange={fieldsChangeHandler} />
                                    </div>}
                                    {value == 'logo' && <div>
                                        <input   type="text" placeholder="Slogan or Tagline" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black placeholder:text[#f17724] ring-2 ring-[#f17724]"
                                            name="logo_solgan" onChange={fieldsChangeHandler} />
                                    </div>}
                                    {value == 'logo' && <div>
                                        <input   type="text" placeholder="Color Reference" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black placeholder:text[#f17724] ring-2 ring-[#f17724]"
                                            name="logo_color_reference" onChange={fieldsChangeHandler} />
                                    </div>}
                                    {value == 'logo' && <div className="col-span-2">
                                        <div className="grid grid-cols-4 gap-5">
                                            {
                                                logoTypesCheckboxArray.map((e, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <Image src={e.image} width={300} height={300} alt={e.label} />
                                                            <div className="flex items-center">
                                                                <Checkbox id={e.value} name="logo_type" value={e.value} color="indigo"
                                                                    onChange={fieldsChangeHandler} />
                                                                <p className="text-base font-normal leading-none text-center text-white">
                                                                    {e.label}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>}
                                    {value == 'logo' && <div className="col-span-2">
                                        <label className="block">
                                            <span className="block text-white font-sans font-medium text-[16px] mb-3">Any Reference ?</span>
                                            <input   type="file" name="file" className="w-full p-3 focus-visible:outline-none text-white ring-2 ring-[#f17724]"
                                                onChange={e => setFile(e.target.files?.[0])} />
                                        </label>
                                    </div>}
                                    {value == 'logo' && <div className="col-span-2">
                                        <textarea placeholder="Logo Description" className="w-full resize-none h-[100px] p-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black placeholder:text[#f17724] ring-2 ring-[#f17724]"
                                            name="logo_description" onChange={fieldsChangeHandler}></textarea>
                                    </div>}
                                    <div>
                                        <input   type="button" className="w-max px-5 h-[40px] bg-[#f17724] text-[#ffffff] text-[18px] font-sans font-semibold ring-2 hover:bg-transparent ring-[#f17724] cursor-pointer" value="Complete" onClick={handleFormSubmit} />
                                    </div>
                                </form>
                            </div>
                            <div>
                                {selectedPackages.map((e, i) => {
                                    return <div key={i} className="shadow-lg bg-[#B8C5FA] p-4 rounded-xl md:w-[75%] m-auto">
                                        <div className="bg-[#665FF3] rounded-xl text-center py-5 shadow-lg">
                                            <h4 className="font-megat font-normal text-white text-3xl">{e.packages[id].name}</h4>
                                        </div>
                                        <p className="text-sm text-black font-normal my-5 leading-[24px] text-center">
                                            {e.packages[id].note}
                                        </p>
                                        <h5 className="font-sans text-center font-bold text-5xl text-black my-10">
                                            {e.packages[id].discountedPrice} <sup className="opacity-50 text-4xl"><del>{e.packages[id].originalPrice}</del></sup>
                                        </h5>
                                        <ul className="overflow-y-auto h-64 mb-5">
                                            {e.packages[id].list.map((e, i) => {
                                                return (
                                                    <li className="text-sm md:text-base text-black font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                        key={i}>
                                                        <Image src={checkCircle} alt="checkCircle" className="mt-1 brightness-0 invert-0" />
                                                        <span>{e}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Package