"use client"
// Components
import Input from "./input";
import Button from "./button";
import Select from "./select";
import Image from "next/image";
// Hooke
import { useEffect, useRef } from "react";
// Swiper
import { register } from 'swiper/element/bundle';
// Images
import One from "media/landing-page-3/hero/1.png";
import Two from "media/landing-page-3/hero/2.png";
import Three from "media/landing-page-3/hero/3.png";
import Four from "media/landing-page-3/hero/4.png";
import Five from "media/landing-page-3/hero/5.png";
import Six from "media/landing-page-3/hero/6.png";

const Hero = () => {
    let servicesArray = ["SEO", "PPC Marketing", "Social Media Management", "Reputation Management", "Content Marketing", "Web Design Development", "Other"];
    let imagesArray = [One, Two, Three, Four, Five, Six, One, Two, Three, Four, Five, Six];
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerGroupSkip: 1,
            injectStyles: [`
                .swiper {
                    overflow: visible;
                }
            `],
            breakpoints: {
                300: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1300: {
                    slidesPerView: 4,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    return (
        <section>
            <div className="__homeHeroGradientBg py-[40px] md:py-[80px] overflow-hidden">
                <div className="container">
                    <h1 className="text-[30px] md:text-[40px] lg:text-[50px] leading-[40px] md:leading-[50px] lg:leading-[60px] text-white font-semibold text-center mb-5 md:mb-10">
                        Exclusively Verified Businesses <br className="sm:block" />
                        With A <span className="text-[#1DD0A4] font-pacifico">Dynamic Edge.</span>
                    </h1>
                    <form autoComplete="off" spellCheck="false" className="grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-10">
                        <Input
                            name="name"
                            placeholder="Name*"
                            css="focus:border-[#1DD0A4]"
                        />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email*"
                            css="focus:border-[#1DD0A4]"
                        />
                        <Input
                            name="phone"
                            type="phone"
                            placeholder="Telephone Number*"
                            css="focus:border-[#1DD0A4]"
                        />
                        <Select
                            options={servicesArray}
                            name="industry"
                            placeholder="Industry ?"
                            css="focus:border-[#1DD0A4]"
                        />
                        <Button
                            text="Get A Free Quote"
                            css="border-[#F85F84] hover:bg-transparent col-span-2 md:col-span-4 lg:col-span-1"
                        />
                    </form>
                    <swiper-container init={false} ref={swiperRef} autoplay-delay="2500" autoplay-disable-on-interaction="false" space-between="30" free-mode="true">
                        {
                            imagesArray && imagesArray.map((e, i) => (<swiper-slide key={i}>
                                <Image src={e} alt="icon" className="rounded-[10px] border-[4px] border-white max-w-none w-full" />
                            </swiper-slide>))
                        }
                    </swiper-container>
                </div>
            </div>
        </section>
    )
}

export default Hero