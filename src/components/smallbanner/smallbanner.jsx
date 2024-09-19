// Import Components
import Image from "next/image";
import Button from "@/components/button/button";

const SmallBanner = ({ content }) => {
    const { title, desc, img, page, bgColor, btnBg, btnColor, btnBorder, btnHover, theme } = content;
    return (
        <section>
            <div className={bgColor ?? "bg-[#000000]"}>
                <div className="container pt-10 lg:py-10 xl:py-20 relative z-10">
                    <div className="flex">
                        <div className="basis-full lg:basis-2/4">
                            <h2 className={`text-3xl xl:text-5xl font-megat ${theme === "light" ? "text-black" : "text-white"} font-normal mb-3`}>
                                {title}
                            </h2>
                            <p className={`text-base ${theme === "light" ? "text-black" : "text-white"} font-normal mb-5`} >
                                {desc}
                            </p>
                            <div className="flex items-center gap-3 mb-5 lg:mb-0">
                                <Button text="Start Live Chat"
                                    icon={true}
                                    color={`${btnBg ?? "bg-transparent"} text-white`}
                                    hover="hover:bg-[#000000]"
                                    link="javascript:$zopim.livechat.window.show();" />
                                <Button text="(855) 888-8399"
                                    color={`${btnColor ?? "text-white"} bg-transparent`}
                                    border={`border-2 ${btnBorder ?? "border-[#ffffff]"}`}
                                    hover={`hover:text-white ${btnHover ?? "hover:bg-transparent"}`}
                                    link="tel:(855)888-8399" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:absolute lg:bottom-0 lg:right-0 m-auto w-max z-[-1]">
                        <Image src={img} alt="img" className="max-w-xs lg:max-w-md  xl:max-w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SmallBanner;