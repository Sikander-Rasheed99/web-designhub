// Import Components
import Image from "next/image";
import Button from "@/components/button/button";
// Import Images
import stationary from "media/marketing-collateral/services/stationary.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:py-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">We Provide Content that Converts</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">
                            Engage Your Audience with Marketing Collateral
                        </h2>
                        <p className="text-base text-black font-normal lg:w-[70%] m-auto">We write content that transforms visitors into loyal customers. Our marketing collateral solutions are designed to engage your audience and drive conversions on your website.</p>
                    </div>
                    <Image src={stationary} alt="stationary" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#223C5A] text-white"
                            hover="hover:bg-[#000000]"
                            link="javascript:$zopim.livechat.window.show();" />
                        <Button text="(855) 888-8399"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#223C5A]"
                            hover="hover:bg-[#223C5A] hover:text-white"
                            link="tel:(855)888-8399" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;