// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/illustration-design/services/services";
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
import banner from "media/illustration-design/hero/man.png";
import smallBannerImage from "media/illustration-design/smallBanner.png";
import portfolioOne from "media/illustration-design/portfolios/one.png";
import portfolioTwo from "media/illustration-design/portfolios/two.png";
import portfolioThree from "media/illustration-design/portfolios/three.png";
import portfolioFour from "media/illustration-design/portfolios/four.png";
import portfolioFive from "media/illustration-design/portfolios/five.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "illustrationDesign",
        subtitle: "Best Illustration Designers",
        title: "5-Star Rated Top Illustration Design Company",
        desc: "When you hire Web Design Hub,  you gain access to the best character illustrators, and gaming artwork. We make custom character designs, immersive gaming illustrations, and any related creative illustrations. Our skill in illustration design combines unique qualities that make us a distinctive illustration company.",
        points: ["Unique Artistry", "Time Efficiency", "Attention to Detail", "Original Art"],
        isForm: true,
        banner,
        bg: "bg-[url('../../public/illustration-design/hero/bg.png')] bg-cover bg-no-repeat bg-left-top",
        btnBg: "bg-[#A4637A]",
        btnBorder: "border-[#A4637A]",
        btnHover: "hover:bg-[#A4637A]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "ecommerce",
        title: "Let us develop a responsive website to help you attract more visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
        img: smallBannerImage,
        bgColor: "bg-[#241C1B] lg:bg-[url('../../public/illustration-design/smallBannerClip.png')] bg-contain bg-no-repeat bg-right-top",
        btnBg: "bg-[#A4637A]",
        btnBorder: "border-[#A4637A]",
        btnHover: "hover:bg-[#A4637A]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "Our Illustration Agency’s Artwork Creation",
        desc: "Our illustration artists work closely with clients to capture a design's personality, conveying emotions, and brand identity. \n We create character designs with depth and meaning.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 5,
        name: "Illustration Design"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!"
    }
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "Web Design Hub created a special and eye-catching custom logo design that perfectly shows what our financial consulting firm is about. Our team and clients love it, thanks to their amazing logo design skills.",
            name: "Jennifer Mitchell",
            jd: "Senior Financial Advisor",
            profile: "/illustration-design/reviews/1.png"
        },
        {
            message: "Their UI/UX web design service has significantly improved the visual appeal and functionality of our ecommerce website across devices. The user engagement on our website has increased a lot as well. Web Design Hub is the best web design company I have ever worked with.",
            name: "Sarah Johnson",
            jd: "E-commerce Manager",
            profile: "/illustration-design/reviews/2.png"
        },
        {
            message: "Hiring Web Design Hub for our tech startup web design and development has been one of the best decisions. It's not just about aesthetics; the functionality and user experience they delivered are nothing short of exceptional.",
            name: "Emily Parker",
            jd: "Co-founder",
            profile: "/illustration-design/reviews/3.png"
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
                            "name": "Illustration Design Company",
                            "description": "WebDesignHub top premium illustration design Company, crafting bespoke artwork tailored to capture the essence of brands and bring creative ideas to life.",
                            "brand": {
                                "@type": "brand",
                                "name": "WebDesignHub"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "289"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;