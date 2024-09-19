"use client"
// Import Components
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Import Images
// Portfolios
// All
import allOne from "media/landing-pages/website-design-develop/portfolios/all/one.png";
import allTwo from "media/landing-pages/website-design-develop/portfolios/all/two.png";
import allThree from "media/landing-pages/website-design-develop/portfolios/all/three.png";
import allFour from "media/landing-pages/website-design-develop/portfolios/all/four.png";
// E-Commerce 
import ecommerceOne from "media/landing-pages/website-design-develop/portfolios/ecommerce/one.png";
import ecommerceTwo from "media/landing-pages/website-design-develop/portfolios/ecommerce/two.png";
import ecommerceThree from "media/landing-pages/website-design-develop/portfolios/ecommerce/three.png";
import ecommerceFour from "media/landing-pages/website-design-develop/portfolios/ecommerce/four.png";
// Fashion 
import fashionOne from "media/landing-pages/website-design-develop/portfolios/fashion/one.png";
import fashionTwo from "media/landing-pages/website-design-develop/portfolios/fashion/two.png";
import fashionThree from "media/landing-pages/website-design-develop/portfolios/fashion/three.png";
import fashionFour from "media/landing-pages/website-design-develop/portfolios/fashion/four.png";
// Food 
import foodOne from "media/landing-pages/website-design-develop/portfolios/food/one.png";
import foodTwo from "media/landing-pages/website-design-develop/portfolios/food/two.png";
import foodThree from "media/landing-pages/website-design-develop/portfolios/food/three.png";
import foodFour from "media/landing-pages/website-design-develop/portfolios/food/four.png";
// Real Estate 
import realestateOne from "media/landing-pages/website-design-develop/portfolios/realestate/one.png";
import realestateTwo from "media/landing-pages/website-design-develop/portfolios/realestate/two.png";
import realestateThree from "media/landing-pages/website-design-develop/portfolios/realestate/three.png";
import realestateFour from "media/landing-pages/website-design-develop/portfolios/realestate/four.png";
// Automotive 
import automotiveOne from "media/landing-pages/website-design-develop/portfolios/automotive/one.png";
import automotiveTwo from "media/landing-pages/website-design-develop/portfolios/automotive/two.png";
import automotiveThree from "media/landing-pages/website-design-develop/portfolios/automotive/three.png";
import automotiveFour from "media/landing-pages/website-design-develop/portfolios/automotive/four.png";

