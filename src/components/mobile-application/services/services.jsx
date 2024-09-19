// Import Components
import Image from "next/image";
import Button from "@/components/button/button";
// Import Images
import screens from "media/mobile-application/services/screens.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:py-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Mobile App Development</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">
                            Agile Mobile Application Development & <br /> Design Company
                        </h2>
                        <p className="text-base text-black font-normal">At Web Design Hub, our app developers utilize an Agile approach to build mobile apps through close collaboration with our clients, <br /> ensuring timely delivery of the mobile app design and prototype, while constantly improving the development process.</p>
                    </div>
                    <Image src={screens} alt="screens" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#7AAF60] text-white"
                            hover="hover:bg-[#000000]"
                            link="javascript:$zopim.livechat.window.show();" />
                        <Button text="(855) 888-8399"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#7AAF60]"
                            hover="hover:bg-[#7AAF60] hover:text-white"
                            link="tel:(855)888-8399" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;