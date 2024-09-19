// Import Components
import Image from "next/image";
import Button from "@/components/button/button";
// Import Images
import screens from "media/creative-copywriting/services/screens.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:pb-20 lg:pt-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Best Copywriters For Hire</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">
                            We Write Copy That Captivates, Persuades, & Converts.
                        </h2>
                        <p className="text-base text-black font-normal lg:w-[70%] m-auto">Hiring our copywriting company is your gateway to boosting your brand's visibility with captivating content that delivers real, tangible results. Start benefiting from the magic of compelling storytelling today.</p>
                    </div>
                    <Image src={screens} alt="screens" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#768DF1] text-white"
                            hover="hover:bg-[#000000]"
                            link="javascript:$zopim.livechat.window.show();" />
                        <Button text="(855) 888-8399"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#768DF1]"
                            hover="hover:bg-[#768DF1] hover:text-white"
                            link="tel:(855)888-8399" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;