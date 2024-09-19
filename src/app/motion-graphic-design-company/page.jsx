// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/motion-graphics/services/services";
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
import smallBannerImage from "media/motion-graphics/smallBanner.png";
import portfolioOne from "media/motion-graphics/portfolios/one.png";
import portfolioTwo from "media/motion-graphics/portfolios/two.png";
import portfolioThree from "media/motion-graphics/portfolios/three.png";
import portfolioFour from "media/motion-graphics/portfolios/four.png";
import portfolioFive from "media/motion-graphics/portfolios/five.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "motionGraphics",
        subtitle: "Experience Motion Magic With",
        title: "Top Motion Graphic Design Company",
        desc: "Our creative motion graphics designers, with a strong combination of skills and innovative equipment create attractive, profitable 3D animations that will enrich your business with success.",
        points: ["Custom Animation", "Visual Effects (VFX)", "Character Animation", "Logo Animation"],
        bg: "bg-[#0B2218]",
        video: "videos/motionGraphics.mp4",
        isForm: true,
        btnBg: "bg-[#195A47]",
        btnBorder: "border-[#195A47]",
        btnHover: "hover:bg-[#195A47]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "ecommerce",
        title: "power of Visual by our Motion Graphics Designers.",
        desc: "We use animation, 3D modeling, and fascinating effects to give your stories a twist of practical life. Our work captivates the audience by enduring narratives.",
        img: smallBannerImage,
        bgColor: "bg-[#0B2218]",
        btnBg: "bg-[#195A47]",
        btnBorder: "border-[#195A47]",
        btnHover: "hover:bg-[#195A47]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "We Turn Visions into Animation",
        desc: "Channeling your imagination with our expert motion graphics team,we turn your ideas into \n mesmerizing animations that captivate and convert.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 7,
        name: "Motion Graphics"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Discuss with us and let us design motion graphics for you without facing any hassles."
    }
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "Excellent work and exceptional services! With incredible logo animation and appealing motion graphics for our marketing campaigns, the team brought our brand to life. They definitely stand out due to their inventiveness and attention to detail.",
            name: "Kylie Madonna",
            jd: false,
            profile: "/motion-graphics/reviews/1.png"
        },
        {
            message: "I don’t have words to describe the services offered by Web Design Hub. I just want to state, “Mind Blowing Visual Effects!” The whole team gave their 101% with us on a high-profile event, and their visual effects were just amazing. They turned the event visuals we provided into something extraordinary. I would personally recommend each one of you to get your services from this Company.",
            name: "Ellen Brown",
            jd: false,
            profile: "/motion-graphics/reviews/2.png"
        },
        {
            message: "I am glad I chose Web Design Hub for character animation services. They were ideal for the animated figures we required for our educational materials program. Our audience likes the cartoons because they are engaging and attractive. Their crew is unmatched in terms of talent and professionalism.",
            name: "John Lennon",
            jd: false,
            profile: "/motion-graphics/reviews/3.png"
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
                            "@context": "http://schema.org",
                            "@type": "Product",
                            "name": "Motion Graphic Design Company",
                            "description": "WebDesignHub is your cutting-edge motion graphic design company, producing captivating animations that engage, entertain, and effectively convey your brand message.",
                            "brand": {
                                "@type": "brand",
                                "name": "WebDesignHub"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "147"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;