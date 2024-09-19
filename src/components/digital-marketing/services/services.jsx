// Import Components
import Image from "next/image";
import Button from "@/components/button/button";
// Import Images
import services from "media/digital-marketing/services/services.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:pb-20 lg:pt-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Your Brand, Your Rules</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">
                            Customized Digital Marketing Services for You
                        </h2>
                        <p className="text-base text-black font-normal lg:w-[70%] m-auto">Our marketing team at Web Design Hub creates a digital marketing strategy that is completely unique and customized for your business. If you are ready for the digital revolution, let's kickstart the journey today!</p>
                    </div>
                    <Image src={services} alt="services" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#8A6EA5] text-white"
                            hover="hover:bg-[#000000]"
                            link="javascript:$zopim.livechat.window.show();" />
                        <Button text="(855) 888-8399"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#8A6EA5]"
                            hover="hover:bg-[#8A6EA5] hover:text-white"
                            link="tel:(855)888-8399" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;