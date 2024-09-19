"use client"
// Import Components
import Button from "@/components/button/button";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:pb-20 lg:pt-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">SEO Services Company</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">
                        Hire Our SEO Pros & Watch Your Rankings Grow
                        </h2>
                        <p className="text-base text-black font-normal lg:w-[70%] m-auto">Ready to witness your rankings skyrocket? When you hire our SEO company, you're not just getting results – you're investing in a proven path to online excellence.</p>
                    </div>
                    <video src="videos/seoServices.mp4" autoPlay loop muted controls={false} ></video>
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#577981] text-white"
                            hover="hover:bg-[#000000]"
                            link="javascript:$zopim.livechat.window.show();" />
                        <Button text="(855) 888-8399"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#577981]"
                            hover="hover:bg-[#577981] hover:text-white"
                            link="tel:(855)888-8399" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;