const Portfolios = () => {
    // Portfolios
    const [activePortfolio, setActivePortfolio] = useState("all");
    const portfolioData = [
        {
            value: "all",
            label: "All Portfolio",
            desc: "All Portfolio",
            images: [ecommerceOne, fashionTwo, foodThree, realestateThree],
            links: [
                "https://lusetabeauty.com/",
                "https://www.garanimals.com/",
                "https://apf.lv/en",
                "https://eco-smarthouse.tilda.ws/",
            ]
        },
        {
            value: "ecommerce",
            label: "E-Commerce",
            desc: "E-Commerce",
            images: [ecommerceOne, ecommerceTwo, ecommerceThree, ecommerceFour],
            links: [
                "https://lusetabeauty.com/",
                "https://hellovisionist.com/",
                "https://fableandmane.com/",
                "https://www.holistic.se/",
            ]
        },
        {
            value: "fashion",
            label: "Fashion",
            desc: "Fashion",
            images: [fashionOne, fashionTwo, fashionThree, fashionFour],
            links: [
                "https://www.ammaranyc.com/",
                "https://www.garanimals.com/",
                "https://shoprevelry.com/",
                "https://www.kitandace.com/",
            ]
        },
        {
            value: "food",
            label: "Food",
            desc: "Food",
            images: [foodOne, foodTwo, foodThree, foodFour],
            links: [
                "https://www.mezzetta.com/",
                "https://rosymonde.fr/",
                "https://apf.lv/en",
                "https://bavet.eu/",
            ]
        },
        {
            value: "real-estate",
            label: "Real Estate",
            desc: "Real Estate",
            images: [realestateOne, realestateTwo, realestateThree, realestateFour],
            links: [
                "https://www.weave-living.com/en/hk",
                "https://www.dager.bg/en/home",
                "https://eco-smarthouse.tilda.ws/",
                "https://www.aspenhomes.com/",
            ]
        },
        {
            value: "automotive",
            label: "Automotive",
            desc: "Automotive",
            images: [automotiveOne, automotiveTwo, automotiveThree, automotiveFour],
            links: [
                "https://heartwoodresort.com/",
                "https://www.sbdautomotive.com/",
                "https://www.voss-automotive.net/",
                "https://cardealer.potenzaglobalsolutions.com/",
            ]
        }
    ]
    return (
        <section>
            <div className="bg-[#E9E9E9] py-[100px] mt-[100px]" id="Portfolios">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-black font-megat font-normal mb-3">
                            Explore Our Collection of Web <br /> <span className="text-[#f17724]"> Design & Development</span> Projects!
                        </h2>
                        <p className="text-sm md:text-base text-[#202020] font-normal">
                            View Our Distinct Portfolio Of Websites We Have Designed And Developed For Our Clients. <br />
                            We Enabled Their Distinctive Idea Which Suits Their Website Requirements.
                        </p>
                    </div>
                    <Tabs value={activePortfolio}>
                        <TabsHeader indicatorProps={{ className: "hidden" }} className="bg-transparent p-0 flex justify-center gap-3 md:gap-0 flex-wrap md:flex-nowrap md:justify-between">
                            {
                                portfolioData.map(({ value, label }) => {
                                    return (
                                        <Tab value={value} key={value} onClick={() => setActivePortfolio(value)}
                                            className={`${activePortfolio === value ? "text-white border-[#0d3163] bg-[#0d3163]" : "border-[#707070]"} border-2 font-sans font-medium text-base rounded-[50px] w-max lg:w-[150px] xl:w-[200px] py-[0.5rem] px-[0.8rem] lg:px-0 hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white`}>
                                            {label}
                                        </Tab>
                                    );
                                })
                            }
                        </TabsHeader>
                        <TabsBody>
                            {
                                portfolioData.map(({ value, images, links }) => {
                                    return (
                                        <TabPanel value={value} key={value} className="p-0">
                                            <div className="grid grid-cols-2 gap-x-5 gap-y-5 mt-10">
                                                <div className="col-span-2 md:col-span-1">
                                                    <div className="rounded-[10px] mb-5 h-[300px] lg:h-[400px] xl:h-[600px] overflow-hidden group relative">
                                                        <Link href={links[0]} target="_blank" rel="nofollow">
                                                            <Image src={images[0]} alt="" className="rounded-[10px] w-full" />
                                                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-50">
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="rounded-[10px] h-[200px] lg:h-[250px] xl:h-[400px] overflow-hidden group relative">
                                                        <Link href={links[1]} target="_blank" rel="nofollow">
                                                            <Image src={images[1]} alt="" className="rounded-[10px] w-full" />
                                                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-50">
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 md:col-span-1">
                                                    <div className="rounded-[10px] h-[520px] lg:h-[670px] xl:h-[1020px] overflow-hidden group relative">
                                                        <Link href={links[2]} target="_blank" rel="nofollow">
                                                            <Image src={images[2]} alt="" className="rounded-[10px] w-full" />
                                                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-50">
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="rounded-[10px] h-[150px] lg:h-[400px] xl:h-[600px] overflow-hidden group relative">
                                                        <Link href={links[3]} target="_blank" rel="nofollow">
                                                            <Image src={images[3]} alt="" className="rounded-[10px] w-full" />
                                                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-50">
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    );
                                })
                            }
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

export default Portfolios;