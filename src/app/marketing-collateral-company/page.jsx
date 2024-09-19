// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/marketing-collateral/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Portfolios from "@/components/portfolios/portfolios";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Packages from "@/components/packages/packages";
import Script from "next/script";
// Import Images
import banner from "media/marketing-collateral/hero/stationary.png";
import smallBannerImage from "media/marketing-collateral/smallBanner.png";
import portfolioOne from "media/marketing-collateral/portfolios/one.png";
import portfolioTwo from "media/marketing-collateral/portfolios/two.png";
import portfolioThree from "media/marketing-collateral/portfolios/three.png";
import portfolioFour from "media/marketing-collateral/portfolios/four.png";
import portfolioFive from "media/marketing-collateral/portfolios/five.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "marketingCollateral",
        subtitle: "Top Marketing Collateral Company",
        title: "Hire Marketing Collateral Company For Superior Engagement",
        desc: "Looking for experts to enhance your content and reach your audience effectively? At Web Design Hub, our team consists of top-notch content writers and marketers who can create engaging content to grow and retain your customer base with confidence.",
        points: ["Measurable Results", "Enhanced Brand Image", "Save Time & Resources", "Comprehensive Solutions"],
        banner,
        bg: "bg-[url('../../public/marketing-collateral/hero/bg.png')] bg-cover bg-no-repeat bg-left-top",
        isForm: true,
        btnBg: "bg-[#223C5A]",
        btnBorder: "border-[#223C5A]",
        btnHover: "hover:bg-[#223C5A]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "marketingCollateral",
        title: "Hire Us For Powerful Marketing Collateral Service",
        desc: "With the help of effective Marketing Collateral Services at Web Design Hub, start your digital adventure. ",
        img: smallBannerImage,
        bgColor: "__marketingCollateralHeroGradientBg",
        btnBg: "bg-[#223C5A]",
        btnBorder: "border-[#223C5A]",
        btnHover: "hover:bg-[#223C5A]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "Boosting Brands with Creative Hands",
        desc: "We empower brands to reach new heights. Our marketing experts design custom marketing collateral \n solutions that captivates your target and boosts conversions. ",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 11,
        name: "Marketing Collateral"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Let’s Talk",
        desc: "Connect with us and let our professional copywriters help you to achieve your business goals without facing any hassles."
    }
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "Working with Web Design Hub, the marketing collateral team helped change the game. Every brochure, flyer, and presentation they've created for us demonstrates their limitless ingenuity. Our updated material has left our clients really thrilled, and it surely helped to our recent success. I personally recommend them to each one of you.",
            name: "Emily Kennedy",
            jd: false,
            profile: "/marketing-collateral/reviews/1.png"
        },
        {
            message: "I wanted marketing materials for my small business that would have a huge impact on a tight budget. This marketing collateral team not only got my concept but also made the most of every dollar to produce materials of the highest caliber. Their attention to detail on everything from business cards to fliers has improved the visibility of my brand. Since using their material, I've noticed a substantial rise in inquiries and purchases. Thank you to each team player for helping me throughout everything and for remaining committed.",
            name: "Michael Sherling",
            jd: false,
            profile: "/marketing-collateral/reviews/2.png"
        },
        {
            message: "Event preparation demands attention to detail, and my go-to resource for outstanding promotional materials has been Web Design Hub. They've assisted me in turning events into life-changing experiences, with anything from attractive posters to interesting pamphlets. It is just amazing how well they are able to capture the soul of each event and transform it into collateral. Without them, I wouldn't dare attempt to organize a gathering.",
            name: "Sarah Kyle",
            jd: false,
            profile: "/marketing-collateral/reviews/3.png"
        }
    ]
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <Services />
                <SmallBanner content={smallbanner} />
                <Portfolios content={portfolios} />
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
                            "name": "Marketing Collateral Company",
                            "description": "WebDesignHub specializes in creating compelling marketing collateral that effectively communicates your brand's message, engages audiences, and supports sales efforts.",
                            "brand": {
                                "@type": "brand",
                                "name": "WebDesignHub"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "567"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;