// Imports Components
import Button from "@/components/button/button";
import Image from "next/image";
import Link from "next/link";
// Import Images
import letstalk from "media/letstalk.png";

const Letstalk = ({ content }) => {
    const { title, desc } = content;
    return (
        <section>
            <div className="__homeHeroGradientBg py-10 lg:pb-20 xl:py-24 relative overflow-hidden z-[1]">
                <div className="container">
                    <div className="flex items-end lg:items-center lg:gap-5 flex-wrap lg:flex-nowrap">
                        <div className="basis-full lg:basis-[40%] mb-8 lg:mb-0">
                            <h3 className="text-2xl lg:text-4xl leading-none xltext-5xl font-megat text-white font-normal">{title}</h3>
                            <p className="text-base text-white font-normal">{desc}</p>
                        </div>
                        <div className="basis-[50%] lg:basis-[35%] mb-8 md:mb-0">
                            <Link href="tel:(855)888-8399" className="text-2xl lg:text-4xl leading-none xltext-5xl font-normal font-megat  text-white block mb-4">(855) 888-8399</Link>
                            <div className="flex items-center gap-3">
                                <Button text="Start Live Chat"
                                    icon={true}
                                    color="bg-[#AE86F9] text-white"
                                    hover="hover:bg-[#000000]"
                                    link="javascript:$zopim.livechat.window.show();" />
                                <Button text="(855) 888-8399"
                                    color="bg-transparent text-white"
                                    border="border-2 border-[#AE86F9]"
                                    hover="hover:bg-[#AE86F9]"
                                    link="tel:(855)888-8399" />
                            </div>
                        </div>
                        <div className="basis-[50%] lg:basis-[25%]">
                            <Link href="mailto:info@webdesignhub.co" className="text-xl lg:text-2xl font-medium font-sans text-white">Discuss Your Ideas <br />Info@WebDesignHub.Co</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 lg:bottom-0 lg:top-auto left-0 z-[-1]">
                    <Image src={letstalk} alt="letstalk" />
                </div>
            </div>
        </section>
    );
}

export default Letstalk;