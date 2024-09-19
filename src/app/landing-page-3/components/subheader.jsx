"use client"
// Components
import Image from "next/image";
// Hooke
import { useEffect, useRef } from "react";
// Swiper
import { register } from 'swiper/element/bundle';

const SubHeader = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerGroupSkip: 1,
            injectStyles: [`
                .swiper {
                    text-align: center;
                }
                .swiper-wrapper {
                    align-items: flex-end;
                }
            `],
            breakpoints: {
                300: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                },
                1300: {
                    slidesPerView: 7,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    let array = [
        { text: "Logo Design", img: "/landing-page-3/subheader/1.svg", w: 59, h: 58 },
        { text: "Creative Copywriting", img: "/landing-page-3/subheader/2.svg", w: 59, h: 58 },
        { text: "Digital Marketing", img: "/landing-page-3/subheader/3.svg", w: 58, h: 61 },
        { text: "Ecommerce Web Solutions", img: "/landing-page-3/subheader/4.svg", w: 78, h: 54 },
        { text: "Website Development", img: "/landing-page-3/subheader/5.svg", w: 52, h: 60 },
        { text: "Illustration Design", img: "/landing-page-3/subheader/6.svg", w: 70, h: 57 },
        { text: "Mobile Application", img: "/landing-page-3/subheader/7.svg", w: 54, h: 54 },
        { text: "SEO Services", img: "/landing-page-3/subheader/8.svg", w: 54, h: 54 }
    ]
    return (
        <section>
            <div className="py-[20px] shadow-lg">
                <div className="container overflow-hidden">
                    <swiper-container init={false} ref={swiperRef} autoplay-delay="2500" autoplay-disable-on-interaction="false">
                        {
                            array && array.map(({ text, img, w, h }, i) => (<swiper-slide key={i}>
                                <Image src={img} width={w} height={h} alt="icon" className="inline-block mb-3" />
                                <h3 className="text-[#616161] leading-[22px] text-[12px]">{text}</h3>
                            </swiper-slide>))
                        }
                    </swiper-container>
                </div>
            </div>
        </section>
    )
}

export default SubHeader;