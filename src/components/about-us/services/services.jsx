// Import Components
import Image from "next/image";
import Button from "@/components/button/button";
// Import Images
import peoples from "media/about-us/services/peoples.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:pt-20 pb-28">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Designing Dreams</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">
                            Redefining Web Design & Development Standards
                        </h2>
                        <p className="text-base text-black font-normal lg:w-[70%] m-auto">At Web Design Hub, our expertise goes beyond web design. We excel in crafting captivating custom logos, illustrations, and dynamic motion graphics, enhancing your brand's visual appeal and impact.</p>
                    </div>
                    <Image src={peoples} alt="peoples" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#7337BB] text-white"
                            hover="hover:bg-[#000000]"
                            link="javascript:$zopim.livechat.window.show();" />
                        <Button text="(855) 888-8399"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#7337BB]"
                            hover="hover:bg-[#7337BB] hover:text-white"
                            link="tel:(855)888-8399" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;