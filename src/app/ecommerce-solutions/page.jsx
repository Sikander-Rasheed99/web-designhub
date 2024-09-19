// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/ecommerce/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Portfolios from "@/components/portfolios/portfolios";
import Packages from "@/components/packages/packages";
import Reviews from "@/components/reviews/reviews";
import Letstalk from "@/components/letstalk/letstalk";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Script from "next/script";
// Import Images
import banner from "media/ecommerce/hero/store.png";
import smallBannerImage from "media/ecommerce/smallBanner.png";
import portfolioOne from "media/ecommerce/portfolios/one.png";
import portfolioTwo from "media/ecommerce/portfolios/two.png";
import portfolioThree from "media/ecommerce/portfolios/three.png";
import portfolioFour from "media/ecommerce/portfolios/four.png";
import portfolioFive from "media/ecommerce/portfolios/five.png";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "ecommerce",
        subtitle: "Ecommerce Website Design Company",
        title: "Revamping Retail Space With Ecommerce Solutions",
        desc: "As an Ecommerce Solutions Company, we excel in revamping websites across various ecommerce platforms, crafting tailored solutions that drive success on Shopify, WooCommerce, Magento, and more.",
        points: ["Website Design", "Analytics & Tracking", "Conversion Optimization ", "Website Development"],
        banner,
        bg: "__ecommerceHeroGradientBg",
        isForm: true,
        btnBg: "bg-[#005368]",
        btnBorder: "border-[#005368]",
        btnHover: "hover:bg-[#005368]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "ecommerce",
        title: "The Masters of eCommerce Website Design",
        desc: "At Web Design Hub,we design ecommerce websites that not only look fantastic but also generate results that distinguish your company in the market.",
        img: smallBannerImage,
        bgColor: "__ecommerceHeroGradientBg",
        btnBg: "bg-[#005368]",
        btnBorder: "border-[#005368]",
        btnHover: "hover:bg-[#005368]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "Crafting Digital Storefront Dreams",
        desc: "See how we skillfully create digital stores that grab attention, turn visitors into customers. and \n also drive substantial sales growth.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Affordable Packages",
        title: "Finding Value in Every Dollar",
        desc: "our eCommerce solutions company, we prioritize affordability, and delivering top-quality services that won't strain your budget. Experience excellence without compromise.",
        key: 2,
        name: "E-Commerce"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!"
    }
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "I found Web Design Hub when looking for a collaborator for revamping our online store. They showed a thorough knowledge of our demands right from the start of the conversation. Their dedication to providing excellent service, enthusiasm for design, and attention to detail were visible throughout the whole process. The outcome? Our consumers adore our visually appealing and incredibly useful online store.",
            name: "Linda S",
            jd: false,
            profile: "/ecommerce/reviews/1.png"
        },
        {
            message: "I can't convey how happy we are with the changes Web Design Hub has made to our company. Their staff put out a lot of effort to make sure our e-commerce website design not only looked excellent but also functioned without a hitch. They listened to our suggestions, and they went above to make sure every little element was perfect. Our sales have increased significantly since the modification, and our brand's online presence is more powerful than ever. I appreciate you, Web Design Hub. Keep up the good work!",
            name: "John Kennedy",
            jd: false,
            profile: "/ecommerce/reviews/2.png"
        },
        {
            message: "Our experience working with Web Design Hub has been nothing less than extraordinary. They transformed our e-commerce platform into a sleek, contemporary, and effective website. They stand out because they genuinely care about our success. They not only constructed a website but also an effective tool that has greatly increased our online sales. The crew at Web Design Hub is the real deal and understands the power of commitment and consistency.",
            name: "Billy Benson",
            jd: false,
            profile: "/ecommerce/reviews/3.png"
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
                            "name": "Ecommerce Website Design Company",
                            "description": "WebDesignHub is the go-to Ecommerce Website Design Company. Our team crafts online stores that captivate & convert. Elevate your ecommerce with us.",
                            "brand": {
                                "@type": "brand",
                                "name": "WebDesignHub"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "230"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;