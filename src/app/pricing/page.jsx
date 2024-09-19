// Import Page Components
import Hero from "@/components/hero/hero";
import Letstalk from "@/components/letstalk/letstalk";
import Contact from "@/components/contact/contact";
import PricingAndPackages from "@/components/pricingAndPackages/pricingAndPackages";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Reviews from "@/components/reviews/reviews";
// Import Images
import banner from "media/about-us/hero/banner.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "single",
        subtitle: "Web Design & Development",
        title: "Comprehensive Design Solutions at Affordable Prices",
        desc: "Web Design Hub: Your Destination for High-Quality Design and Development Services, Crafted to Fit Your Budget.",
        bg: "__digitalMarketingHeroGradientBg",
        banner,
        btnBg: "bg-[#8A6EA5]",
        btnBorder: "border-[#8A6EA5]",
        btnHover: "hover:bg-[#8A6EA5]"
    };
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!"
    }
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <PricingAndPackages />
                <Reviews />
                <Letstalk content={letstalk} />
                <Contact />
                <Footer />
            </main>
        </>
    );
}

export default Page;