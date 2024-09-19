// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/about-us/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
// Import Images
import banner from "media/about-us/hero/banner.png";
import smallBannerImage from "media/home/smallBanner.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "single",
        subtitle: "Web Design Hub Where Brands",
        title: "Are Recognized & Businesses are Boosted",
        desc: "Welcome to Web Design Hub, the meeting place of creativity and expertise. We are your dependable partner in creating outstanding digital experiences, growing businesses, and making sure your brand stands out in the constant competitive environment.",
        points: ["Logo Designing", "Digital Marketing", "SEO Services", "Website Development"],
        banner,
        bg: "__homeHeroGradientBg",
        btnBg: "bg-[#7F6CC7]",
        btnBorder: "border-[#7F6CC7]",
        btnHover: "hover:bg-[#7F6CC7]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "home",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "__homeHeroGradientBg",
        btnBg: "bg-[#7F6CC7]",
        btnBorder: "border-[#7F6CC7]",
        btnHover: "hover:bg-[#7F6CC7]",
        theme: "dark"
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
                <Services />
                <SmallBanner content={smallbanner} />
                <Reviews />
                <Weare />
                <Contact />
                <Letstalk content={letstalk} />
                <Footer />
            </main>
        </>
    );
}

export default Page;