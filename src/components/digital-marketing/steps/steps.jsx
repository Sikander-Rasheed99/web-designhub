// Import Components
import Image from "next/image";
// Import Images
import one from "media/digital-marketing/steps/one.png";
import two from "media/digital-marketing/steps/two.png";
import three from "media/digital-marketing/steps/three.png";
import four from "media/digital-marketing/steps/four.png";

const Steps = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:py-20">
                <div className="container">
                    <div className="text-center mb-5 lg:mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Digital Marketing Experts</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black">
                            We're Here to Acquire Results You Require
                        </h2>
                    </div>
                    <div className="flex lg:gap-2 xl:gap-4 flex-wrap lg:flex-nowrap justify-between gap-y-4">
                        <div className="basis-full md:basis-[49%] lg:basis-1/4 bg-white shadow-md p-4 lg:p-2 xl:p-4 rounded-xl">
                            <div className="text-center">
                                <p className="text-black text-base font-light">Our SEO experts optimize your website to rank higher on search engines, driving organic traffic and ensuring your website is discoverable by your target audience.</p>
                                <span className="block h-[1px] bg-[#707070] w-[80%] m-auto mt-3 mb-3"></span>
                                <h3 className="font-semibold text-lg xl:text-lg text-black mb-3">Search Engine Optimization</h3>
                                <Image src={one} alt="one" className="inline-block" />
                            </div>
                        </div>
                        <div className="basis-full md:basis-[49%] lg:basis-1/4 bg-white shadow-md p-4 lg:p-2 xl:p-4 rounded-xl">
                            <div className="text-center">
                                <Image src={two} alt="two" className="inline-block" />
                                <h3 className="font-semibold text-lg xl:text-lg text-black mt-3">Content Marketing</h3>
                                <span className="block h-[1px] bg-[#707070] w-[80%] m-auto mt-3 mb-3"></span>
                                <p className="text-black text-base font-light">Our content writers craft compelling narratives that resonate with your audience, driving engagement, trust, and conversions, all while establishing your authority in your industry.</p>
                            </div>
                        </div>
                        <div className="basis-full md:basis-[49%] lg:basis-1/4 bg-white shadow-md p-4 lg:p-2 xl:p-4 rounded-xl">
                            <div className="text-center">
                                <p className="text-black text-base font-light">Through dynamic social strategies, we connect your brand with your audience, boosting engagements, and recognition. We focus on constant growth, from content to community management.</p>
                                <span className="block h-[1px] bg-[#707070] w-[80%] m-auto mt-3 mb-3"></span>
                                <h3 className="font-semibold text-lg xl:text-lg text-black mb-3">Social Media Marketing</h3>
                                <Image src={three} alt="three" className="inline-block" />
                            </div>
                        </div>
                        <div className="basis-full md:basis-[49%] lg:basis-1/4 bg-white shadow-md p-4 lg:p-2 xl:p-4 rounded-xl">
                            <div className="text-center">
                                <Image src={four} alt="four" className="inline-block" />
                                <h3 className="font-semibold text-lg xl:text-lg text-black mt-3">Pay Per Click Advertising</h3>
                                <span className="block h-[1px] bg-[#707070] w-[80%] m-auto mt-3 mb-3"></span>
                                <p className="text-black text-base font-light">With precision PPC, we elevate your brand to the search forefront and digital platforms, delivering immediate, cost-effective results. Your success is our priority.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Steps;