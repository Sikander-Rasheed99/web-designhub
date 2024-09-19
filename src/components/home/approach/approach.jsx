// Import Components
import Image from "next/image";
import Link from "next/link";
// Import Css
import styles from "./approach.module.css";
// Import Images
import uiux from "media/home/approach/uiux.png";
import application from "media/home/approach/application.png";
import branding from "media/home/approach/branding.png";
import socialMedia from "media/home/approach/socialMedia.png";
import brandColors from "media/home/approach/brandColors.png";
import btn from "media/home/approach/btn.svg";

const Approach = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] overflow-hidden py-10 lg:py-16 xl:py-20">
                <div className="container">
                    <div className="flex">
                        <div className="basis-full">
                            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-megat text-[#202020] text-center font-normal leading-none mb-3">
                                Our Web Design Agency Takes Center <br className="hidden sm:block" /> Stage in Every Field of Design
                            </h2>
                            <p className="text-base text-[#202020] font-normal text-center mb-10">Web Design Hub has an In-house team of devoted professional web designers and developers, <br className="hidden md:block" /> who are dedicated  to delivering top-tier websites for businesses. <br className="hidden md:block" /> Our website solutions include:</p>
                            <div className={`${styles.__cardsWrapper}`}>
                                <div className="flex justify-evenly md:gap-4 flex-wrap md:flex-nowrap">
                                    <div className="basis-[45%] md:basis-5/12 lg:basis-1/5">
                                        <div className={`${styles.__cards} shadow-[0_23px_56px_rgba(0,0,0,0.3)] relative lg:-rotate-45 lg:right-[-200px] z-[1]`}>
                                            <Link href="/logo-design-company">
                                                <Image src={uiux} alt="uiux" className="object-cover object-center h-52 md:h-96 lg:h-60 xl:h-80" />
                                                <h3 className="text-xl text-white font-medium text-center leading-none absolute left-0 right-0 bottom-2/4 lg:bottom-8">
                                                    Logo
                                                </h3>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="basis-[45%] md:basis-5/12 lg:basis-1/5">
                                        <div className={`${styles.__cards} shadow-[0_23px_56px_rgba(0,0,0,0.3)] relative lg:-rotate-45 lg:right-[-100px] z-[2]`}>
                                            <Link href="/website-development-company">
                                                <Image src={application} alt="application" className="object-cover object-center h-52 md:h-96 lg:h-60 xl:h-80" />
                                                <h3 className="text-xl text-white font-medium text-center leading-none absolute left-0 right-0 bottom-2/4 lg:bottom-8">
                                                    Website
                                                </h3>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="basis-[45%] md:basis-5/12 lg:basis-1/5">
                                        <div className={`${styles.__cards} shadow-[0_23px_56px_rgba(0,0,0,0.3)] relative z-[3]`}>
                                            <Link href="/mobile-app-design-company">
                                                <Image src={branding} alt="branding" className="object-cover object-center h-52 md:h-96 lg:h-60 xl:h-80" />
                                                <h3 className="text-xl text-white font-medium text-center leading-none absolute left-0 right-0 bottom-2/4 lg:bottom-8">
                                                    Application
                                                </h3>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="basis-[45%] md:basis-5/12 lg:basis-1/5">
                                        <div className={`${styles.__cards} shadow-[0_23px_56px_rgba(0,0,0,0.3)] relative lg:rotate-45 lg:right-[100px] z-[4]`}>
                                            <Link href="/digital-marketing-company">
                                                <Image src={socialMedia} alt="socialMedia" className="object-cover object-left h-52 md:h-96 lg:h-60 xl:h-80" />
                                                <h3 className="text-xl text-white font-medium text-center leading-none absolute left-0 right-0 bottom-2/4 lg:bottom-8">
                                                    SMM
                                                </h3>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="basis-[45%] md:basis-5/12 lg:basis-1/5">
                                        <div className={`${styles.__cards} shadow-[0_23px_56px_rgba(0,0,0,0.3)] relative lg:rotate-45 lg:right-[200px] z-[5]`}>
                                            <Link href="/seo-company">
                                                <Image src={brandColors} alt="brandColors" className="object-cover object-center h-52 md:h-96 lg:h-60 xl:h-80" />
                                                <h3 className="text-xl text-white font-medium text-center leading-none absolute left-0 right-0 bottom-2/4 lg:bottom-8">
                                                    SEO
                                                </h3>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href="javascript:$zopim.livechat.window.show();" className="block w-max mx-auto mt-10 hover:scale-75">
                                <Image src={btn} alt="btn" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Approach;