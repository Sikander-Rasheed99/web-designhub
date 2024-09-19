// Import Components
import Image from "next/image";
import Button from "@/components/button/button";
// Import Images
import laptop from "media/illustration-design/services/laptop.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:py-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Custom Illustration Agency</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">
                            High-Quality Illustration Designs by <br /> Our Professional Illustrators
                        </h2>
                        <p className="text-base text-black font-normal">Hire illustrators to breathe life into your products, services, and any other offerings. <br /> We create visuals that capture attention and convey your message uniquely.</p>
                    </div>
                    <Image src={laptop} alt="laptop" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#A4637A] text-white"
                            hover="hover:bg-[#000000]"
                            link="javascript:$zopim.livechat.window.show();" />
                        <Button text="(855) 888-8399"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#A4637A]"
                            hover="hover:bg-[#A4637A] hover:text-white"
                            link="tel:(855)888-8399" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;