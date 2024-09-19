// Import Components
import Button from "@/components/button/button";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:pb-20 lg:pt-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Motion Graphic Design Company</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">
                            Converting the Ordinary into the Extraordinary
                        </h2>
                        <p className="text-base text-black font-normal lg:w-[70%] m-auto">Our motion graphics designers at Web Design Hub fuse animation, music, and multimedia components into striking visuals. They build captivating narratives that grab attention and have an enduring influence on your audience using creativity as their reference point.</p>
                    </div>
                    <video src="videos/motionGraphicsLaptop.mp4" autoPlay loop muted controls={false}></video>
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#195A47] text-white"
                            hover="hover:bg-[#000000]"
                            link="javascript:$zopim.livechat.window.show();" />
                        <Button text="(855) 888-8399"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#195A47]"
                            hover="hover:bg-[#195A47] hover:text-white"
                            link="tel:(855)888-8399" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;