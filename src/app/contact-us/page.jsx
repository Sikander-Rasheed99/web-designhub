// Import Page Components
import Hero from "@/components/hero/hero";
import Letstalk from "@/components/letstalk/letstalk";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
// Import Images
import banner from "media/about-us/hero/banner.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "single",
        subtitle: "Top Web Designers",
        title: "Let's Create Your Dream Website Together",
        desc: "At Web Design Hub, we drive your business to success. From logo and website design to SEO and motion graphics, we offer top-quality services at affordable prices.",
        bg: "__ecommerceHeroGradientBg",
        banner,
        points: ["Website Design", "Website Development", "Custom Logo Design", "Digital Marketing"],
        btnBg: "bg-[#005368]",
        btnBorder: "border-[#005368]",
        btnHover: "hover:bg-[#005368]"
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
                <Contact />
                <Letstalk content={letstalk} />
                <Footer />
            </main>
        </>
    );
}

export default Page;