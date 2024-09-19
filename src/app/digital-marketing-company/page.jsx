// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/digital-marketing/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Steps from "@/components/digital-marketing/steps/steps";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Packages from "@/components/packages/packages";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
// Import Images
import banner from "media/digital-marketing/hero/hand.png";
import smallBannerImage from "media/digital-marketing/smallBanner.png";
import Script from "next/script";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "digitalMarketing",
        subtitle: false,
        title: "Hire Top Digital Marketing Company Achieve Maximum ROI in Just 30 Days",
        desc: "Are you looking to see actual, noticeable results with marketing in no time? That's our specialty at top digital marketing company. We design smart campaigns using creative thinking and accurate data to make your brand more visible online. Our services include;",
        points: ["SEO Content Marketing", "Pay Per Click Ads", "Social Media Marketing", "Conversion Rate"],
        banner,
        bg: "__digitalMarketingHeroGradientBg",
        isForm: true,
        btnBg: "bg-[#8A6EA5]",
        btnBorder: "border-[#8A6EA5]",
        btnHover: "hover:bg-[#8A6EA5]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "digitalMarketing",
        title: "Get Noticed Online Our Creative Digital Marketing Company",
        desc: "Let Web Design Hub be your point of reference as you create and improve your digital presence.",
        img: smallBannerImage,
        bgColor: "__digitalMarketingHeroGradientBg",
        btnBg: "bg-[#8A6EA5]",
        btnBorder: "border-[#8A6EA5]",
        btnHover: "hover:bg-[#8A6EA5]",
        theme: "dark"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Digital Marketing Packages",
        title: "Budget-Friendly Digital Brilliance",
        desc: "Our affordable packages never fail to provide the highest quality digital marketing services. What else do you need?",
        key: 3,
        name: "Digital Marketing"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Let’s Talk",
        desc: "Connect with us and let our professional digital marketing experts help you to achieve your business goals without facing any hassles."
    }
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "Web Design Hub's e-commerce digital marketing solutions have skyrocketed our online sales. They're the best at what they do, and our success speaks for itself.",
            name: "Alice Roger",
            jd: false,
            profile: "/digital-marketing/reviews/1.png"
        },
        {
            message: "Our consumer goods brand owes its success to Web Design Hub's digital marketing prowess. They understand our industry like no one else, truly the best.",
            name: "Michael Sorsen",
            jd: false,
            profile: "/digital-marketing/reviews/2.png"
        },
        {
            message: "Web Design Hub's service-focused digital marketing transformed our business. Their expertise shines, and they've earned their reputation as the best in the field.",
            name: "Billy Benson",
            jd: false,
            profile: "/digital-marketing/reviews/3.png"
        },
        {
            message: "I couldn't be happier with Web Design Hub's digital marketing for our service-based company. Their results are unmatched, solidifying their status as the best in the business.",
            name: "Robert Lee",
            jd: false,
            profile: "/digital-marketing/reviews/4.png"
        },
    ]
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <Services />
                <SmallBanner content={smallbanner} />
                <Steps />
                <Packages content={packages} />
                <Reviews content={reviews} />
                <Weare />
                <Contact />
                <Letstalk content={letstalk} />
                <Footer />
                <Script id="general-schema" type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org/",
                            "@type": "Product",
                            "name": "Digital Marketing Company",
                            "description": "WebDesignHub is a top-tier Digital Marketing Company. Our expert team drives results to amplify your online presence. Boost your brand with us.",
                            "brand": {
                                "@type": "brand",
                                "name": "WebDesignHub"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "ratingCount": "830"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;