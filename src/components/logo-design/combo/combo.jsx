// Import Components
import Image from "next/image";
import Button from "@/components/button/button";
// Import Images
import checkCircle from "media/packages/checkCircle.png";
import comboImage from "media/packages/combo.png";
import moneyBack from "media/packages/moneyBack.png";

const Combo = () => {
    // Array for Logo Design List
    const listLogoDesign = [
        "Unlimited Logo Design Concepts",
        "By 8 Dedicated Logo Designers",
        "Unlimited Revisions",
        "Branded Document",
        "Corporate Profile",
        "Turnaround Time 2 Business Days"
    ];
    // Array for Stationary Design List
    const listStationaryDesign = [
        "Free Business Card Design",
        "Free Letterhead Design",
        "Free Envelope Design",
        "Free Compliment Slip Design",
        "Free Corporate Brochure (up-to 6 Pages)"
    ];
    // Array for Social Media Design List
    const listSocialMediaDesign = [
        "Facebook, Twitter, Youtube, Linkedin"
    ];
    // Array for Banner Design List
    const listBannerDesign = [
        "2 Design Concepts",
        "2 Stock Photos for Banners"
    ];
    // Array for Video Animation List
    const listVideoAnimation = [
        "30 Seconds 2D Video Animation",
        "Script Writing",
        "Story Board",
        "Voice Over",
        "Animation with Sound Effect"
    ];
    // Array for Website Design List
    const listWebsiteDesign = [
        "Unlimited Packages Website",
        "5 Stock Photos",
        "1 Year Free Domain Name Registration.",
        "1 Year Free Hosting",
        "Content Management System ( CMS )",
        "Contact Us From",
        "Search Engine Submission",
        "1 Landing Page SDi",
        "1 Blog Theme Design"
    ];
    return (
        <section>
            <div className="__gradientBg3 py-10 lg:py-20">
                <div className="container relative z-10">
                    <span className="text-base font-normal text-white">
                        Logo Branding Services All-in-One Package
                    </span>
                    <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
                        Complete Solution for Time & Value
                    </h2>
                    <div className="bg-[url('../../public/packages/comboBg.png')] bg-cover bg-no-repeat bg-center p-5 lg:w-max">
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div className="basis-full lg:w-max">
                                <div className="lg:border-r-2 lg:w-max border-dashed lg:pr-10 pb-3">
                                    <h4 className="font-megat font-normal text-white text-2xl mb-2">Professional Logo</h4>
                                    <ul>
                                        {
                                            listLogoDesign.map((e, i) => {
                                                return (
                                                    <li className="text-sm md:text-base text-white font-normal flex items-center gap-2 leading-8" key={i}>
                                                        <Image src={checkCircle} alt="checkCircle" />
                                                        <span>{e}</span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="lg:w-max border-dashed lg:pr-10 border-t-2 border-b-2 py-3">
                                    <h4 className="font-megat font-normal text-white text-2xl mb-2">Stationery Design</h4>
                                    <ul>
                                        {
                                            listStationaryDesign.map((e, i) => {
                                                return (
                                                    <li className="text-sm md:text-base text-white font-normal flex items-center gap-2 leading-8" key={i}>
                                                        <Image src={checkCircle} alt="checkCircle" />
                                                        <span>{e}</span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="lg:w-max border-dashed lg:pr-10 border-b-2 py-3">
                                    <h4 className="font-megat font-normal text-white text-2xl mb-2">Social Media Designs</h4>
                                    <ul>
                                        {
                                            listSocialMediaDesign.map((e, i) => {
                                                return (
                                                    <li className="text-sm md:text-base text-white font-normal flex items-center gap-2 leading-8" key={i}>
                                                        <Image src={checkCircle} alt="checkCircle" />
                                                        <span>{e}</span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="lg:border-r-2 lg:w-max border-dashed lg:pr-10 border-b-2 py-3">
                                    <h4 className="font-megat font-normal text-white text-2xl mb-2">Banner Design</h4>
                                    <ul>
                                        {
                                            listBannerDesign.map((e, i) => {
                                                return (
                                                    <li className="text-sm md:text-base text-white font-normal flex items-center gap-2 leading-8" key={i}>
                                                        <Image src={checkCircle} alt="checkCircle" />
                                                        <span>{e}</span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="basis-full lg:w-max">
                                <div className="lg:border-r-2 lg:w-max border-dashed pb-3 pt-3 lg:pt-0 lg:pr-10">
                                    <h4 className="font-megat font-normal text-white text-2xl mb-2">Video Animation</h4>
                                    <ul>
                                        {
                                            listVideoAnimation.map((e, i) => {
                                                return (
                                                    <li className="text-sm md:text-base text-white font-normal flex items-center gap-2 leading-8" key={i}>
                                                        <Image src={checkCircle} alt="checkCircle" />
                                                        <span>{e}</span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="lg:border-r-2 lg:w-max border-dashed border-t-2 py-3 lg:px-10 lg:border-l-2 border-b-2">
                                    <h4 className="font-megat font-normal text-white text-2xl mb-2">Website Design</h4>
                                    <ul>
                                        {
                                            listWebsiteDesign.map((e, i) => {
                                                return (
                                                    <li className="text-sm md:text-base text-white font-normal flex items-center gap-2 leading-8" key={i}>
                                                        <Image src={checkCircle} alt="checkCircle" />
                                                        <span>{e}</span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="lg:w-max">
                                    <h5 className="font-sans font-bold text-5xl text-white mt-5 mb-5">
                                        $3999 <sup className="text-[#A497F5] text-4xl"><del>$7999</del></sup>
                                    </h5>
                                    <Button text="Order Now"
                                        color="bg-[#067AC8] text-white"
                                        border="border-2 border-[#067AC8]"
                                        hover="hover:bg-transparent"
                                        link="javascript:$zopim.livechat.window.show();" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src={comboImage} alt="comboImage" className="absolute z-[2] bottom-[-100px] xl:bottom-0  w-2/5 xl:max-w-max hidden lg:block right-0" />
                    <Image src={moneyBack} alt="moneyBack" className="absolute z-[2] md:max-w-max lg:top-[150px] xl:top-[50px] right-[50px] lg:right-0 xl:right-[150px] lg:bottom-[inherit] bottom-[20px] top-[inherit] max-w-[40%]" />
                </div>
            </div>
        </section>
    );
}

export default Combo;